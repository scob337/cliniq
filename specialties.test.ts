/**
 * 🧪 ملف اختبار API التخصصات
 * استخدم هذا الملف للتحقق من أن API يعمل بشكل صحيح
 */

import { specialties } from './lib/data/specialties';

// ============================================
// اختبار 1: التحقق من البيانات الأساسية
// ============================================

function test1_BasicData() {
  console.log('🧪 اختبار 1: التحقق من البيانات الأساسية');
  
  // التحقق من عدد التخصصات
  console.assert(specialties.length === 43, '❌ يجب أن يكون هناك 43 تخصص');
  console.log('✅ عدد التخصصات صحيح: 43');

  // التحقق من وجود جميع الحقول المطلوبة
  specialties.forEach(specialty => {
    console.assert(specialty.id, `❌ التخصص ${specialty.name} بدون ID`);
    console.assert(specialty.name, `❌ التخصص بدون اسم`);
    console.assert(specialty.consultation_fee, `❌ ${specialty.name} بدون سعر`);
    console.assert(specialty.provinces && specialty.provinces.length > 0, `❌ ${specialty.name} بدون محافظات`);
  });
  console.log('✅ جميع التخصصات لها حقول مطلوبة');
}

// ============================================
// اختبار 2: التحقق من الأسعار
// ============================================

function test2_Prices() {
  console.log('\n🧪 اختبار 2: التحقق من نطاق الأسعار');
  
  const prices = specialties.map(s => s.consultation_fee);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const avgPrice = prices.reduce((a, b) => a + b) / prices.length;

  console.log(`✅ أقل سعر: ${minPrice} جنيه`);
  console.log(`✅ أعلى سعر: ${maxPrice} جنيه`);
  console.log(`✅ متوسط السعر: ${avgPrice.toFixed(2)} جنيه`);

  console.assert(minPrice >= 150, '❌ السعر الأدنى يجب أن يكون 150 جنيه على الأقل');
  console.assert(maxPrice <= 500, '❌ السعر الأقصى يجب أن يكون 500 جنيه على الأكثر');
  console.log('✅ الأسعار في النطاق الصحيح');
}

// ============================================
// اختبار 3: التحقق من المحافظات
// ============================================

function test3_Provinces() {
  console.log('\n🧪 اختبار 3: التحقق من المحافظات');
  
  const allProvinces = new Set();
  const provinceCounts = {} as Record<string, number>;

  specialties.forEach(specialty => {
    specialty.provinces.forEach(province => {
      allProvinces.add(province);
      provinceCounts[province] = (provinceCounts[province] || 0) + 1;
    });
  });

  console.log('✅ المحافظات المتاحة:');
  Object.entries(provinceCounts).sort((a, b) => b[1] - a[1]).forEach(([province, count]) => {
    console.log(`   - ${province}: ${count} تخصص`);
  });

  const validProvinces = ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'];
  const hasInvalidProvinces = Array.from(allProvinces).some(p => !validProvinces.includes(p));
  console.assert(!hasInvalidProvinces, '❌ توجد محافظات غير صحيحة');
  console.log('✅ جميع المحافظات صحيحة');
}

// ============================================
// اختبار 4: التحقق من عدد الأطباء
// ============================================

function test4_DoctorsCounts() {
  console.log('\n🧪 اختبار 4: التحقق من عدد الأطباء');
  
  const doctorCounts = specialties
    .map(s => ({ name: s.name, count: s.doctors_count }))
    .sort((a, b) => (b.count || 0) - (a.count || 0))
    .slice(0, 5);

  console.log('✅ أكثر 5 تخصصات توفراً:');
  doctorCounts.forEach((item, i) => {
    console.log(`   ${i + 1}. ${item.name}: ${item.count} طبيب`);
  });

  const totalDoctors = specialties.reduce((sum, s) => sum + (s.doctors_count || 0), 0);
  console.log(`✅ إجمالي الأطباء: ${totalDoctors} طبيب`);
}

// ============================================
// اختبار 5: اختبار الفلترة
// ============================================

