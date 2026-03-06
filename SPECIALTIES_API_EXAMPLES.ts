/**
 * 📨 أمثلة عملية لاستخدام API التخصصات
 * ملف للاختبار والتجارب
 */

// ============================================
// 1️⃣ جلب جميع التخصصات
// ============================================

// مثال 1: Fetch API
fetch('http://localhost:3000/api/specialties')
  .then(response => response.json())
  .then(data => {
    console.log('جميع التخصصات:', data.البيانات);
    console.log('العدد:', data.العدد);
  })
  .catch(error => console.error('خطأ:', error));

// مثال 2: Async/Await
async function getAllSpecialties() {
  try {
    const response = await fetch('http://localhost:3000/api/specialties');
    const data = await response.json();
    return data.البيانات;
  } catch (error) {
    console.error('خطأ في جلب التخصصات:', error);
  }
}

// ============================================
// 2️⃣ فلترة حسب المحافظة
// ============================================

// جلب التخصصات المتاحة في القاهرة
async function getSpecialtiesByProvince(province: string) {
  const response = await fetch(`/api/specialties?province=${province}`);
  const data = await response.json();
  return data.البيانات;
}

// الاستخدام:
// getSpecialtiesByProvince('cairo').then(specialties => {
//   console.log('التخصصات في القاهرة:', specialties);
// });

// ============================================
// 3️⃣ فلترة حسب السعر
// ============================================

// جلب التخصصات برسوم معينة
async function getSpecialtiesByPrice(minPrice: number, maxPrice: number) {
  const params = new URLSearchParams();
  params.append('minPrice', String(minPrice));
  params.append('maxPrice', String(maxPrice));
  
  const response = await fetch(`/api/specialties?${params}`);
  const data = await response.json();
  return data.البيانات;
}

// أمثلة:
// التخصصات الرخيصة (أقل من 200 جنيه)
// getSpecialtiesByPrice(150, 200).then(specialties => {
//   console.log('التخصصات الرخيصة:', specialties);
// });

// التخصصات المتوسطة (200-400 جنيه)
// getSpecialtiesByPrice(200, 400).then(specialties => {
//   console.log('التخصصات المتوسطة:', specialties);
// });

// التخصصات المتقدمة والمتخصصة (أكثر من 400 جنيه)
// getSpecialtiesByPrice(400, 500).then(specialties => {
//   console.log('التخصصات المتقدمة:', specialties);
// });

// ============================================
// 4️⃣ البحث عن التخصصات
// ============================================

// البحث عن تخصص معين
async function searchSpecialties(searchTerm: string) {
  const response = await fetch(`/api/specialties?search=${encodeURIComponent(searchTerm)}`);
  const data = await response.json();
  return data.البيانات;
}

// أمثلة:
// searchSpecialties('جراحة').then(specialties => {
//   console.log('تخصصات جراحية:', specialties);
// });

// searchSpecialties('قلب').then(specialties => {
//   console.log('تخصصات متعلقة بالقلب:', specialties);
// });

// ============================================
// 5️⃣ فلترة متقدمة (دمج عدة فلاتر)
// ============================================

// دالة شاملة للفلترة
type SearchFilters = {
  province?: string;
  minPrice?: number;
  maxPrice?: number;
  search?: string;
};

async function searchSpecialtiesAdvanced(filters: SearchFilters) {
  const params = new URLSearchParams();
  
  if (filters.province) params.append('province', filters.province);
  if (filters.minPrice !== undefined) params.append('minPrice', String(filters.minPrice));
  if (filters.maxPrice !== undefined) params.append('maxPrice', String(filters.maxPrice));
  if (filters.search) params.append('search', filters.search);

  const response = await fetch(`/api/specialties?${params}`);
  const data = await response.json();
  return data;
}

// أمثلة الاستخدام:

// البحث عن تخصصات جراحية بسعر معقول في القاهرة
// const result1 = await searchSpecialtiesAdvanced({
//   province: 'cairo',
//   minPrice: 300,
//   maxPrice: 400,
//   search: 'جراحة'
// });
// console.log('نتائج البحث:', result1.البيانات);

// البحث عن تخصصات رخيصة في الإسكندرية
// const result2 = await searchSpecialtiesAdvanced({
//   province: 'alexandria',
//   minPrice: 150,
//   maxPrice: 250
// });
// console.log('تخصصات رخيصة:', result2.البيانات);

// ============================================
// 6️⃣ عرض معلومات التخصص بشكل منسق
// ============================================

function displaySpecialty(specialty: any) {
  return `
    🏥 ${specialty.name}
    ━━━━━━━━━━━━━━━━━━━━
    📝 الوصف: ${specialty.description}
    💰 السعر: ${specialty.consultation_fee} جنيه
    👨‍⚕️ عدد الأطباء: ${specialty.doctors_count}
    📍 المحافظات: ${specialty.provinces.join(', ')}
    ━━━━━━━━━━━━━━━━━━━━
  `;
}

// الاستخدام:
// const specialty = {
//   name: 'جلدية',
//   description: 'أمراض الجلد والعلاج الجمالي',
//   consultation_fee: 350,
//   doctors_count: 8,
//   provinces: ['cairo', 'giza', 'beheira']
// };
// console.log(displaySpecialty(specialty));

// ============================================
// 7️⃣ مثال React Component
// ============================================

