import {
  hospitals,
  getHospitalById,
  searchHospitals,
} from '@/lib/data/hospitals';
import { getDoctorsByFacility } from '@/lib/data/doctors';
import { NextResponse, NextRequest } from 'next/server';

/**
 * GET /api/hospitals
 * احصل على المستشفيات والعيادات
 *
 * معاملات الاستعلام:
 * - معرف: معرف المستشفى (اختياري)
 * - نوع: نوع المرفق hospital أو clinic (اختياري)
 * - محافظة: المحافظة (اختياري)
 * - بحث: البحث عن نص (اختياري)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('معرف');
    const type = searchParams.get('نوع') as 'hospital' | 'clinic' | null;
    const province = searchParams.get('محافظة');
    const searchQuery = searchParams.get('بحث');

    // البحث برقم معرف
    if (id) {
      const hospital = getHospitalById(id);
      if (!hospital) {
        return NextResponse.json(
          {
            نجح: false,
            خطأ: 'لم يتم العثور على المستشفى',
          },
          { status: 404 },
        );
      }

      // أرسل بيانات الأطباء في المستشفى أيضاً
      const doctors = getDoctorsByFacility(id);

      return NextResponse.json(
        {
          نجح: true,
          البيانات: {
            ...hospital,
            الأطباء: doctors,
          },
        },
        { status: 200 },
      );
    }

    // البحث بالنص
    if (searchQuery) {
      const results = searchHospitals(searchQuery);
      return NextResponse.json(
        {
          نجح: true,
          البيانات: results,
          العدد: results.length,
        },
        { status: 200 },
      );
    }

    // الفلترة حسب النوع والمحافظة
    let results = [...hospitals];

    if (type && ['hospital', 'clinic'].includes(type)) {
      results = results.filter((h) => h.type === type);
    }

    if (province) {
      results = results.filter((h) => h.province === province);
    }

    return NextResponse.json(
      {
        نجح: true,
        البيانات: results,
        العدد: results.length,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        نجح: false,
        خطأ: 'فشل في جلب المستشفيات',
      },
      { status: 500 },
    );
  }
}
