# 📋 Cliniq Server API Documentation

## 🎯 نظرة عامة

هذا السيرفر يوفر API endpoints لخدمة بيانات كلينيدو الثابتة. تم تنظيم البيانات بشكل منظم وسهل التعديل.

---

## 📁 البنية الأساسية

```
lib/data/
├── specialties.ts    # التخصصات الطبية
├── provinces.ts      # المحافظات والمناطق
├── services.ts       # الخدمات الطبية
└── doctors.ts        # الأطباء والعيادات والمستشفيات
```

---

## 🔌 API Endpoints

### 1️⃣ التخصصات الطبية
**Endpoint:** `GET /api/specialties`

**الاستجابة:**
```json
{
  "success": true,
  "data": [
    {
      "id": "dermatology",
      "nameAr": "جلديه",
      "nameEn": "Dermatology"
    }
  ],
  "count": 43
}
```

---

### 2️⃣ المحافظات والمناطق
**Endpoint:** `GET /api/provinces`

**Parameters:**
- `province` (اختياري) - معرف المحافظة

**الاستجابة:**
```json
{
  "success": true,
  "data": [
    {
      "id": "cairo",
      "nameAr": "القاهرة",
      "nameEn": "Cairo",
      "areas": [
        {
          "id": "cairo_downtown",
          "nameAr": "وسط البلد",
          "nameEn": "Downtown"
        }
      ]
    }
  ],
  "count": 6
}
```

**مثال:** احصل على مناطق القاهرة فقط:
```
GET /api/provinces?province=cairo
```

---

### 3️⃣ الخدمات الطبية
**Endpoint:** `GET /api/services`

**الاستجابة:**
```json
{
  "success": true,
  "data": [
    {
      "id": "consultation",
      "nameAr": "الاستشارات الطبية",
      "nameEn": "Medical Consultations",
      "description": "استشارات طبية من أطباء متخصصين"
    }
  ],
  "count": 4
}
```

---

### 4️⃣ الأطباء والعيادات والمستشفيات
**Endpoint:** `GET /api/doctors`

**Parameters:**
- `id` - معرف الطبيب
- `specialty` - التخصص
- `province` - المحافظة
- `area` - المنطقة (مع province)
- `search` - البحث عن نص

**الاستجابة:**
```json
{
  "success": true,
  "data": [
    {
      "id": "doc_001",
      "nameAr": "د. أحمد محمد علي",
      "nameEn": "Dr. Ahmed Mohammed Ali",
      "specialty": "dermatology",
      "experience": 15,
      "rating": 4.8,
      "province": "cairo",
      "area": "cairo_downtown",
      "phone": "+201001234567",
      "email": "ahmed@clinic.com",
      "type": "doctor",
      "qualifications": ["بكالوريوس الطب", "ماجستير الأمراض الجلدية"],
      "services": ["consultation", "medical_services"]
    }
  ],
  "count": 1
}
```

**أمثلة الاستخدام:**

- احصل على طبيب بمعرف محدد:
  ```
  GET /api/doctors?id=doc_001
  ```

- احصل على جميع أطباء التخصص (جلديه):
  ```
  GET /api/doctors?specialty=dermatology
  ```

- احصل على الأطباء في المحافظة:
  ```
  GET /api/doctors?province=cairo
  ```

- احصل على الأطباء في منطقة محددة:
  ```
  GET /api/doctors?province=cairo&area=cairo_downtown
  ```

- ابحث عن طبيب أو عيادة:
  ```
  GET /api/doctors?search=أحمد
  ```

---

## 📝 كيفية التعديل والإضافة

### إضافة تخصص جديد
في ملف `lib/data/specialties.ts`:
```typescript
{
  id: 'new_specialty',
  nameAr: 'اسم التخصص بالعربية',
  nameEn: 'Specialty Name in English',
}
```

### إضافة محافظة جديدة
في ملف `lib/data/provinces.ts`:
```typescript
{
  id: 'new_province',
  nameAr: 'اسم المحافظة',
  nameEn: 'Province Name',
  areas: [
    {
      id: 'area_id',
      nameAr: 'اسم المنطقة',
      nameEn: 'Area Name'
    }
  ]
}
```

### إضافة دكتور أو عيادة جديدة
في ملف `lib/data/doctors.ts`:
```typescript
{
  id: 'doc_100',
  nameAr: 'د. محمد أحمد',
  nameEn: 'Dr. Mohammed Ahmed',
  specialty: 'dermatology',
  experience: 10,
  rating: 4.5,
  province: 'cairo',
  area: 'cairo_downtown',
  phone: '+201234567890',
  email: 'doctor@email.com',
  type: 'doctor', // 'doctor' | 'clinic' | 'hospital'
  qualifications: ['بكالوريوس الطب'],
  services: ['consultation']
}
```

---

## 🚀 الاستخدام من الـ Frontend

### استخدام React Query
```typescript
import { useQuery } from '@tanstack/react-query';

// احصل على التخصصات
const { data: specialties } = useQuery({
  queryKey: ['specialties'],
  queryFn: () => fetch('/api/specialties').then(r => r.json())
});

// احصل على الأطباء حسب التخصص
const { data: doctors } = useQuery({
  queryKey: ['doctors', specialty],
  queryFn: () => fetch(`/api/doctors?specialty=${specialty}`).then(r => r.json())
});
```

### استخدام Fetch API
```typescript
// احصل على المحافظات
const response = await fetch('/api/provinces');
const { data } = await response.json();
```

---

## ✅ الميزات

- ✨ بيانات منظمة وسهلة الصيانة
- 🌐 دعم اللغة العربية والإنجليزية
- 🔍 إمكانية البحث والتصفية
- 📱 استجابات JSON موحدة
- 🚀 بدون قاعدة بيانات خارجية
- 💾 بيانات ثابتة وآمنة

---

## 📞 هل تحتاج إلى مساعدة؟

لإضافة بيانات جديدة أو تعديل البيانات الحالية، عدل الملفات المناسبة في `lib/data/`.
