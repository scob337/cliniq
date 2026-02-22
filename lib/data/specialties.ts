/**
 * تخصصات طبية
 */

export interface Specialty {
  id: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
}

export const specialties: Specialty[] = [
  { id: 'dermatology', name: 'جلدية', description: 'أمراض الجلد والعلاج الجمالي', image: 'https://via.placeholder.com/150?text=جلدية' },
  { id: 'psychiatry', name: 'الطب النفسي', description: 'الصحة العقلية والاستشارات النفسية', image: 'https://via.placeholder.com/150?text=نفسي' },
  { id: 'ent', name: 'أنف وأذن وحنجرة', description: 'أمراض الأنف والأذن والحلق', image: 'https://via.placeholder.com/150?text=انف-اذن' },
  { id: 'ophthalmology', name: 'طب العيون', description: 'أمراض العيون وتصحيح الإبصار', image: 'https://via.placeholder.com/150?text=عيون' },
  { id: 'pulmonology', name: 'الصدرية والجهاز التنفسي', description: 'أمراض الرئة والجهاز التنفسي', image: 'https://via.placeholder.com/150?text=صدرية' },
  { id: 'orthopedics', name: 'العظام والمفاصل', description: 'أمراض وإصابات العظام والمفاصل', image: 'https://via.placeholder.com/150?text=عظام' },
  { id: 'internal_medicine', name: 'الطب الباطني', description: 'الأمراض الداخلية والمزمنة', image: 'https://via.placeholder.com/150?text=باطني' },
  { id: 'urology', name: 'المسالك البولية', description: 'أمراض الجهاز البولي والتناسلي', image: 'https://via.placeholder.com/150?text=بولية' },
  { id: 'obstetrics', name: 'النساء والتوليد', description: 'الحمل والولادة ورعاية ما بعد الولادة', image: 'https://via.placeholder.com/150?text=نساء' },
  { id: 'dentistry', name: 'طب الأسنان', description: 'علاج وتجميل الأسنان', image: 'https://via.placeholder.com/150?text=اسنان' },
  { id: 'allergy', name: 'الحساسية والمناعة', description: 'أمراض الحساسية والجهاز المناعي', image: 'https://via.placeholder.com/150?text=حساسية' },
  { id: 'andrology', name: 'الذكورة والعقم', description: 'الصحة الإنجابية للذكور', image: 'https://via.placeholder.com/150?text=ذكورة' },
  { id: 'audiology', name: 'السمعيات', description: 'أمراض السمع والتوازن', image: 'https://via.placeholder.com/150?text=سمعيات' },
  { id: 'cardiac_surgery', name: 'جراحة القلب والصدر', description: 'العميات الجراحية للقلب والأوعية', image: 'https://via.placeholder.com/150?text=جراحة-قلب' },
  { id: 'cardiology', name: 'أمراض القلب والأوعية الدموية', description: 'أمراض القلب والضغط والقسطرة', image: 'https://via.placeholder.com/150?text=قلب' },
  { id: 'endocrinology', name: 'السكر والغدد الصماء', description: 'السكري والأمراض الهرمونية والغدية', image: 'https://via.placeholder.com/150?text=غدد' },
  { id: 'radiology', name: 'الأشعة التشخيصية', description: 'الأشعات السينية والمقطعية والموجات الصوتية', image: 'https://via.placeholder.com/150?text=اشعة' },
  { id: 'nutrition', name: 'التغذية وتخفيف الوزن', description: 'برامج غذائية وإنقاص الوزن', image: 'https://via.placeholder.com/150?text=تغذية' },
  { id: 'family_medicine', name: 'طب الأسرة', description: 'الرعاية الصحية الأولية للعائلة', image: 'https://via.placeholder.com/150?text=اسرة' },
  { id: 'gastroenterology', name: 'الجهاز الهضمي والمناظير', description: 'أمراض المريء والمعدة والأمعاء', image: 'https://via.placeholder.com/150?text=جهاز-هضمي' },
  { id: 'general_practitioner', name: 'طبيب عام', description: 'استشارات طبية عامة', image: 'https://via.placeholder.com/150?text=عام' },
  { id: 'general_surgery', name: 'الجراحة العامة', description: 'العمليات الجراحية المختلفة', image: 'https://via.placeholder.com/150?text=جراحة' },
  { id: 'geriatrics', name: 'طب المسنين', description: 'رعاية صحية متخصصة للمسنين', image: 'https://via.placeholder.com/150?text=مسنين' },
  { id: 'hematology', name: 'أمراض الدم والأورام', description: 'أمراض الدم والسرطان', image: 'https://via.placeholder.com/150?text=دم' },
  { id: 'hepatology', name: 'أمراض الكبد', description: 'أمراض الكبد والتهاب الكبد الفيروسي', image: 'https://via.placeholder.com/150?text=كبد' },
  { id: 'interventional_radiology', name: 'الأشعة التداخلية', description: 'التداخلات العلاجية بالأشعات', image: 'https://via.placeholder.com/150?text=تداخلية' },
  { id: 'ivf', name: 'الحقن المجهري وأطفال الأنابيب', description: 'علاج العقم والإنجاب الصناعي', image: 'https://via.placeholder.com/150?text=انابيب' },
  { id: 'maxillofacial', name: 'جراحة الفكين والوجه', description: 'جراحات تصحيح الفكين والوجه', image: 'https://via.placeholder.com/150?text=فكين' },
  { id: 'nephrology', name: 'أمراض الكلى', description: 'أمراض الكلى والفشل الكلوي', image: 'https://via.placeholder.com/150?text=كلى' },
  { id: 'neurology', name: 'أمراض الأعصاب', description: 'أمراض المخ والأعصاب', image: 'https://via.placeholder.com/150?text=اعصاب' },
  { id: 'neurosurgery', name: 'جراحة الأعصاب والمخ', description: 'العمليات الجراحية العصبية', image: 'https://via.placeholder.com/150?text=جراحة-اعصاب' },
  { id: 'bariatric_surgery', name: 'جراحة السمنة والمناظير', description: 'عمليات جراحية لتخفيف الوزن', image: 'https://via.placeholder.com/150?text=سمنة' },
  { id: 'oncology', name: 'الأورام والسرطان', description: 'علاج السرطان والأورام الخبيثة', image: 'https://via.placeholder.com/150?text=اورام' },
  { id: 'surgical_oncology', name: 'جراحة الأورام', description: 'العمليات الجراحية للسرطان', image: 'https://via.placeholder.com/150?text=جراحة-اورام' },
  { id: 'orthopedic_correction', name: 'طب تقويم العظام', description: 'تقويم عيوب الهيكل العظمي', image: 'https://via.placeholder.com/150?text=تقويم' },
  { id: 'pain_management', name: 'علاج الألم', description: 'تخفيف الألم المزمن والحاد', image: 'https://via.placeholder.com/150?text=الم' },
  { id: 'pediatric_surgery', name: 'جراحة الأطفال', description: 'العمليات الجراحية للأطفال', image: 'https://via.placeholder.com/150?text=جراحة-اطفال' },
  { id: 'pediatrics', name: 'طب الأطفال والولادة', description: 'رعاية الأطفال وحديثي الولادة', image: 'https://via.placeholder.com/150?text=اطفال' },
  { id: 'speech_therapy', name: 'علاج النطق والتخاطب', description: 'علاج اضطرابات النطق والكلام', image: 'https://via.placeholder.com/150?text=نطق' },
  { id: 'physiotherapy', name: 'العلاج الطبيعي', description: 'إعادة التأهيل والعلاج الطبيعي', image: 'https://via.placeholder.com/150?text=علاج-طبيعي' },
  { id: 'plastic_surgery', name: 'جراحة التجميل', description: 'العمليات التجميلية والترميمية', image: 'https://via.placeholder.com/150?text=تجميل' },
  { id: 'rheumatology', name: 'الروماتيزم والأمراض الروماتويدية', description: 'أمراض المفاصل المناعية', image: 'https://via.placeholder.com/150?text=روماتيزم' },
  { id: 'spine_surgery', name: 'جراحة العمود الفقري', description: 'عمليات العمود الفقري والانزلاق الغضروفي', image: 'https://via.placeholder.com/150?text=عمود-فقري' },
  { id: 'vascular_surgery', name: 'جراحة الأوعية الدموية', description: 'عمليات الأوعية الدموية والدوالي', image: 'https://via.placeholder.com/150?text=اوعية' },
];
