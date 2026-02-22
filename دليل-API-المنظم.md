# 📋 دليل API المنظم

## 🎯 البنية الجديدة

تم تقسيم API بشكل أفضل:
- **الأطباء** - منفصلين عن المستشفيات
- **المستشفيات والعيادات** - في ملف منفصل
- **العلاقات** - ربط الأطباء بالمستشفيات

---

## 📁 البنية الأساسية

```
lib/data/
├── doctors.ts        # الأطباء فقط (12 طبيب)
├── hospitals.ts      # المستشفيات والعيادات (5 مرافق)
├── specialties.ts    # التخصصات الطبية (43 تخصص)
├── provinces.ts      # المحافظات والمناطق
└── services.ts       # الخدمات الطبية

app/api/
├── doctors/
│   └── route.ts      # جميع نقاط نهاية الأطباء
├── hospitals/
│   ├── route.ts      # جميع نقاط نهاية المستشفيات
│   └── [id]/
│       └── doctors/
│           └── route.ts  # أطباء مستشفى معين
├── specialties/
│   └── route.ts
├── provinces/
│   └── route.ts
└── services/
    └── route.ts
```

---

## 🔗 العلاقات

```
Doctor
├── id: معرف فريد
├── name: الاسم
├── specialty: التخصص
├── facilityId: معرف المستشفى/العيادة
└── ...بيانات أخرى

Hospital
├── id: معرف فريد
├── name: الاسم
├── type: hospital أو clinic
├── specialties: التخصصات المتوفرة
└── ...بيانات أخرى
```

---

## 🔌 نقاط نهاية API

### 1️⃣ الأطباء

#### احصل على جميع الأطباء
```
GET /api/doctors
```

**مثال الاستجابة:**
```json
{
  "نجح": true,
  "البيانات": [
    {
      "id": "doc_001",
      "name": "د. أحمد محمد علي",
      "specialty": "dermatology",
      "experience": 15,
      "rating": 4.8,
      "reviews": 142,
      "phone": "+201001234567",
      "email": "ahmed@clinic.com",
      "image": "https://via.placeholder.com/200?text=د.احمد",
      "facilityId": "clinic_003",
      "qualifications": ["بكالوريوس الطب - جامعة القاهرة", "ماجستير الأمراض الجلدية"],
      "services": ["consultation", "medical_services"],
      "about": "متخصص في أمراض الجلد والعلاجات التجميلية"
    }
  ],
  "العدد": 12
}
```

#### احصل على طبيب محدد
```
GET /api/doctors?معرف=doc_001
```

#### احصل على أطباء تخصص معين
```
GET /api/doctors?تخصص=dermatology
```

#### احصل على أطباء مستشفى معين
```
GET /api/doctors?مستشفى=clinic_003
```

#### ابحث عن طبيب
```
GET /api/doctors?بحث=أحمد
```

---

### 2️⃣ المستشفيات والعيادات

#### احصل على جميع المستشفيات والعيادات
```
GET /api/hospitals
```

**مثال الاستجابة:**
```json
{
  "نجح": true,
  "البيانات": [
    {
      "id": "hosp_001",
      "name": "مستشفى الأمل المتخصصة",
      "type": "hospital",
      "phone": "+201006234567",
      "email": "hospital@amal.com",
      "address": "شارع النيل، مدينة نصر",
      "province": "cairo",
      "area": "cairo_madinet",
      "image": "https://via.placeholder.com/250?text=مستشفى+الامل",
      "rating": 4.8,
      "reviews": 345,
      "specialties": ["general_surgery", "cardiology", "orthopedics"],
      "services": ["consultation", "medical_services", "lab_tests", "home_visits"],
      "description": "مستشفى معتمدة دولياً متخصصة في الجراحة العامة",
      "operatingHours": {
        "open": "08:00",
        "close": "22:00"
      }
    }
  ],
  "العدد": 5
}
```

#### احصل على مستشفى محددة
```
GET /api/hospitals?معرف=hosp_001
```

