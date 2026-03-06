# 🧪 اختبارات API التخصصات - PowerShell
# استخدم هذا الملف لاختبار API على Windows

Write-Host "🚀 اختبارات API التخصصات" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

$baseUrl = "http://localhost:3000/api/specialties"

# ============================================
# اختبار 1: جلب جميع التخصصات
# ============================================
Write-Host "`n📌 اختبار 1: جلب جميع التخصصات" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl'" -ForegroundColor White

# $result = Invoke-WebRequest -Uri $baseUrl -ErrorAction SilentlyContinue
# $data = $result.Content | ConvertFrom-Json
# Write-Host "✅ النتائج: $($ data.البيانات.Count) تخصص" -ForegroundColor Green

# ============================================
# اختبار 2: جلب التخصصات في القاهرة فقط
# ============================================
Write-Host "`n📌 اختبار 2: التخصصات في القاهرة" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?province=cairo'" -ForegroundColor White

# ============================================
# اختبار 3: التخصصات الرخيصة (أقل من 200 جنيه)
# ============================================
Write-Host "`n📌 اختبار 3: التخصصات الرخيصة (≤ 200 جنيه)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?maxPrice=200'" -ForegroundColor White

# ============================================
# اختبار 4: التخصصات المتوسطة (200-400 جنيه)
# ============================================
Write-Host "`n📌 اختبار 4: التخصصات المتوسطة (200-400 جنيه)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?minPrice=200&maxPrice=400'" -ForegroundColor White

# ============================================
# اختبار 5: التخصصات المرتفعة (≥ 400 جنيه)
# ============================================
Write-Host "`n📌 اختبار 5: التخصصات المرتفعة (≥ 400 جنيه)" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?minPrice=400'" -ForegroundColor White

# ============================================
# اختبار 6: البحث عن تخصصات جراحية
# ============================================
Write-Host "`n📌 اختبار 6: البحث عن 'جراحة'" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?search=جراحة'" -ForegroundColor White

# ============================================
# اختبار 7: البحث عن تخصصات متعلقة بالقلب
# ============================================
Write-Host "`n📌 اختبار 7: البحث عن 'قلب'" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?search=قلب'" -ForegroundColor White

# ============================================
# اختبار 8: فلترة متقدمة
# ============================================
Write-Host "`n📌 اختبار 8: فلترة متقدمة" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "جراحة في القاهرة بسعر 300-450 جنيه" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?province=cairo&minPrice=300&maxPrice=450&search=جراحة'" -ForegroundColor White

# ============================================
# اختبار 9: التخصصات في الإسكندرية
# ============================================
Write-Host "`n📌 اختبار 9: الإسكندرية - أسعار 200-350" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray
Write-Host "الأمر:" -ForegroundColor Cyan
Write-Host "Invoke-WebRequest -Uri '$baseUrl?province=alexandria&minPrice=200&maxPrice=350'" -ForegroundColor White

# ============================================
# اختبار جميع المحافظ
# ============================================
Write-Host "`n📌 اختبار جميع المحافظ" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

$provinces = @('cairo', 'giza', 'alexandria', 'assiut', 'beheira')
$provincesNames = @{
    'cairo' = 'القاهرة'
    'giza' = 'الجيزة'
    'alexandria' = 'الإسكندرية'
    'assiut' = 'أسيوط'
    'beheira' = 'البحيرة'
}

foreach ($province in $provinces) {
    Write-Host "`n$($provincesNames[$province]):" -ForegroundColor Cyan
    Write-Host "Invoke-WebRequest -Uri '$baseUrl?province=$province' | ConvertFrom-Json" -ForegroundColor White
}

# ============================================
# وظائف مساعدة
# ============================================
Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "📋 وظائف PowerShell مساعدة:" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan

