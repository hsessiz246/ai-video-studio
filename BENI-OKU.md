# AI Video Studio — Web Sürümü

Bu klasör, uygulamanın internetten açılan sürümüdür. Yayınlandığında
`https://ai-video-studio-xxxx.onrender.com` gibi bir bağlantın olur; herkes
tarayıcıdan (Chrome/Edge önerilir) açıp kullanabilir. Sesler, yapay zekâ ile
senaryo ve görsel üretimi masaüstü sürümündeki gibi çalışır.

## Yayınlama (yaklaşık 10 dakika, ücretsiz)

### 1) GitHub'a yükle
1. https://github.com/signup adresinden ücretsiz hesap aç (varsa giriş yap).
2. Sağ üstteki **+** → **New repository**.
3. Ad: `ai-video-studio` · **Public** seç · **Create repository**.
4. Açılan sayfada **uploading an existing file** bağlantısına tıkla.
5. Bu klasörün **içindeki her şeyi** (server.js, edge-tts.js, package.json,
   render.yaml, public klasörü, BENI-OKU.md) seçip sayfaya sürükle-bırak.
   *Klasörün kendisini değil, içini sürükle.*
6. Yükleme bitince en alttaki **Commit changes** düğmesine bas.

### 2) Render'da yayınla
1. https://render.com → **Get Started** → **GitHub ile giriş yap**.
2. Panelde **New +** → **Blueprint**.
3. `ai-video-studio` deposunu seç (görünmüyorsa **Configure GitHub** ile
   Render'a bu depoya izin ver) → **Connect**.
4. **Apply / Deploy** → 1-2 dakika bekle. Üstte görünen
   `https://....onrender.com` bağlantısı senin siten.

### 3) (İsteğe bağlı) Şifre koy
Siteyi sadece senin verdiğin kişiler açsın istiyorsan: Render'da servisi aç →
**Environment** → **Add Environment Variable** → Key: `APP_PASSWORD`,
Value: istediğin şifre → **Save**. Açılışta kullanıcı adı herhangi bir şey,
şifre bu olur. Boş bırakırsan site herkese açıktır.

## Bilinmesi gerekenler
- **Ücretsiz planda** site 15 dakika kullanılmazsa uyur; ilk açılış
  30-60 saniye sürebilir. Sonra normal hızda çalışır.
- **Video oluşturulurken sekmeyi açık ve önde tut.** Tarayıcılar arka
  plandaki sekmeyi yavaşlatır; başka sekmeye geçersen kayıt bozulabilir.
- Video bitince **İndir** düğmesiyle bilgisayara/telefona iner (masaüstündeki
  gibi otomatik klasöre kaydedilmez). 5-10 dakikalık uzun videolar için
  bilgisayarda Chrome kullan; telefonda bellek yetmeyebilir.
- Projeler, ayarlar ve API anahtarları **her kullanıcının kendi
  tarayıcısında** saklanır; başkası seninkini göremez.
- Güncelleme: GitHub'daki dosyaları yenileriyle değiştirince Render siteyi
  kendiliğinden yeniden yayınlar.

## Yapay zekâ servisleri (v2.0)
Fabrikadaki **YAPAY ZEKÂ** istasyonundan Gemini, Claude, OpenAI, Groq, OpenRouter (metin),
Gemini / OpenAI / fal.ai / Replicate (görsel), ElevenLabs / OpenAI (ses) ve fal.ai / Replicate
(resmi videoya çevirme: Kling, Hailuo, Seedance) bağlanabilir. Anahtarlar yalnızca
kullanıcının kendi tarayıcısında saklanır; istekler bu sunucu üzerinden servise iletilir
(sunucu anahtarları kaydetmez). Web sürümünde üretilen video klipler sunucu uyuyana kadar
saklanır — videoyu oluşturup indirmeyi unutma.

## Kendi bilgisayarında denemek
Node.js 20+ kuruluysa bu klasörde: `node server.js` → http://localhost:10000
