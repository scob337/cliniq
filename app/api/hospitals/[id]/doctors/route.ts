import {
  getHospitalById,
} from '@/lib/data/hospitals';
import { getDoctorsByFacility } from '@/lib/data/doctors';
import { NextResponse, NextRequest } from 'next/server';

/**
 * GET /api/hospitals/[id]/doctors
 * احصل على الأطباء في مستشفى معين
 */
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } | Promise<{ id: string }> },
) {
  try {
    const { id } = (await params) as { id: string };

    // تحقق من وجود المستشفى
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

    // احصل على الأطباء في هذه المستشفى
    const doctors = getDoctorsByFacility(id);

    return NextResponse.json(
      {
        نجح: true,
        المستشفى: hospital.name,
        البيانات: doctors,
        العدد: doctors.length,
      },
      { status: 200 },
    );
  } catch {
    return NextResponse.json(
      {
        نجح: false,
        خطأ: 'فشل في جلب أطباء المستشفى',
      },
      { status: 500 },
    );
  }
}
