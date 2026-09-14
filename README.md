# Can Dostlar Pet Tedarik — Supabase Bağlantılı V3

GitHub Pages üzerinde çalışan statik siteye Supabase Authentication bağlantısı eklenmiştir.

## 1) Supabase SQL kurulumu
Supabase Dashboard → SQL Editor → New query bölümünü açın.
`supabase-setup.sql` içeriğini yapıştırıp Run'a basın.

Bu işlem `dealer_profiles` tablosunu ve yeni bayi kayıtlarında otomatik profil oluşturacak trigger'ı kurar.

## 2) Bayi başvurusu
Sitede Bayi Ol formu gerçek Supabase Auth hesabı oluşturur. İşletme adı metadata olarak kaydedilir ve profil `approved=false` ile başlar.

Supabase e-posta doğrulamasını açık tutuyorsanız bayi önce e-postasını doğrular.

## 3) Bayi onayı
İlk aşamada manuel onay:
Supabase → Table Editor → dealer_profiles → ilgili bayi → `approved` alanını `true` yapın.

Sonraki aşamada güvenli bir admin paneli/Edge Function eklenebilir.

## 4) Güvenlik
Sitede yalnızca Supabase Publishable Key bulunur. Secret key, service_role key ve database password tarayıcı koduna kesinlikle eklenmemelidir.

## 5) GitHub Pages
Bu klasördeki `index.html`, `style.css`, `script.js`, `README.md` ve `supabase-setup.sql` dosyalarını GitHub repo'nuza yükleyin. `supabase-setup.sql` sitede çalışmaz; sadece Supabase SQL Editor içindir.
