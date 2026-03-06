/**
 * بيانات المستشفيات والعيادات
 */

export interface Hospital {
  id: string;
  name: string;
  type: 'hospital' | 'clinic';
  phone: string;
  email: string;
  address: string;
  province: string;
  area: string;
  image: string;
  rating: number;
  reviews: number;
  specialties: string[];
  services?: string[];
  description?: string;
  operatingHours?: {
    open: string;
    close: string;
  };
  createdAt?: Date;
}

export const hospitals: Hospital[] = [
  {
    id: 'hosp_001',
    name: 'مستشفى الأمل المتخصصة',
    type: 'hospital',
    phone: '+201006234567',
    email: 'hospital@amal.com',
    address: 'شارع النيل، مدينة نصر',
    province: 'cairo',
    area: 'cairo_madinet',
    image: 'https://via.placeholder.com/250?text=مستشفى+الامل',
    rating: 4.8,
    reviews: 345,
    specialties: ['general_surgery', 'cardiology', 'orthopedics'],
    services: ['consultation', 'medical_services', 'lab_tests', 'home_visits'],
    description: 'مستشفى معتمدة دولياً متخصصة في الجراحة العامة والعمليات الكبرى بأحدث التقنيات',
    operatingHours: {
      open: '08:00',
      close: '22:00',
    },
  },
  {
    id: 'hosp_002',
    name: 'مستشفى الحياة الجديدة',
    type: 'hospital',
    phone: '+201014234567',
    email: 'hospital@newlife.com',
    address: 'شارع منتزة، الإسكندرية',
    province: 'alexandria',
    area: 'alex_montaza',
    image: 'https://via.placeholder.com/250?text=مستشفى+الحياة',
    rating: 4.7,
    reviews: 289,
    specialties: ['cardiology', 'endocrinology', 'pediatrics'],
    services: ['consultation', 'medical_services', 'lab_tests', 'home_visits'],
    description: 'مستشفى متخصصة في أمراض القلب والأوعية الدموية بوحدة قسطرة حديثة',
    operatingHours: {
      open: '07:00',
      close: '23:00',
    },
  },
  {
    id: 'clinic_001',
    name: 'عيادة النيل الطبية',
    type: 'clinic',
    phone: '+201004234567',
    email: 'clinic@alnile.com',
    address: 'شارع النيل، المعادي',
    province: 'cairo',
    area: 'cairo_maadi',
    image: 'https://via.placeholder.com/250?text=عيادة+النيل',
    rating: 4.6,
    reviews: 267,
    specialties: ['internal_medicine', 'gastroenterology', 'urology'],
    services: ['consultation', 'medical_services', 'lab_tests', 'home_visits'],
    description: 'عيادة متكاملة تقدم خدمات صحية شاملة بمستوى عالي مع فريق طبي متعدد التخصصات',
    operatingHours: {
      open: '09:00',
      close: '21:00',
    },
  },
  {
    id: 'clinic_002',
    name: 'عيادة النور للعيون',
    type: 'clinic',
    phone: '+201008234567',
    email: 'eyes@clinic.com',
    address: 'شارع النيل، الإسكندرية الشرقية',
    province: 'alexandria',
    area: 'alex_east',
    image: 'https://via.placeholder.com/250?text=عيادة+النور',
    rating: 4.7,
    reviews: 198,
    specialties: ['ophthalmology'],
    services: ['consultation', 'lab_tests'],
    description: 'عيادة متخصصة في طب العيون بأحدث التقنيات وأجهزة الفحص الحديثة',
    operatingHours: {
      open: '10:00',
      close: '20:00',
    },
  },
  {
    id: 'clinic_003',
    name: 'عيادة الجمال التكاملية',
    type: 'clinic',
    phone: '+201015234567',
    email: 'clinic@beauty.com',
    address: 'شارع الكتامية، الكتامية الجديدة',
    province: 'cairo',
    area: 'cairo_katameya',
    image: 'https://via.placeholder.com/250?text=عيادة+الجمال',
    rating: 4.8,
    reviews: 156,
    specialties: ['dermatology', 'plastic_surgery'],
    services: ['consultation', 'medical_services'],
    description: 'عيادة متخصصة في العناية بالجلد والعلاجات التجميلية والتقشير والليزر',
    operatingHours: {
      open: '11:00',
      close: '20:00',
    },
  },
];

export function getHospitalById(id: string): Hospital | undefined {
  return hospitals.find((h) => h.id === id);
}

export function getHospitalsByProvince(province: string): Hospital[] {
  return hospitals.filter((h) => h.province === province);
}

export function getHospitalsByType(type: 'hospital' | 'clinic'): Hospital[] {
  return hospitals.filter((h) => h.type === type);
}

export function searchHospitals(query: string): Hospital[] {
  const lowerQuery = query.toLowerCase();
  return hospitals.filter(
    (h) =>
      h.name.includes(query) ||
      h.address.toLowerCase().includes(lowerQuery),
  );
}
