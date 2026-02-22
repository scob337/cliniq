# 📖 دليل API كلينيق الشامل

## 🚀 البدء السريع

### عنوان الخادم الأساسي
```
http://localhost:3000
```

---

## 📋 قائمة API Endpoints

### 1️⃣ **التخصصات الطبية**

#### احصل على جميع التخصصات
```
GET /api/specialties
```

**مثال الطلب:**
```bash
curl http://localhost:3000/api/specialties
```

**مثال الاستجابة:**
```json
{
  "نجح": true,
  "البيانات": [
    {
      "id": "dermatology",
      "name": "جلدية",
      "description": "أمراض الجلد والعلاج الجمالي",
      "image": "https://via.placeholder.com/150?text=جلدية"
    }
  ],
  "العدد": 43
}
```

---

### 2️⃣ **المحافظات والمناطق**

#### احصل على جميع المحافظات
```
GET /api/provinces
```

**مثال الطلب:**
```bash
curl http://localhost:3000/api/provinces
```

**مثال الاستجابة:**
```json
{
  "نجح": true,
  "البيانات": [
    {
      "id": "cairo",
      "name": "القاهرة",
      "areas": [
        {
          "id": "cairo_downtown",
          "name": "وسط البلد"
        }
      ]
    }
  ],
  "العدد": 8
}
```

#### احصل على محافظة معينة
```
GET /api/provinces?محافظة={معرف_المحافظة}
```

**مثال الطلب:**
```bash
curl "http://localhost:3000/api/provinces?محافظة=cairo"
```

---

### 3️⃣ **الخدمات الطبية**

#### احصل على الخدمات
```
GET /api/services
```

**مثال الطلب:**
```bash
curl http://localhost:3000/api/services
```

**مثال الاستجابة:**
```json
{
  "نجح": true,
  "البيانات": [
    {
      "id": "consultation",
      "name": "الاستشارات الطبية",
      "description": "استشارات طبية من أطباء متخصصين",
      "image": "https://via.placeholder.com/150?text=استشارات"
    }
  ],
  "العدد": 8
}
```

---

### 4️⃣ **الأطباء والعيادات والمستشفيات**

#### احصل على جميع الأطباء
```
GET /api/doctors
```

**مثال الطلب:**
```bash
curl http://localhost:3000/api/doctors
```

#### احصل على طبيب بمعرف
```
GET /api/doctors?معرف={معرف_الطبيب}
```

**مثال الطلب:**
```bash
curl "http://localhost:3000/api/doctors?معرف=doc_001"
```

#### احصل على أطباء التخصص
```
GET /api/doctors?تخصص={معرف_التخصص}
```

**مثال الطلب:**
```bash
curl "http://localhost:3000/api/doctors?تخصص=dermatology"
```

#### احصل على أطباء المحافظة
```
GET /api/doctors?محافظة={معرف_المحافظة}
```

**مثال الطلب:**
```bash
curl "http://localhost:3000/api/doctors?محافظة=cairo"
```

#### احصل على أطباء المنطقة
```
GET /api/doctors?محافظة={معرف_المحافظة}&منطقة={معرف_المنطقة}
```

**مثال الطلب:**
```bash
curl "http://localhost:3000/api/doctors?محافظة=cairo&منطقة=cairo_downtown"
```

#### ابحث عن أطباء
```
GET /api/doctors?بحث={نص_البحث}
```

**مثال الطلب:**
```bash
curl "http://localhost:3000/api/doctors?بحث=أحمد"
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
      "province": "cairo",
      "area": "cairo_downtown",
      "phone": "+201001234567",
      "email": "ahmed@clinic.com",
      "type": "doctor",
      "image": "https://via.placeholder.com/200?text=د.احمد",
      "qualifications": [
        "بكالوريوس الطب",
        "ماجستير الأمراض الجلدية"
      ],
      "services": [
        "consultation",
        "medical_services"
      ],
      "about": "متخصص في أمراض الجلد والعلاجات التجميلية بخبرة 15 سنة"
    }
  ],
  "العدد": 1
}
```

---

## 💻 أمثلة الكود

### استخدام JavaScript / React

