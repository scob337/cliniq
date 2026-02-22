/**
 * المحافظات والمناطق المصرية
 */

export interface Area {
  id: string;
  name: string;
}

export interface Province {
  id: string;
  name: string;
  areas: Area[];
}

export const provinces: Province[] = [
  {
    id: 'cairo',
    name: 'القاهرة',
    areas: [
      { id: 'cairo_downtown', name: 'وسط البلد' },
      { id: 'cairo_helwan', name: 'حلوان' },
      { id: 'cairo_madinet', name: 'مدينة نصر' },
      { id: 'cairo_zamalek', name: 'الزمالك' },
      { id: 'cairo_giza', name: 'الجيزة' },
      { id: 'cairo_maadi', name: 'المعادي' },
      { id: 'cairo_sheikh', name: 'الشيخ زايد' },
      { id: 'cairo_katameya', name: 'الكتامية' },
      { id: 'cairo_nasr', name: 'مدينة نصر' },
      { id: 'cairo_sixth', name: 'مدينة السادس من أكتوبر' },
    ],
  },
  {
    id: 'giza',
    name: 'الجيزة',
    areas: [
      { id: 'giza_dokki', name: 'الدقي' },
      { id: 'giza_agouza', name: 'الأجوزة' },
      { id: 'giza_bulaq', name: 'بولاق الدكرور' },
      { id: 'giza_mohandeseen', name: 'المهندسين' },
      { id: 'giza_haram', name: 'الهرم' },
      { id: 'giza_badr', name: 'مدينة بدر' },
      { id: 'giza_helwan', name: 'حلوان' },
    ],
  },
  {
    id: 'alexandria',
    name: 'الإسكندرية',
    areas: [
      { id: 'alex_center', name: 'الوسط' },
      { id: 'alex_east', name: 'شرق' },
      { id: 'alex_west', name: 'غرب' },
      { id: 'alex_borg', name: 'برج العرب' },
      { id: 'alex_montaza', name: 'منتزة' },
      { id: 'alex_sidi_bishr', name: 'سيدي بشر' },
    ],
  },
  {
    id: 'qalioubiya',
    name: 'القليوبية',
    areas: [
      { id: 'qal_benha', name: 'بنها' },
      { id: 'qal_shibin', name: 'شبين الكوم' },
      { id: 'qal_khatatba', name: 'خاطة' },
      { id: 'qal_toukh', name: 'توكه' },
    ],
  },
  {
    id: 'dakahlia',
    name: 'الدقهلية',
    areas: [
      { id: 'dak_mansura', name: 'المنصورة' },
      { id: 'dak_sinbellawain', name: 'السنبلاوين' },
      { id: 'dak_aga', name: 'آجا' },
      { id: 'dak_talkha', name: 'تلخا' },
    ],
  },
  {
    id: 'beheira',
    name: 'البحيرة',
    areas: [
      { id: 'beh_damanhur', name: 'دمنهور' },
      { id: 'beh_rashid', name: 'رشيد' },
      { id: 'beh_kafr', name: 'كفر الدوار' },
      { id: 'beh_etay', name: 'إيتاي البارود' },
    ],
  },
  {
    id: 'suez',
    name: 'السويس',
    areas: [
      { id: 'suez_city', name: 'مدينة السويس' },
      { id: 'suez_fayid', name: 'الفايد' },
      { id: 'suez_port', name: 'بورتوفيق' },
    ],
  },
  {
    id: 'ismailia',
    name: 'الإسماعيلية',
    areas: [
      { id: 'ism_city', name: 'مدينة الإسماعيلية' },
      { id: 'ism_qantara', name: 'القنطرة غرب' },
    ],
  },
];

export function getProvinceById(id: string): Province | undefined {
  return provinces.find((p) => p.id === id);
}

export function getAreaById(provinceId: string, areaId: string): Area | undefined {
  const province = getProvinceById(provinceId);
  return province?.areas.find((a) => a.id === areaId);
}
