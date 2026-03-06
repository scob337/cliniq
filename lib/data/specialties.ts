/**
 * تخصصات طبية
 */

export interface Specialty {
  id: string;
  name: string;
  description?: string;
  image?: string;
  icon?: string;
  consultation_fee: number; // سعر الكشف بالجنيه
  provinces: string[]; // IDs المحافظات المتاحة
  doctors_count?: number; // عدد الأطباء في التخصص
}

export const specialties: Specialty[] = [
  { id: 'dermatology', name: 'جلدية', description: 'أمراض الجلد والعلاج الجمالي والليزر', image: 'https://via.placeholder.com/150?text=جلدية', consultation_fee: 350, provinces: ['cairo', 'giza', 'beheira'], doctors_count: 8 },
  { id: 'psychiatry', name: 'الطب النفسي', description: 'الصحة العقلية والاستشارات النفسية والعلاجات السلوكية', image: 'https://via.placeholder.com/150?text=نفسي', consultation_fee: 400, provinces: ['cairo', 'alexandria', 'giza'], doctors_count: 5 },
  { id: 'ent', name: 'أنف وأذن وحنجرة', description: 'أمراض الأنف والأذن والحلق والجيوب الأنفية', image: 'https://via.placeholder.com/150?text=انف-اذن', consultation_fee: 300, provinces: ['cairo', 'giza', 'alexandria', 'assiut'], doctors_count: 6 },
  { id: 'ophthalmology', name: 'طب العيون', description: 'أمراض العيون وتصحيح الإبصار والليزك', image: 'https://via.placeholder.com/150?text=عيون', consultation_fee: 350, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 7 },
  { id: 'pulmonology', name: 'الصدرية والجهاز التنفسي', description: 'أمراض الرئة والجهاز التنفسي والربو', image: 'https://via.placeholder.com/150?text=صدرية', consultation_fee: 300, provinces: ['cairo', 'giza', 'alexandria', 'assiut'], doctors_count: 4 },
  { id: 'orthopedics', name: 'العظام والمفاصل', description: 'أمراض وإصابات العظام والمفاصل والتأهيل', image: 'https://via.placeholder.com/150?text=عظام', consultation_fee: 320, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 9 },
  { id: 'internal_medicine', name: 'الطب الباطني', description: 'الأمراض الداخلية والمزمنة وتقييم الحالة العامة', image: 'https://via.placeholder.com/150?text=باطني', consultation_fee: 280, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 10 },
  { id: 'urology', name: 'المسالك البولية', description: 'أمراض الجهاز البولي والتناسلي والعقم', image: 'https://via.placeholder.com/150?text=بولية', consultation_fee: 350, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 6 },
  { id: 'obstetrics', name: 'النساء والتوليد', description: 'الحمل والولادة ورعاية ما بعد الولادة والخصوبة', image: 'https://via.placeholder.com/150?text=نساء', consultation_fee: 380, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 11 },
  { id: 'dentistry', name: 'طب الأسنان', description: 'علاج وتجميل الأسنان والتقويم والزراعة', image: 'https://via.placeholder.com/150?text=اسنان', consultation_fee: 250, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 12 },
  { id: 'allergy', name: 'الحساسية والمناعة', description: 'أمراض الحساسية والجهاز المناعي والربو الحساسي', image: 'https://via.placeholder.com/150?text=حساسية', consultation_fee: 290, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 4 },
  { id: 'andrology', name: 'الذكورة والعقم', description: 'الصحة الإنجابية للذكور وعلاج العقم', image: 'https://via.placeholder.com/150?text=ذكورة', consultation_fee: 400, provinces: ['cairo', 'giza'], doctors_count: 3 },
  { id: 'audiology', name: 'السمعيات', description: 'أمراض السمع والتوازن والسماعات الطبية', image: 'https://via.placeholder.com/150?text=سمعيات', consultation_fee: 310, provinces: ['cairo', 'alexandria', 'giza'], doctors_count: 3 },
  { id: 'cardiac_surgery', name: 'جراحة القلب والصدر', description: 'العمليات الجراحية للقلب والأوعية الدموية', image: 'https://via.placeholder.com/150?text=جراحة-قلب', consultation_fee: 500, provinces: ['cairo', 'giza'], doctors_count: 4 },
  { id: 'cardiology', name: 'أمراض القلب والأوعية الدموية', description: 'أمراض القلب والضغط والقسطرة القلبية', image: 'https://via.placeholder.com/150?text=قلب', consultation_fee: 380, provinces: ['cairo', 'giza', 'alexandria', 'assiut'], doctors_count: 7 },
  { id: 'endocrinology', name: 'السكر والغدد الصماء', description: 'السكري والأمراض الهرمونية والغدية والسمنة', image: 'https://via.placeholder.com/150?text=غدد', consultation_fee: 330, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 8 },
  { id: 'radiology', name: 'الأشعة التشخيصية', description: 'الأشعات السينية والمقطعية والموجات الصوتية والرنين المغناطيسي', image: 'https://via.placeholder.com/150?text=اشعة', consultation_fee: 200, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 6 },
  { id: 'nutrition', name: 'التغذية وتخفيف الوزن', description: 'برامج غذائية مخصصة وإنقاص الوزن الآمن', image: 'https://via.placeholder.com/150?text=تغذية', consultation_fee: 200, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 5 },
  { id: 'family_medicine', name: 'طب الأسرة', description: 'الرعاية الصحية الأولية والشاملة للعائلة', image: 'https://via.placeholder.com/150?text=اسرة', consultation_fee: 180, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 10 },
  { id: 'gastroenterology', name: 'الجهاز الهضمي والمناظير', description: 'أمراض المريء والمعدة والأمعاء والكبد', image: 'https://via.placeholder.com/150?text=جهاز-هضمي', consultation_fee: 340, provinces: ['cairo', 'giza', 'alexandria', 'assiut'], doctors_count: 5 },
  { id: 'general_practitioner', name: 'طبيب عام', description: 'استشارات طبية عامة وتشخيص أولي', image: 'https://via.placeholder.com/150?text=عام', consultation_fee: 150, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 15 },
  { id: 'general_surgery', name: 'الجراحة العامة', description: 'العمليات الجراحية العامة والطارئة', image: 'https://via.placeholder.com/150?text=جراحة', consultation_fee: 380, provinces: ['cairo', 'giza', 'alexandria', 'assiut'], doctors_count: 8 },
  { id: 'geriatrics', name: 'طب المسنين', description: 'رعاية صحية متخصصة للمسنين والأمراض المرتبطة بالعمر', image: 'https://via.placeholder.com/150?text=مسنين', consultation_fee: 250, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 3 },
  { id: 'hematology', name: 'أمراض الدم والأورام', description: 'أمراض الدم والسرطان والأورام الدموية', image: 'https://via.placeholder.com/150?text=دم', consultation_fee: 420, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 4 },
  { id: 'hepatology', name: 'أمراض الكبد', description: 'أمراض الكبد والتهاب الكبد الفيروسي والتليف', image: 'https://via.placeholder.com/150?text=كبد', consultation_fee: 360, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 3 },
  { id: 'interventional_radiology', name: 'الأشعة التداخلية', description: 'التداخلات العلاجية بالأشعات والقسطرة العلاجية', image: 'https://via.placeholder.com/150?text=تداخلية', consultation_fee: 450, provinces: ['cairo', 'alexandria'], doctors_count: 2 },
  { id: 'ivf', name: 'الحقن المجهري وأطفال الأنابيب', description: 'علاج العقم والإنجاب الصناعي بتقنيات متطورة', image: 'https://via.placeholder.com/150?text=انابيب', consultation_fee: 500, provinces: ['cairo', 'giza'], doctors_count: 5 },
  { id: 'maxillofacial', name: 'جراحة الفكين والوجه', description: 'جراحات تصحيح الفكين والوجه وإعادة البناء', image: 'https://via.placeholder.com/150?text=فكين', consultation_fee: 420, provinces: ['cairo', 'giza'], doctors_count: 3 },
  { id: 'nephrology', name: 'أمراض الكلى', description: 'أمراض الكلى والفشل الكلوي والتحليل الكهربائي', image: 'https://via.placeholder.com/150?text=كلى', consultation_fee: 340, provinces: ['cairo', 'giza', 'alexandria', 'assiut'], doctors_count: 5 },
  { id: 'neurology', name: 'أمراض الأعصاب', description: 'أمراض المخ والأعصاب والجهاز العصبي المركزي والطرفي', image: 'https://via.placeholder.com/150?text=اعصاب', consultation_fee: 380, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 6 },
  { id: 'neurosurgery', name: 'جراحة الأعصاب والمخ', description: 'العمليات الجراحية العصبية والدماغية', image: 'https://via.placeholder.com/150?text=جراحة-اعصاب', consultation_fee: 500, provinces: ['cairo', 'giza'], doctors_count: 3 },
  { id: 'bariatric_surgery', name: 'جراحة السمنة والمناظير', description: 'عمليات جراحية لتخفيف الوزن والسمنة المفرطة', image: 'https://via.placeholder.com/150?text=سمنة', consultation_fee: 450, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 4 },
  { id: 'oncology', name: 'الأورام والسرطان', description: 'علاج السرطان والأورام الخبيثة بالعلاج الكيماوي', image: 'https://via.placeholder.com/150?text=اورام', consultation_fee: 420, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 5 },
  { id: 'surgical_oncology', name: 'جراحة الأورام', description: 'العمليات الجراحية للسرطان والأورام', image: 'https://via.placeholder.com/150?text=جراحة-اورام', consultation_fee: 480, provinces: ['cairo', 'giza'], doctors_count: 3 },
  { id: 'orthopedic_correction', name: 'طب تقويم العظام', description: 'تقويم عيوب الهيكل العظمي والعمود الفقري', image: 'https://via.placeholder.com/150?text=تقويم', consultation_fee: 300, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 4 },
  { id: 'pain_management', name: 'علاج الألم', description: 'تخفيف الألم المزمن والحاد بطرق حديثة', image: 'https://via.placeholder.com/150?text=الم', consultation_fee: 320, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 3 },
  { id: 'pediatric_surgery', name: 'جراحة الأطفال', description: 'العمليات الجراحية المتخصصة للأطفال', image: 'https://via.placeholder.com/150?text=جراحة-اطفال', consultation_fee: 380, provinces: ['cairo', 'giza', 'alexandria', 'assiut'], doctors_count: 5 },
  { id: 'pediatrics', name: 'طب الأطفال والولادة', description: 'رعاية الأطفال وحديثي الولادة والتطعيمات', image: 'https://via.placeholder.com/150?text=اطفال', consultation_fee: 250, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 10 },
  { id: 'speech_therapy', name: 'علاج النطق والتخاطب', description: 'علاج اضطرابات النطق والكلام والتواصل', image: 'https://via.placeholder.com/150?text=نطق', consultation_fee: 200, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 3 },
  { id: 'physiotherapy', name: 'العلاج الطبيعي', description: 'إعادة التأهيل والعلاج الطبيعي وإعادة الحركة', image: 'https://via.placeholder.com/150?text=علاج-طبيعي', consultation_fee: 180, provinces: ['cairo', 'giza', 'alexandria', 'assiut', 'beheira'], doctors_count: 8 },
  { id: 'plastic_surgery', name: 'جراحة التجميل', description: 'العمليات التجميلية والترميمية والتحسينية', image: 'https://via.placeholder.com/150?text=تجميل', consultation_fee: 450, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 6 },
  { id: 'rheumatology', name: 'الروماتيزم والأمراض الروماتويدية', description: 'أمراض المفاصل المناعية والالتهابية', image: 'https://via.placeholder.com/150?text=روماتيزم', consultation_fee: 330, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 4 },
  { id: 'spine_surgery', name: 'جراحة العمود الفقري', description: 'عمليات العمود الفقري والانزلاق الغضروفي والتضيق', image: 'https://via.placeholder.com/150?text=عمود-فقري', consultation_fee: 450, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 4 },
  { id: 'vascular_surgery', name: 'جراحة الأوعية الدموية', description: 'عمليات الأوعية الدموية والدوالي وتصلب الشرايين', image: 'https://via.placeholder.com/150?text=اوعية', consultation_fee: 420, provinces: ['cairo', 'giza', 'alexandria'], doctors_count: 3 },
];