# دالة للحصول على جميع التخصصات
$function_getAllSpecialties = @'
function Get-AllSpecialties {
    $result = Invoke-WebRequest -Uri "http://localhost:3000/api/specialties" -ErrorAction SilentlyContinue
    $data = $result.Content | ConvertFrom-Json
    Write-Host "📊 إجمالي التخصصات: $($data.البيانات.Count)" -ForegroundColor Green
    return $data.البيانات
}
'@

# دالة للفلترة حسب المحافظة
$function_getByProvince = @'
function Get-SpecialtiesByProvince {
    param([string]$Province)
    $uri = "http://localhost:3000/api/specialties?province=$Province"
    $result = Invoke-WebRequest -Uri $uri -ErrorAction SilentlyContinue
    $data = $result.Content | ConvertFrom-Json
    Write-Host "📊 التخصصات في $Province : $($data.البيانات.Count)" -ForegroundColor Green
    return $data.البيانات
}
'@

# دالة للبحث
$function_search = @'
function Search-Specialties {
    param([string]$SearchTerm)
    $uri = "http://localhost:3000/api/specialties?search=$([System.Uri]::EscapeDataString($SearchTerm))"
    $result = Invoke-WebRequest -Uri $uri -ErrorAction SilentlyContinue
    $data = $result.Content | ConvertFrom-Json
    Write-Host "📊 نتائج البحث عن '$SearchTerm': $($data.البيانات.Count)" -ForegroundColor Green
    return $data.البيانات
}
'@

Write-Host "`nأمثلة على الاستخدام:" -ForegroundColor Yellow
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Gray

Write-Host "`n# 1. جلب جميع التخصصات" -ForegroundColor Cyan
Write-Host '$specialties = Get-AllSpecialties' -ForegroundColor White
Write-Host '$specialties | Select-Object -Property name, consultation_fee' -ForegroundColor White

Write-Host "`n# 2. جلب التخصصات في محافظة معينة" -ForegroundColor Cyan
Write-Host '$cairoSpecialties = Get-SpecialtiesByProvince -Province "cairo"' -ForegroundColor White
Write-Host '$cairoSpecialties | Select-Object -Property name, consultation_fee, doctors_count' -ForegroundColor White

Write-Host "`n# 3. البحث عن تخصصات" -ForegroundColor Cyan
Write-Host '$surgeries = Search-Specialties -SearchTerm "جراحة"' -ForegroundColor White
Write-Host '$surgeries | ForEach-Object { Write-Host "$($_.name): $($_.consultation_fee) جنيه" }' -ForegroundColor White

# ============================================
# معلومات مهمة
# ============================================
Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "✨ معلومات مهمة:" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green

Write-Host "`n✅ تأكد من أن الخادم يعمل على:" -ForegroundColor Yellow
Write-Host "   http://localhost:3000" -ForegroundColor Cyan

Write-Host "`n📍 المحافظات المتاحة:" -ForegroundColor Yellow
Write-Host "   • cairo (القاهرة)" -ForegroundColor Cyan
Write-Host "   • giza (الجيزة)" -ForegroundColor Cyan
Write-Host "   • alexandria (الإسكندرية)" -ForegroundColor Cyan
Write-Host "   • assiut (أسيوط)" -ForegroundColor Cyan
Write-Host "   • beheira (البحيرة)" -ForegroundColor Cyan

Write-Host "`n💰 نطاق الأسعار:" -ForegroundColor Yellow
Write-Host "   • الأدنى: 150 جنيه" -ForegroundColor Cyan
Write-Host "   • الأقصى: 500 جنيه" -ForegroundColor Cyan
Write-Host "   • المتوسط: ~330 جنيه" -ForegroundColor Cyan

Write-Host "`n📊 إحصائيات:" -ForegroundColor Yellow
Write-Host "   • إجمالي التخصصات: 43" -ForegroundColor Cyan
Write-Host "   • إجمالي الأطباء: 165+" -ForegroundColor Cyan

Write-Host "`n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
Write-Host "✅ النظام جاهز للاختبار!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Green
