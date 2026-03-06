import {
  doctors,
  getDoctorById,
  getDoctorsBySpecialty,
  getDoctorsByFacility,
  searchDoctors,
} from '@/lib/data/doctors';
import { NextResponse, NextRequest } from 'next/server';

/**
 * GET /api/doctors
 * احصل على الأطباء
 *
 * معاملات الاستعلام:
 * - معرف: معرف الطبيب (اختياري)
 * - تخصص: التخصص (اختياري)
 * - مستشفى: معرف المستشفى (اختياري)
 * - بحث: البحث عن نص (اختياري)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('معرف');
    const specialty = searchParams.get('تخصص');
    const facilityId = searchParams.get('مستشفى');
    const searchQuery = searchParams.get('بحث');

    // البحث برقم معرف
    if (id) {
      const doctor = getDoctorById(id);
      if (!doctor) {
        return NextResponse.json(
          {
            نجح: false,
            خطأ: 'لم يتم العثور على الطبيب',
          },
          { status: 404 },
        );
      }

      return NextResponse.json(
        {
          نجح: true,
          البيانات: doctor,
        },
        { status: 200 },
      );
    }

    // البحث بالنص
    if (searchQuery) {
      const results = searchDoctors(searchQuery);
      return NextResponse.json(
        {
          نجح: true,
          البيانات: results,
          العدد: results.length,
        },
        { status: 200 },
      );
    }

    // الفلترة حسب التخصص والمستشفى
    let results = [...doctors];

    if (specialty) {
      results = results.filter((d) => d.specialty === specialty);
    }

    if (facilityId) {
      results = results.filter((d) => d.facilityId === facilityId);
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
        خطأ: 'فشل في جلب الأطباء',
      },
      { status: 500 },
    );
  }
}