*الاستجابة ستتضمن أيضاً الأطباء في هذه المستشفى:*
```json
{
  "نجح": true,
  "البيانات": {
    "id": "hosp_001",
    "name": "مستشفى الأمل المتخصصة",
    ...
    "الأطباء": [
      { "id": "doc_002", "name": "د. فاطمة سالم حسن", ... },
      { "id": "doc_004", "name": "د. سمير إبراهيم محمد", ... }
    ]
  }
}
```

#### احصل على عيادات فقط
```
GET /api/hospitals?نوع=clinic
```

#### احصل على مستشفيات فقط
```
GET /api/hospitals?نوع=hospital
```

#### احصل على مستشفيات محافظة معينة
```
GET /api/hospitals?محافظة=cairo
```

#### ابحث عن مستشفى
```
GET /api/hospitals?بحث=أمل
```

---

### 3️⃣ أطباء مستشفى محددة

#### احصل على جميع أطباء مستشفى معينة
```
GET /api/hospitals/hosp_001/doctors
```

**مثال الاستجابة:**
```json
{
  "نجح": true,
  "المستشفى": "مستشفى الأمل المتخصصة",
  "البيانات": [
    {
      "id": "doc_002",
      "name": "د. فاطمة سالم حسن",
      "specialty": "obstetrics",
      "experience": 12,
      "rating": 4.9,
      "reviews": 158,
      ...
    },
    {
      "id": "doc_004",
      "name": "د. سمير إبراهيم محمد",
      "specialty": "orthopedics",
      "experience": 16,
      "rating": 4.5,
      "reviews": 124,
      ...
    }
  ],
  "العدد": 4
}
```

---

## 📊 الإحصائيات

| البند | العدد |
|------|-------|
| 👨‍⚕️ الأطباء | 12 |
| 🏥 المستشفيات | 2 |
| 🏘️ العيادات | 3 |
| 🔬 التخصصات | 43 |
| 🏪 الخدمات | 8 |

---

## 🔄 أمثلة الاستخدام

### مثال 1: عرض جميع الأطباء
```javascript
const response = await fetch('/api/doctors');
const { البيانات: doctors } = await response.json();
```

### مثال 2: عرض أطباء مستشفى محددة
```javascript
const response = await fetch('/api/hospitals/hosp_001/doctors');
const { البيانات: doctors, المستشفى } = await response.json();
```

### مثال 3: البحث عن طبيب
```javascript
const query = 'أحمد';
const response = await fetch(`/api/doctors?بحث=${query}`);
const { البيانات: results } = await response.json();
```

### مثال 4: عرض عيادات بمحافظة معينة
```javascript
const response = await fetch('/api/hospitals?محافظة=cairo&نوع=clinic');
const { البيانات: clinics } = await response.json();
```

### مثال 5: عرض تفاصيل مستشفى مع أطبائها
```javascript
const response = await fetch('/api/hospitals?معرف=hosp_001');
const { البيانات: hospital } = await response.json();
// hospital.الأطباء يحتوي على جميع الأطباء في المستشفى
```

---

## 🎯 الفوائد

✅ **فصل واضح** - الأطباء له API منفصل عن المستشفيات  
✅ **علاقات قوية** - ربط سهل بين الأطباء والمستشفيات  
✅ **مرونة عالية** - تصفية وبحث متقدم  
✅ **أداء أفضل** - بيانات منظمة وسهلة الوصول  
✅ **عرض متقدم** - عرض الأطباء داخل المستشفيات مباشرة

---

## 📝 ملاحظات

- كل طبيب له `facilityId` يشير إلى المستشفى/العيادة التي يعمل بها
- المستشفيات توفر معلومات شاملة عن الخدمات والتخصصات
- يمكن عرض الأطباء بعدة طرق:
  1. جميع الأطباء الموجودين
  2. أطباء تخصص معين
  3. أطباء مستشفى معينة
  4. نتائج البحث
