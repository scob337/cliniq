// examples/useSpecialties.tsx
// Hook مخصص للحصول على التخصصات

import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

export function useSpecialties() {
  return useQuery({
    queryKey: ['specialties'],
    queryFn: async () => {
      const response = await fetch('/api/specialties');
      if (!response.ok) throw new Error('فشل جلب التخصصات');
      return response.json();
    }
  });
}

// examples/useProvinces.tsx
// Hook مخصص للحصول على المحافظات

// re-use `useQuery` imported above

export function useProvinces(provinceId?: string) {
  const queryString = provinceId ? `?محافظة=${provinceId}` : '';

  return useQuery({
    queryKey: ['provinces', provinceId],
    queryFn: async () => {
      const response = await fetch(`/api/provinces${queryString}`);
      if (!response.ok) throw new Error('فشل جلب المحافظات');
      return response.json();
    }
  });
}

// examples/useDoctors.tsx
// Hook مخصص للحصول على الأطباء مع خيارات متعددة

// re-use `useQuery` imported above

export interface DoctorFilters {
  معرف?: string;
  تخصص?: string;
  محافظة?: string;
  منطقة?: string;
  بحث?: string;
}

export function useDoctors(filters?: DoctorFilters) {
  const queryParams = new URLSearchParams();

  if (filters?.معرف) queryParams.append('معرف', filters.معرف);
  if (filters?.تخصص) queryParams.append('تخصص', filters.تخصص);
  if (filters?.محافظة) queryParams.append('محافظة', filters.محافظة);
  if (filters?.منطقة) queryParams.append('منطقة', filters.منطقة);
  if (filters?.بحث) queryParams.append('بحث', filters.بحث);

  const queryString = queryParams.toString() ? `?${queryParams.toString()}` : '';

  return useQuery({
    queryKey: ['doctors', filters],
    queryFn: async () => {
      const response = await fetch(`/api/doctors${queryString}`);
      if (!response.ok) throw new Error('فشل جلب بيانات الأطباء');
      return response.json();
    }
  });
}

// examples/useServices.tsx
// Hook مخصص للحصول على الخدمات

// re-use `useQuery` imported above

export function useServices() {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const response = await fetch('/api/services');
      if (!response.ok) throw new Error('فشل جلب الخدمات');
      return response.json();
    }
  });
}

// ===================================
// مثال على استخدام الـ Hooks
// ===================================

/**
 * مثال 1: عرض قائمة التخصصات
 */
export function SpecialtiesList() {
  const { data, isLoading, error } = useSpecialties();

  if (isLoading) return <div>جاري التحميل...</div>;
  if (error) return <div>خطأ: {error.message}</div>;

  return (
    <div className="grid grid-cols-3 gap-4">
      {data?.البيانات?.map((specialty) => (
        <div key={specialty.id} className="card">
          <img src={specialty.image} alt={specialty.name} />
          <h3>{specialty.name}</h3>
          <p>{specialty.description}</p>
        </div>
      ))}
    </div>
  );
}

/**
 * مثال 2: البحث عن أطباء
 */
