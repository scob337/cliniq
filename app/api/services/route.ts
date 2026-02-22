import { services } from '@/lib/data/services';
import { NextResponse } from 'next/server';

/**
 * GET /api/services
 * احصل على جميع الخدمات الطبية
 */
export async function GET() {
  try {
    return NextResponse.json(
      {
        نجح: true,
        البيانات: services,
        العدد: services.length,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        نجح: false,
        خطأ: 'فشل في جلب الخدمات',
      },
      { status: 500 },
    );
  }
}