function test5_Filtering() {
  console.log('\n🧪 اختبار 5: اختبار الفلترة');
  
  // فلترة حسب سعر
  const cheapSpecialties = specialties.filter(s => s.consultation_fee <= 200);
  console.log(`✅ التخصصات الرخيصة (≤ 200 جنيه): ${cheapSpecialties.length}`);

  const expensiveSpecialties = specialties.filter(s => s.consultation_fee >= 400);
  console.log(`✅ التخصصات المرتفعة (≥ 400 جنيه): ${expensiveSpecialties.length}`);

  // فلترة حسب محافظة
  const cairoSpecialties = specialties.filter(s => s.provinces.includes('cairo'));
  console.log(`✅ التخصصات في القاهرة: ${cairoSpecialties.length}`);

  const alexandriaSpecialties = specialties.filter(s => s.provinces.includes('alexandria'));
  console.log(`✅ التخصصات في الإسكندرية: ${alexandriaSpecialties.length}`);

  // بحث
  const surgerySpecialties = specialties.filter(s => 
    s.name.includes('جراحة') || s.description?.includes('جراحة')
  );
  console.log(`✅ التخصصات الجراحية: ${surgerySpecialties.length}`);
}

// ============================================
// اختبار 6: التحقق من الأوصاف
// ============================================

function test6_Descriptions() {
  console.log('\n🧪 اختبار 6: التحقق من الأوصاف');
  
  let descCount = 0;
  specialties.forEach(s => {
    if (s.description && s.description.length > 20) {
      descCount++;
    }
  });

  console.log(`✅ التخصصات مع أوصاف طويلة: ${descCount}/${specialties.length}`);
  console.assert(descCount === specialties.length, '❌ بعض التخصصات بدون أوصاف كافية');
  console.log('✅ جميع التخصصات لها أوصاف');
}

// ============================================
// اختبار 7: التحقق من الصور
// ============================================

function test7_Images() {
  console.log('\n🧪 اختبار 7: التحقق من الصور');
  
  let imageCount = 0;
  specialties.forEach(s => {
    if (s.image) {
      imageCount++;
    }
  });

  console.log(`✅ التخصصات مع صور: ${imageCount}/${specialties.length}`);
  console.assert(imageCount === specialties.length, '❌ بعض التخصصات بدون صور');
  console.log('✅ جميع التخصصات لها صور');
}

// ============================================
// اختبار 8: التحقق من الـ IDs الفريدة
// ============================================

function test8_UniqueIDs() {
  console.log('\n🧪 اختبار 8: التحقق من الـ IDs الفريدة');
  
  const ids = new Set(specialties.map(s => s.id));
  console.assert(ids.size === specialties.length, '❌ توجد IDs مكررة');
  console.log(`✅ جميع الـ ${ids.size} ID فريد`);
}

// ============================================
// اختبار 9: إحصائيات شاملة
// ============================================

function test9_Statistics() {
  console.log('\n🧪 اختبار 9: إحصائيات شاملة');
  
  console.log('\n📊 ملخص الإحصائيات:');
  console.log('═══════════════════════════════════');
  
  console.log(`📌 إجمالي التخصصات: ${specialties.length}`);
  
  const prices = specialties.map(s => s.consultation_fee);
  console.log(`💰 السعر (الأدنى-الأقصى): ${Math.min(...prices)} - ${Math.max(...prices)} جنيه`);
  console.log(`💰 متوسط السعر: ${(prices.reduce((a, b) => a + b) / prices.length).toFixed(2)} جنيه`);
  
  const provinceCounts = {} as Record<string, number>;
  specialties.forEach(s => {
    s.provinces.forEach(p => {
      provinceCounts[p] = (provinceCounts[p] || 0) + 1;
    });
  });
  console.log(`🗺️ عدد المحافظات: ${Object.keys(provinceCounts).length}`);
  
  const totalDoctors = specialties.reduce((sum, s) => sum + (s.doctors_count || 0), 0);
  console.log(`👨‍⚕️ إجمالي الأطباء: ${totalDoctors}`);
  
  console.log('═══════════════════════════════════\n');
}

// ============================================
// تشغيل جميع الاختبارات
// ============================================

export function runAllTests() {
  console.clear();
  console.log('🚀 بدء اختبارات API التخصصات...\n');
  
  try {
    test1_BasicData();
    test2_Prices();
    test3_Provinces();
    test4_DoctorsCounts();
    test5_Filtering();
    test6_Descriptions();
    test7_Images();
    test8_UniqueIDs();
    test9_Statistics();
    
    console.log('\n✅ جميع الاختبارات نجحت بنجاح! 🎉');
    console.log('═══════════════════════════════════\n');
  } catch (error) {
    console.error('\n❌ فشل اختبار:', error);
  }
}

// تشغيل الاختبارات بمجرد استيراد الملف
if (typeof window === 'undefined') {
  // البيئة: Node.js
  runAllTests();
}

export { test1_BasicData, test2_Prices, test3_Provinces, test4_DoctorsCounts, test5_Filtering };