/*
import { useEffect, useState } from 'react';

export default function SpecialtiesFilter() {
  const [specialties, setSpecialties] = useState([]);
  const [filters, setFilters] = useState({
    province: 'cairo',
    minPrice: '',
    maxPrice: '',
    search: ''
  });

  useEffect(() => {
    const fetchSpecialties = async () => {
      const params = new URLSearchParams();
      
      if (filters.province) params.append('province', filters.province);
      if (filters.minPrice) params.append('minPrice', filters.minPrice);
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
      if (filters.search) params.append('search', filters.search);

      const response = await fetch(`/api/specialties?${params}`);
      const data = await response.json();
      setSpecialties(data.البيانات);
    };

    fetchSpecialties();
  }, [filters]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">التخصصات الطبية</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <select 
          value={filters.province} 
          onChange={(e) => handleFilterChange('province', e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">اختر المحافظة</option>
          <option value="cairo">القاهرة</option>
          <option value="giza">الجيزة</option>
          <option value="alexandria">الإسكندرية</option>
          <option value="assiut">أسيوط</option>
          <option value="beheira">البحيرة</option>
        </select>

        <input 
          type="number"
          placeholder="السعر من"
          value={filters.minPrice}
          onChange={(e) => handleFilterChange('minPrice', e.target.value)}
          className="border p-2 rounded"
        />

        <input 
          type="number"
          placeholder="السعر إلى"
          value={filters.maxPrice}
          onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
          className="border p-2 rounded"
        />

        <input 
          type="text"
          placeholder="ابحث عن تخصص..."
          value={filters.search}
          onChange={(e) => handleFilterChange('search', e.target.value)}
          className="border p-2 rounded"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {specialties.map(specialty => (
          <div key={specialty.id} className="border p-4 rounded-lg shadow">
            <img src={specialty.image} alt={specialty.name} className="w-full h-32 object-cover rounded mb-2" />
            <h2 className="text-xl font-bold mb-2">{specialty.name}</h2>
            <p className="text-gray-600 mb-2 text-sm">{specialty.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="font-bold text-blue-600">{specialty.consultation_fee} جنيه</span>
              <span className="text-gray-500">👨‍⚕️ {specialty.doctors_count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
*/

// ============================================
// 8️⃣ حالات اختبار شاملة
// ============================================

const testCases = {
  // اختبار 1: جلب جميع التخصصات
  test1: async () => {
    const data = await searchSpecialtiesAdvanced({});
    console.assert(data.نجح === true, 'يجب أن تكون الاستجابة ناجحة');
    console.assert(data.البيانات.length > 0, 'يجب أن تكون هناك تخصصات');
    console.log('✅ اختبار 1 نجح');
  },

  // اختبار 2: فلترة حسب المحافظة
  test2: async () => {
    const data = await searchSpecialtiesAdvanced({ province: 'cairo' });
    const allInCairo = data.البيانات.every((s: any) => s.provinces.includes('cairo'));
    console.assert(allInCairo, 'جميع النتائج يجب أن تكون متوفرة في القاهرة');
    console.log('✅ اختبار 2 نجح');
  },

  // اختبار 3: فلترة حسب السعر
  test3: async () => {
    const data = await searchSpecialtiesAdvanced({ minPrice: 200, maxPrice: 400 });
    const allInRange = data.البيانات.every((s: any) => s.consultation_fee >= 200 && s.consultation_fee <= 400);
    console.assert(allInRange, 'جميع الأسعار يجب أن تكون في النطاق 200-400');
    console.log('✅ اختبار 3 نجح');
  },

  // اختبار 4: البحث
  test4: async () => {
    const data = await searchSpecialtiesAdvanced({ search: 'قلب' });
    const allContainSearch = data.البيانات.every((s: any) => 
      s.name.includes('قلب') || s.description.includes('قلب')
    );
    console.assert(allContainSearch, 'جميع النتائج يجب أن تحتوي على كلمة "قلب"');
    console.log('✅ اختبار 4 نجح');
  }
};

// تشغيل جميع الاختبارات:
// Object.values(testCases).forEach(test => test());

// ============================================
// 9️⃣ أمثلة استخدام عملية شهيرة
// ============================================

// المثال الأول: المستخدم يبحث عن طبيب عام برخص سعر
async function example1() {
  const specialties = await searchSpecialtiesAdvanced({
    search: 'طبيب عام',
    maxPrice: 200
  });
  console.log('طبيب عام برخص سعر:', specialties.البيانات);
}

// المثال الثاني: المستخدم بحاجة لجراح في الإسكندرية
async function example2() {
  const specialties = await searchSpecialtiesAdvanced({
    province: 'alexandria',
    search: 'جراحة'
  });
  console.log('تخصصات جراحية في الإسكندرية:', specialties.البيانات);
}

// المثال الثالث: المستخدم يريد أفضل الخيارات (أكثر عدد أطباء)
async function example3() {
  const data = await searchSpecialtiesAdvanced({});
  const sorted = data.البيانات.sort((a: any, b: any) => b.doctors_count - a.doctors_count);
  console.log('التخصصات الأكثر توفراً:', sorted.slice(0, 5));
}

// ============================================
// 🔟 الثوابت المفيدة
// ============================================

const PROVINCES = {
  CAIRO: 'cairo',
  GIZA: 'giza',
  ALEXANDRIA: 'alexandria',
  ASSIUT: 'assiut',
  BEHEIRA: 'beheira'
};

const PRICE_RANGES = {
  CHEAP: { min: 150, max: 200 },      // رخيص
  MEDIUM: { min: 200, max: 400 },      // متوسط
  EXPENSIVE: { min: 400, max: 500 }   // مرتفع
};

const COMMON_SEARCHES = {
  SURGERY: 'جراحة',
  HEART: 'قلب',
  CHILDREN: 'أطفال',
  WOMEN: 'نساء',
  SKIN: 'جلد'
};

export {
  getAllSpecialties,
  getSpecialtiesByProvince,
  getSpecialtiesByPrice,
  searchSpecialties,
  searchSpecialtiesAdvanced,
  displaySpecialty,
  PROVINCES,
  PRICE_RANGES,
  COMMON_SEARCHES,
  testCases
};
