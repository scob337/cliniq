import { specialties } from '@/lib/data/specialties';
import { NextRequest, NextResponse } from 'next/server';

/**
 * GET /api/specialties
 * احصل على جميع التخصصات الطبية مع إمكانية الفلترة
 * 
 * Query Parameters:
 * - province: المحافظة (مثل: cairo, alexandria)
 * - minPrice: الحد الأدنى لسعر الكشف
 * - maxPrice: الحد الأقصى لسعر الكشف
 * - search: البحث في اسم التخصص
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    
    // الحصول على معاملات الفلترة
    const province = searchParams.get('province');
    const minPrice = searchParams.get('minPrice');
    const maxPrice = searchParams.get('maxPrice');
    const search = searchParams.get('search')?.toLowerCase();

    // البدء بجميع التخصصات
    let filtered = [...specialties];

    // فلترة حسب المحافظة
    if (province) {
      filtered = filtered.filter(specialty => 
        specialty.provinces.includes(province)
      );
    }

    // فلترة حسب السعر الأدنى
    if (minPrice) {
      const minPriceNum = parseFloat(minPrice);
      filtered = filtered.filter(specialty => 
        specialty.consultation_fee >= minPriceNum
      );
    }

    // فلترة حسب السعر الأقصى
    if (maxPrice) {
      const maxPriceNum = parseFloat(maxPrice);
      filtered = filtered.filter(specialty => 
        specialty.consultation_fee <= maxPriceNum
      );
    }

    // فلترة حسب البحث
    if (search) {
      filtered = filtered.filter(specialty => 
        specialty.name.includes(search) || 
        specialty.description?.includes(search)
      );
    }

    return NextResponse.json(
      {
        نجح: true,
        البيانات: filtered,
        العدد: filtered.length,
        الإجمالي: specialties.length,
        الفلاتر: {
          المحافظة: province || 'الكل',
          السعر_من: minPrice || 'بدون تحديد',
          السعر_الى: maxPrice || 'بدون تحديد',
          البحث: search || 'بدون بحث',
        },
      },
      { status: 200 },
    );
  } catch (error) {
    console.error('خطأ في جلب التخصصات:', error);
    return NextResponse.json(
      {
        نجح: false,
        خطأ: 'فشل في جلب التخصصات',
      },
      { status: 500 },
    );
  }
}
