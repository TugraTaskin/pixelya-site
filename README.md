# Pixelya – Statik Web Sitesi (3D ana sayfa + 81 sayfa)

pixelyareklam.com içeriğinin (hizmetler, sektörler, bölgeler, vaka, portföy, hakkımızda, iletişim, yasal sayfalar,
38 TR blog yazısı, EN sayfalar ve EN blog) tek pakette toplanmış hali. Ana sayfa canlı three.js 3D sahnesidir.

## Çalıştırma
3D ana sayfa ES modülleri kullanır; `index.html` dosyasına çift tıklamak (file://) 3D'yi çalıştırmaz, sayfa
otomatik olarak 3D'siz moda geçer. Doğru kullanım:

    cd site
    python3 -m http.server 8000      # sonra http://localhost:8000

ya da klasörün tamamını herhangi bir statik hosta (Netlify, Vercel, Cloudflare Pages, cPanel) yükleyin.
Tüm bağlantılar göreli ve `.../index.html` biçimindedir; alt klasörde de çalışır.

## Yapı
- `index.html` – 3D ana sayfa (assets/three içinde yerel three.js r163, MIT lisansı)
- `hizmetler/`, `sektorler/`, `bolgeler/`, `vaka/`, `portfoy/`, `hakkimizda/`, `iletisim/`
- `blog/` + `blog/<slug>/` – 38 yazı, kategori filtreli liste
- `en/` – İngilizce sayfalar ve 3 İngilizce blog yazısı
- `kvkk-aydinlatma-metni/`, `gizlilik-politikasi/`, `cerez-politikasi/`
- `sitemap.txt` – 81 URL (orijinal sitedeki yollarla aynı)
- `assets/site.css`, `assets/site.js` – iç sayfa stili; iletişim formu WhatsApp mesajı açar

## Önemli not
İçerikler orijinal sitenin özetlenip yeniden yazılmış halidir; birebir kopya değildir. Yasal sayfalarda yalnızca bölüm
başlıkları vardır: yayına almadan önce tam metinleri orijinal adreslerden ekleyin. Müşteri yorum metinleri alınamadı.
Fontlar Google Fonts'tan yüklenir (internet yoksa sistem fontuna düşer).