export function DoctorSearch() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const { data, isLoading } = useDoctors({ بحث: searchQuery });

  return (
    <div>
      <input
        type="text"
        placeholder="ابحث عن طبيب..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {isLoading && <div>جاري البحث...</div>}

      <div className="results">
        {data?.البيانات?.map((doctor) => (
          <div key={doctor.id} className="doctor-card">
            <img src={doctor.image} alt={doctor.name} />
            <h3>{doctor.name}</h3>
            <p>⭐ {doctor.rating} ({doctor.reviews} تقييم)</p>
            <p>الخبرة: {doctor.experience} سنة</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * مثال 3: فلترة أطباء حسب التخصص والمحافظة
 */
export function DoctorFilter() {
  const [specialty, setSpecialty] = React.useState('dermatology');
  const [province, setProvince] = React.useState('cairo');

  const { data: doctors } = useDoctors({
    تخصص: specialty,
    محافظة: province
  });

  return (
    <div>
      <select value={specialty} onChange={(e) => setSpecialty(e.target.value)}>
        <option value="dermatology">جلدية</option>
        <option value="cardiology">قلب</option>
        <option value="pediatrics">أطفال</option>
      </select>

      <select value={province} onChange={(e) => setProvince(e.target.value)}>
        <option value="cairo">القاهرة</option>
        <option value="giza">الجيزة</option>
        <option value="alexandria">الإسكندرية</option>
      </select>

      <div>
        {doctors?.البيانات?.map((doctor) => (
          <div key={doctor.id} className="doctor-item">
            <h4>{doctor.name}</h4>
            <p>{doctor.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * مثال 4: استخدام Vanilla JavaScript
 */
async function getSpecialtiesVanilla() {
  try {
    const response = await fetch('/api/specialties');
    const { البيانات, العدد } = await response.json();

    console.log(`عدد التخصصات: ${العدد}`);
    البيانات.forEach(specialty => {
      console.log(`${specialty.name} - ${specialty.description}`);
    });
  } catch (error) {
    console.error('خطأ:', error);
  }
}

/**
 * مثال 5: استخدام Axios
 */
import axios from 'axios';

async function searchDoctorsWithAxios(query: string) {
  try {
    const { data } = await axios.get('/api/doctors', {
      params: { بحث: query }
    });

    return data.البيانات;
  } catch (error) {
    console.error('خطأ في البحث:', error);
    return [];
  }
}

/**
 * مثال 6: مرحلة حياة الكومبوننت (useEffect)
 */

export function DoctorCard({ doctorId }: { doctorId: string }) {
  const [doctor, setDoctor] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDoctor = async () => {
      try {
        const response = await fetch(`/api/doctors?معرف=${doctorId}`);
        const { البيانات } = await response.json();
        setDoctor(البيانات[0]);
      } catch (error) {
        console.error('خطأ:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctor();
  }, [doctorId]);

  if (loading) return <div>جاري التحميل...</div>;
  if (!doctor) return <div>لم يتم العثور على الطبيب</div>;

  return (
    <div className="doctor-card">
      <img src={doctor.image} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>التخصص: {doctor.specialty}</p>
      <p>الخبرة: {doctor.experience} سنة</p>
      <p>التقييم: ⭐ {doctor.rating}</p>
      <p>الهاتف: {doctor.phone}</p>
      <p>{doctor.about}</p>
    </div>
  );
}

/**
 * مثال 7: معالجة الأخطاء المتقدمة
 */
export async function fetchWithErrorHandling(
  endpoint: string,
  params?: Record<string, string>
) {
  try {
    const queryString = new URLSearchParams(params).toString();
    const url = `${endpoint}${queryString ? '?' + queryString : ''}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: خطأ في الخادم`);
    }

    const { نجح, البيانات, خطأ } = await response.json();

    if (!نجح) {
      throw new Error(خطأ || 'حدث خطأ غير متوقع');
    }

    return البيانات;
  } catch (error) {
    console.error('خطأ في الطلب:', error);
    throw error;
  }
}

/**
 * مثال 8: استخدام TypeScript للأمان
 */

interface Specialty {
  id: string;
  name: string;
  description?: string;
  image?: string;
}

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  image: string;
  phone: string;
  email: string;
}

interface ApiResponse<T> {
  نجح: boolean;
  البيانات: T[];
  العدد: number;
}

async function getSpecialtiesTyped(): Promise<Specialty[]> {
  const response = await fetch('/api/specialties');
  const data: ApiResponse<Specialty> = await response.json();
  return data.البيانات;
}

async function getDoctorsTyped(specialty: string): Promise<Doctor[]> {
  const response = await fetch(`/api/doctors?تخصص=${specialty}`);
  const data: ApiResponse<Doctor> = await response.json();
  return data.البيانات;
}
