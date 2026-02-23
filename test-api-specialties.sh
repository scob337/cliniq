#!/bin/bash
# 🧪 اختبارات API التخصصات - أوامر curl جاهزة
# استخدم هذا الملف لاختبار API من خط الأوامر

echo "🚀 اختبارات API التخصصات"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ============================================
# اختبار 1: جلب جميع التخصصات
# ============================================
echo ""
echo "📌 اختبار 1: جلب جميع التخصصات"
echo "---"
echo "curl http://localhost:3000/api/specialties"

# curl http://localhost:3000/api/specialties | jq '.'

# ============================================
# اختبار 2: جلب التخصصات في القاهرة فقط
# ============================================
echo ""
echo "📌 اختبار 2: التخصصات في القاهرة"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?province=cairo'"

# curl 'http://localhost:3000/api/specialties?province=cairo' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 3: التخصصات الرخيصة (أقل من 200 جنيه)
# ============================================
echo ""
echo "📌 اختبار 3: التخصصات الرخيصة (≤ 200 جنيه)"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?maxPrice=200'"

# curl 'http://localhost:3000/api/specialties?maxPrice=200' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 4: التخصصات المتوسطة (200-400 جنيه)
# ============================================
echo ""
echo "📌 اختبار 4: التخصصات المتوسطة (200-400 جنيه)"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?minPrice=200&maxPrice=400'"

# curl 'http://localhost:3000/api/specialties?minPrice=200&maxPrice=400' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 5: التخصصات المتقدمة (أكثر من 400 جنيه)
# ============================================
echo ""
echo "📌 اختبار 5: التخصصات المرتفعة (≥ 400 جنيه)"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?minPrice=400'"

# curl 'http://localhost:3000/api/specialties?minPrice=400' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 6: البحث عن تخصصات جراحية
# ============================================
echo ""
echo "📌 اختبار 6: البحث عن 'جراحة'"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?search=جراحة'"

# curl 'http://localhost:3000/api/specialties?search=جراحة' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 7: البحث عن تخصصات متعلقة بالقلب
# ============================================
echo ""
echo "📌 اختبار 7: البحث عن 'قلب'"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?search=قلب'"

# curl 'http://localhost:3000/api/specialties?search=قلب' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 8: فلترة متقدمة - جراحة في القاهرة
# ============================================
echo ""
echo "📌 اختبار 8: فلترة متقدمة"
echo "جراحة في القاهرة بسعر 300-450 جنيه"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?province=cairo&minPrice=300&maxPrice=450&search=جراحة'"

# curl 'http://localhost:3000/api/specialties?province=cairo&minPrice=300&maxPrice=450&search=جراحة' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 9: التخصصات في الإسكندرية برسوم معقولة
# ============================================
echo ""
echo "📌 اختبار 9: الإسكندرية - أسعار 200-350"
echo "---"
echo "curl 'http://localhost:3000/api/specialties?province=alexandria&minPrice=200&maxPrice=350'"

# curl 'http://localhost:3000/api/specialties?province=alexandria&minPrice=200&maxPrice=350' | jq '.البيانات[] | {name, consultation_fee}'

# ============================================
# اختبار 10: جميع المحافظ
# ============================================
echo ""
echo "📌 اختبار 10: اختبر جميع المحافظ"
echo "---"

echo ""
echo "مهام مقترحة للاختبار:"
echo "1. curl 'http://localhost:3000/api/specialties?province=cairo'"
echo "2. curl 'http://localhost:3000/api/specialties?province=giza'"
echo "3. curl 'http://localhost:3000/api/specialties?province=alexandria'"
echo "4. curl 'http://localhost:3000/api/specialties?province=assiut'"
echo "5. curl 'http://localhost:3000/api/specialties?province=beheira'"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ انسخ أحد الأوامر أعلاه والصقه في Terminal"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# ============================================
# PowerShell أوامر بديلة
# ============================================

echo ""
echo "📋 أوامر PowerShell (للنوافذ):"
echo ""
echo "# جلب جميع التخصصات"
echo "Invoke-WebRequest -Uri 'http://localhost:3000/api/specialties' | ConvertFrom-Json"
echo ""
echo "# فلترة حسب المحافظة"
echo "Invoke-WebRequest -Uri 'http://localhost:3000/api/specialties?province=cairo' | ConvertFrom-Json"
echo ""
echo "# فلترة حسب السعر"
echo "Invoke-WebRequest -Uri 'http://localhost:3000/api/specialties?minPrice=250&maxPrice=400' | ConvertFrom-Json"
echo ""
echo "# بحث متقدم"
echo "Invoke-WebRequest -Uri 'http://localhost:3000/api/specialties?search=جراحة' | ConvertFrom-Json"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✨ اختبارات এত الملف جاهزة للاستخدام"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
