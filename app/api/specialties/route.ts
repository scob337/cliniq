import { specialties } from '@/lib/data/specialties';
import { NextResponse } from 'next/server';

/**
 * GET /api/specialties
 * احصلي على جميع التخصصات الطبية
 */
export async function GET() {
  try {
    return NextResponse.json(
      {
        نجح: true,
        البيانات: specialties,
        العدد: specialties.length,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        نجح: false,
        خطأ: 'فشل في جلب التخصصات',
      },
      { status: 500 },
    );
  }
}
