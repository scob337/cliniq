/**
 * الخدمات الطبية
 */

export interface Service {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  image?: string;
}

export const services: Service[] = [
  {
    id: 'consultation',
    name: 'الاستشارات الطبية',
    description: 'استشارات طبية من أطباء متخصصين',
    image: 'https://via.placeholder.com/150?text=استشارات',
  },
  {
    id: 'medical_services',
    name: 'الخدمات الطبية والعروض',
    description: 'خدمات طبية شاملة مع عروض خاصة ومزايا',
    image: 'https://via.placeholder.com/150?text=خدمات',
  },
  {
    id: 'home_visits',
    name: 'الزيارات المنزلية',
    description: 'زيارات طبية منزلية للكشف والمتابعة',
    image: 'https://via.placeholder.com/150?text=زيارات',
  },
  {
    id: 'lab_tests',
    name: 'التحاليل الطبية',
    description: 'تحاليل طبية دقيقة بأحدث الأجهزة',
    image: 'https://via.placeholder.com/150?text=تحاليل',
  },
  {
    id: 'ultrasound',
    name: 'الموجات الصوتية',
    description: 'فحوصات الموجات الصوتية والتشخيص بالصور',
    image: 'https://via.placeholder.com/150?text=موجات',
  },
  {
    id: 'xray',
    name: 'الأشعة السينية',
    description: 'أشعات سينية وتصويرية متقدمة',
    image: 'https://via.placeholder.com/150?text=اشعة',
  },
  {
    id: 'vaccinations',
    name: 'التطعيمات واللقاحات',
    description: 'برامج التطعيمات الكاملة',
    image: 'https://via.placeholder.com/150?text=تطعيمات',
  },
  {
    id: 'surgery',
    name: 'العمليات الجراحية',
    description: 'عمليات جراحية بأحدث التقنيات',
    image: 'https://via.placeholder.com/150?text=جراحة',
  },
];
