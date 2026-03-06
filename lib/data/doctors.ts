/**
 * بيانات الأطباء
 */

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating: number;
  reviews: number;
  phone: string;
  email: string;
  image: string;
  facilityId?: string;
  qualifications?: string[];
  services?: string[];
  about?: string;
}

export const doctors: Doctor[] = [
  {
    id: 'doc_001',
    name: 'د. أحمد محمد علي',
    specialty: 'dermatology',
    experience: 15,
    rating: 4.8,
    reviews: 142,
    phone: '+201001234567',
    email: 'ahmed@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.احمد',
    facilityId: 'clinic_003',
    qualifications: ['بكالوريوس الطب - جامعة القاهرة', 'ماجستير الأمراض الجلدية', 'خبير في التقشير والليزر'],
    services: ['consultation', 'medical_services'],
    about: 'متخصص في أمراض الجلد والعلاجات التجميلية بخبرة 15 سنة',
  },
  {
    id: 'doc_002',
    name: 'د. فاطمة سالم حسن',
    specialty: 'obstetrics',
    experience: 12,
    rating: 4.9,
    reviews: 158,
    phone: '+201002234567',
    email: 'fatima@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.فاطمة',
    facilityId: 'hosp_001',
    qualifications: ['بكالوريوس الطب والجراحة', 'دبلوم النساء والتوليد', 'خبير في الولادات الطبيعية والقيصرية'],
    services: ['consultation', 'home_visits'],
    about: 'أخصائية نساء وتوليد بخبرة كبيرة في متابعة الحمل والولادة الآمنة',
  },
  {
    id: 'doc_003',
    name: 'د. محمود عبد الرحمن',
    specialty: 'cardiology',
    experience: 18,
    rating: 4.7,
    reviews: 189,
    phone: '+201003234567',
    email: 'mahmoud@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.محمود',
    facilityId: 'hosp_002',
    qualifications: ['بكالوريوس الطب والجراحة', 'زمالة القلب المصرية', 'شهادة دولية في القسطرة القلبية'],
    services: ['consultation', 'lab_tests'],
    about: 'أخصائي القلب والأوعية الدموية بخبرة عالية في تشخيص وعلاج أمراض القلب',
  },
  {
    id: 'doc_004',
    name: 'د. سمير إبراهيم محمد',
    specialty: 'orthopedics',
    experience: 16,
    rating: 4.5,
    reviews: 124,
    phone: '+201005234567',
    email: 'samir@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.سمير',
    facilityId: 'hosp_001',
    qualifications: ['بكالوريوس الطب', 'دبلوم العظام والمفاصل', 'خبير في جراحة المنظار'],
    services: ['consultation', 'physiotherapy'],
    about: 'متخصص في جراحة العظام والمفاصل وإصابات الملاعب',
  },
  {
    id: 'doc_005',
    name: 'د. نور محمود حسين',
    specialty: 'pediatrics',
    experience: 10,
    rating: 4.9,
    reviews: 176,
    phone: '+201007234567',
    email: 'noor@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.نور',
    facilityId: 'hosp_002',
    qualifications: ['بكالوريوس الطب والجراحة', 'دبلوم طب الأطفال', 'خبرة في تغذية الرضع'],
    services: ['consultation', 'home_visits'],
    about: 'أخصائية طب الأطفال وحديثي الولادة بأسلوب ودود وحنون',
  },
  {
    id: 'doc_006',
    name: 'د. خالد عماد السيد',
    specialty: 'ent',
    experience: 14,
    rating: 4.6,
    reviews: 113,
    phone: '+201009234567',
    email: 'khaled@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.خالد',
    facilityId: 'clinic_001',
    qualifications: ['بكالوريوس الطب والجراحة', 'دبلوم الأنف والأذن والحنجرة', 'خبير في جراحة الانحراف'],
    services: ['consultation'],
    about: 'متخصص في جراحات الأنف والأذن والحنجرة',
  },
  {
    id: 'doc_007',
    name: 'د. ليلى فايزة إسماعيل',
    specialty: 'endocrinology',
    experience: 13,
    rating: 4.7,
    reviews: 145,
    phone: '+201010234567',
    email: 'layla@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.ليلى',
    facilityId: 'hosp_002',
    qualifications: ['بكالوريوس الطب', 'دبلوم الغدد الصماء والسكر', 'خبرة في إدارة السكري'],
    services: ['consultation', 'medical_services'],
    about: 'أخصائية الغدد الصماء والسكري بخبرة متقدمة',
  },
  {
    id: 'doc_008',
    name: 'د. عمر سلام محمد',
    specialty: 'neurology',
    experience: 17,
    rating: 4.8,
    reviews: 167,
    phone: '+201011234567',
    email: 'omar@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.عمر',
    facilityId: 'hosp_001',
    qualifications: ['بكالوريوس الطب والجراحة', 'زمالة الأعصاب', 'خبير في السكتات الدماغية'],
    services: ['consultation', 'lab_tests'],
    about: 'متخصص في أمراض الأعصاب والمخ بكفاءة عالية',
  },
  {
    id: 'doc_009',
    name: 'د. مريم عزيز نجيب',
    specialty: 'gastroenterology',
    experience: 11,
    rating: 4.6,
    reviews: 132,
    phone: '+201012234567',
    email: 'maryam@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.مريم',
    facilityId: 'clinic_001',
    qualifications: ['بكالوريوس الطب والجراحة', 'دبلوم الجهاز الهضمي', 'خبرة في المناظير'],
    services: ['consultation', 'medical_services'],
    about: 'أخصائية الجهاز الهضمي والكبد بخبرة متخصصة',
  },
  {
    id: 'doc_010',
    name: 'د. إبراهيم الشرقاوي',
    specialty: 'plastic_surgery',
    experience: 19,
    rating: 4.9,
    reviews: 201,
    phone: '+201013234567',
    email: 'ibrahim@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.ابراهيم',
    facilityId: 'clinic_003',
    qualifications: ['بكالوريوس الطب والجراحة', 'زمالة جراحة التجميل', 'خبير في زراعة الشعر'],
    services: ['consultation', 'medical_services'],
    about: 'متخصص في جراحات التجميل والترميم بمستوى عالمي',
  },
  {
    id: 'doc_011',
    name: 'د. هاني محمود عبد الستار',
    specialty: 'urology',
    experience: 15,
    rating: 4.6,
    reviews: 119,
    phone: '+201016234567',
    email: 'hani@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.هاني',
    facilityId: 'clinic_001',
    qualifications: ['بكالوريوس الطب والجراحة', 'زمالة المسالك البولية', 'خبرة في المناظير'],
    services: ['consultation', 'lab_tests'],
    about: 'متخصص في أمراض المسالك البولية والكلى',
  },
  {
    id: 'doc_012',
    name: 'د. سناء أحمد السيد',
    specialty: 'rheumatology',
    experience: 12,
    rating: 4.7,
    reviews: 137,
    phone: '+201017234567',
    email: 'sanaa@clinic.com',
    image: 'https://via.placeholder.com/200?text=د.سناء',
    facilityId: 'hosp_001',
    qualifications: ['بكالوريوس الطب والجراحة', 'دبلوم الروماتيزم', 'خبرة في أمراض المفاصل'],
    services: ['consultation', 'medical_services'],
    about: 'أخصائية الأمراض الروماتويدية والمفاصل',
  },
];

export function getDoctorById(id: string): Doctor | undefined {
  return doctors.find((d) => d.id === id);
}

export function getDoctorsBySpecialty(specialty: string): Doctor[] {
  return doctors.filter((d) => d.specialty === specialty);
}

export function getDoctorsByFacility(facilityId: string): Doctor[] {
  return doctors.filter((d) => d.facilityId === facilityId);
}

export function searchDoctors(query: string): Doctor[] {
  const lowerQuery = query.toLowerCase();
  return doctors.filter(
    (d) =>
      d.name.includes(query) ||
      d.specialty.toLowerCase().includes(lowerQuery),
  );
}
