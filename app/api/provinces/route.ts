import { provinces, getProvinceById } from '@/lib/data/provinces';
import { NextResponse, NextRequest } from 'next/server';

/**
 * GET /api/provinces
 * احصل على جميع المحافظات والمناطق
 *
 * معاملات الاستعلام:
 * - محافظة: معرف المحافظة (اختياري)
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const provinceId = searchParams.get('محافظة');

    if (provinceId) {
      const province = getProvinceById(provinceId);
      if (!province) {
        return NextResponse.json(
          {
            نجح: false,
            خطأ: 'لم يتم العثور على المحافظة',
          },
          { status: 404 },
        );
      }

      return NextResponse.json(
        {
          نجح: true,
          البيانات: province,
        },
        { status: 200 },
      );
    }

    return NextResponse.json(
      {
        نجح: true,
        البيانات: provinces,
        العدد: provinces.length,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        نجح: false,
        خطأ: 'فشل في جلب المحافظات',
      },
      { status: 500 },
    );
  }
}