```javascript
// احصل على التخصصات
async function getSpecialties() {
  const response = await fetch('/api/specialties');
  const { البيانات } = await response.json();
  return البيانات;
}

// احصل على أطباء تخصص
async function getDoctorsBySpecialty(specialty) {
  const response = await fetch(`/api/doctors?تخصص=${specialty}`);
  const { البيانات } = await response.json();
  return البيانات;
}

// ابحث عن أطباء
async function searchDoctors(query) {
  const response = await fetch(`/api/doctors?بحث=${query}`);
  const { البيانات } = await response.json();
  return البيانات;
}
```

### استخدام React Query

```typescript
import { useQuery } from '@tanstack/react-query';

// احصل على التخصصات
const { data: specialties } = useQuery({
  queryKey: ['specialties'],
  queryFn: async () => {
    const res = await fetch('/api/specialties');
    return res.json();
  }
});

// احصل على أطباء
const { data: doctors } = useQuery({
  queryKey: ['doctors', specialty],
  queryFn: async () => {
    const res = await fetch(`/api/doctors?تخصص=${specialty}`);
    return res.json();
  }
});
```

### استخدام Axios

```typescript
import axios from 'axios';

// احصل على المحافظات
const getProvinces = async () => {
  try {
    const { data } = await axios.get('/api/provinces');
    console.log(data.البيانات);
  } catch (error) {
    console.error(error);
  }
};

// احصل على أطباء منطقة
const getDoctorsByArea = async (province, area) => {
  try {
    const { data } = await axios.get('/api/doctors', {
      params: {
        محافظة: province,
        منطقة: area
      }
    });
    console.log(data.البيانات);
  } catch (error) {
    console.error(error);
  }
};
```

---

## 🔑 معاملات الاستعلام (Query Parameters)

### معاملات الأطباء

| المعامل | النوع | الوصف | مثال |
|--------|------|-------|------|
| `معرف` | string | معرف الطبيب الفريد | `doc_001` |
| `تخصص` | string | معرف التخصص | `dermatology` |
| `محافظة` | string | معرف المحافظة | `cairo` |
| `منطقة` | string | معرف المنطقة (مع محافظة) | `cairo_downtown` |
| `بحث` | string | نص البحث | `أحمد` |

### معاملات المحافظات

| المعامل | النوع | الوصف | مثال |
|--------|------|-------|------|
| `محافظة` | string | معرف المحافظة (اختياري) | `cairo` |

---

## 📊 رموز الاستجابة

| الرمز | الوصف |
|------|-------|
| 200 | نجاح العملية |
| 404 | لم يتم العثور على البيانات |
| 500 | خطأ في السيرفر |

---

## 📋 قائمة معرفات التخصصات

```
dermatology          - جلدية
psychiatry           - الطب النفسي
ent                  - أنف وأذن وحنجرة
ophthalmology        - طب العيون
pulmonology          - الصدرية والجهاز التنفسي
orthopedics          - العظام والمفاصل
internal_medicine    - الطب الباطني
urology              - المسالك البولية
obstetrics           - النساء والتوليد
dentistry            - طب الأسنان
... وأكثر من 33 تخصص آخر
```

---

## 📍 قائمة معرفات المحافظات

```
cairo        - القاهرة
giza         - الجيزة
alexandria   - الإسكندرية
qalioubiya   - القليوبية
dakahlia     - الدقهلية
beheira      - البحيرة
suez         - السويس
ismailia     - الإسماعيلية
```

---

## ✅ الملفات المتاحة

- 📄 **postman_collection.json** - مجموعة Postman
- 📄 **swagger.json** - مواصفات OpenAPI
- 📄 **API_GUIDE.md** - هذا الدليل

---

## 🤝 التكامل مع Frontend

### خطوات التكامل

1. **استيراد البيانات** - استخدم أحد الـ Endpoints
2. **معالجة الاستجابة** - تحقق من `نجح`
3. **عرض البيانات** - احفظ `البيانات` في الـ state
4. **معالجة الأخطاء** - تحقق من الـ status code

---

## 🔗 موارد إضافية

- 📖 [Postman Collection](./postman_collection.json)
- 📖 [Swagger/OpenAPI](./swagger.json)
- 📖 [التوثيق الكامل](./التوثيق.md)

