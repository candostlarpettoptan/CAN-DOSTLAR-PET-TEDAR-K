;// ============================================================
// CAN DOSTLAR PET TEDARİK
// Supabase bağlantılı - Herkese açık fiyat kataloğu
// ============================================================

const SUPABASE_URL = "https://nzqoddiekzvwumhgloyn.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_qX8PQlS_tgcHM2vFL3gHIA_LeWvPuyv";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);


// ============================================================
// ÜRÜNLER
// ============================================================

const products = [

  // ==================== KEDİ ====================

  {name:"Adios Kedi Maması 15 KG",price:800,cat:"Kedi",icon:"🐱"},
  {name:"Brisky Kedi Maması Kitten 1 KG",price:90,cat:"Kedi",icon:"🐱"},
  {name:"Brisky Kedi Maması Sığır Eti 1 KG",price:90,cat:"Kedi",icon:"🐱"},
  {name:"Brisky Kedi Maması Somonlu 1 KG",price:90,cat:"Kedi",icon:"🐱"},
  {name:"Brisky Kedi Maması Tavuklu 1 KG",price:90,cat:"Kedi",icon:"🐱"},
  {name:"Juno 500 GR Yavru Kedi Maması Tavuklu",price:60,cat:"Kedi",icon:"🐱"},
  {name:"Juno 500 GR Tavuklu Kedi Maması",price:60,cat:"Kedi",icon:"🐱"},
  {name:"Juno Somonlu Kedi Maması 500 GR",price:60,cat:"Kedi",icon:"🐱"},
  {name:"Mamavita 15 KG Kedi Maması",price:850,cat:"Kedi",icon:"🐱"},
  {name:"Rico Kuzu Etli Yetişkin Kedi Maması",price:1250,cat:"Kedi",icon:"🐱"},
  {name:"Rico Somonlu Yetişkin Kedi Maması",price:1350,cat:"Kedi",icon:"🐱"},
  {name:"Rico Tavuklu Yavru Kedi Maması",price:1450,cat:"Kedi",icon:"🐱"},
  {name:"Rico Tavuklu Yetişkin Kedi Maması",price:1150,cat:"Kedi",icon:"🐱"},

  {name:"Bonavita Kedi Konserve Çeşitleri (Yeme Garantili)",price:22,cat:"Kedi",icon:"🥫"},
  {name:"Mamavita Bonavita Kedi Konserve Çeşitleri (Yeme Garantili)",price:22,cat:"Kedi",icon:"🥫"},
  {name:"Pawpaw Pouch Yavru Kedi Tavuklu",price:15,cat:"Kedi",icon:"🥫"},
  {name:"Pawpaw Pouch Yetişkin Somonlu",price:15,cat:"Kedi",icon:"🥫"},
  {name:"Pawpaw Pouch Yetişkin Tavuklu",price:15,cat:"Kedi",icon:"🥫"},

  {name:"Mhauw 30'lu Krema Ciğer",price:225,cat:"Kedi",icon:"🐱"},
  {name:"Mhauw 30'lu Krema Mix",price:240,cat:"Kedi",icon:"🐱"},
  {name:"Mhauw 30'lu Krema Somonlu",price:225,cat:"Kedi",icon:"🐱"},
  {name:"Mhauw 30'lu Krema Tavuklu",price:225,cat:"Kedi",icon:"🐱"},
  {name:"Mhauw 4'lü Krema Tavuklu",price:35,cat:"Kedi",icon:"🐱"},
  {name:"Mhauw 4'lü Paket Ciğer",price:35,cat:"Kedi",icon:"🐱"},
  {name:"Lolipop",price:15,cat:"Kedi",icon:"🐱"},
  {name:"Kedi Çimi",price:27,cat:"Kedi",icon:"🌱"},
  {name:"3 Katlı Kedi Oyuncağı",price:60,cat:"Kedi",icon:"🐱"},
  {name:"Kedi Tırmalama Ev İki Katlı",price:750,cat:"Kedi",icon:"🐱"},
  {name:"Kedi Tırmalama Ev Tek Katlı",price:500,cat:"Kedi",icon:"🐱"},
  {name:"40 CM Tırmalama (5'li Paket)",price:375,cat:"Kedi",icon:"🐱"},
  {name:"50 CM Tırmalama (5'li Set)",price:500,cat:"Kedi",icon:"🐱"},
  {name:"60 CM Tırmalama (5 Adet)",price:600,cat:"Kedi",icon:"🐱"},

  {name:"Colagen Kedi (30 Zarf)",price:250,cat:"Kedi",icon:"💊"},
  {name:"Prozoo Collagen Kedi",price:100,cat:"Kedi",icon:"💊"},
  {name:"Zonaks Colagen (30 Zarf)",price:250,cat:"Kedi",icon:"💊"},
  {name:"Kedi Probiyotik (30 Adet)",price:250,cat:"Kedi",icon:"💊"},
  {name:"İç Parazit Kedi-Köpek",price:25,cat:"Kedi",icon:"💊"},
  {name:"Zonaks Pupy Malt",price:80,cat:"Kedi",icon:"💊"},


  // ==================== KÖPEK ====================

  {name:"Büyük Köpek Kulübesi",price:4800,cat:"Köpek",icon:"🐶"},
  {name:"Küçük Köpek Kulübesi",price:2750,cat:"Köpek",icon:"🐶"},
  {name:"Çit 54x62 (Kutulu)",price:500,cat:"Köpek",icon:"🐶"},

  {name:"Cuddy Yetişkin Köpek Maması 15 KG",price:700,cat:"Köpek",icon:"🐶"},
  {name:"Mamavita Köpek Maması 15 KG Kuzulu",price:600,cat:"Köpek",icon:"🐶"},
  {name:"Rico Kuzu Köpek Maması 15 KG",price:850,cat:"Köpek",icon:"🐶"},
  {name:"Bonavita Köpek Konserve (Yeme Garantili)",price:22,cat:"Köpek",icon:"🥫"},

  {name:"10'lu Munchy",price:20,cat:"Köpek",icon:"🦴"},
  {name:"100'lü Burgu Çubuk",price:225,cat:"Köpek",icon:"🦴"},
  {name:"100'lü Burgu Munchy",price:200,cat:"Köpek",icon:"🦴"},
  {name:"12 CM Paketli Kemik",price:50,cat:"Köpek",icon:"🦴"},
  {name:"15 CM Paketli Kemik",price:65,cat:"Köpek",icon:"🦴"},
  {name:"22 CM Paketli Kemik",price:90,cat:"Köpek",icon:"🦴"},
  {name:"27 CM Kemik",price:120,cat:"Köpek",icon:"🦴"},
  {name:"4'lü 7 CM Paketli Kemik",price:60,cat:"Köpek",icon:"🦴"},
  {name:"Denta Star Köpek Ödül",price:45,cat:"Köpek",icon:"🦴"},
  {name:"Lina Köpek Stick",price:25,cat:"Köpek",icon:"🦴"},
  {name:"Mhauw 100'lü Ödül",price:675,cat:"Köpek",icon:"🦴"},
  {name:"M-Pets Köpek Ödül",price:50,cat:"Köpek",icon:"🦴"},
  {name:"Köpek Hamburger",price:45,cat:"Köpek",icon:"🍔"},
  {name:"Köpek Oyuncak Kemik",price:35,cat:"Köpek",icon:"🦴"},

  {name:"Bio Active Bioderm Biotin Tablet",price:50,cat:"Köpek",icon:"💊"},
  {name:"Bio Pet Active Multi Vitamin Tablet",price:50,cat:"Köpek",icon:"💊"},
  {name:"Bio Pet Active D Vitamin Tablet",price:50,cat:"Köpek",icon:"💊"},
  {name:"Bio Pet Active Vitamin Çiğneme Tablet",price:50,cat:"Köpek",icon:"💊"},
  {name:"Bio Pet Active Vitamin Tablet (6 Adet)",price:50,cat:"Köpek",icon:"💊"},
  {name:"Doglife Calcium Tablet (D3) Vitamin",price:50,cat:"Köpek",icon:"💊"},
  {name:"Doglife Multi Vitamin Tablet",price:50,cat:"Köpek",icon:"💊"},
  {name:"Köpek Biotin",price:80,cat:"Köpek",icon:"💊"},
  {name:"Köpek Probiyotik (30 Tablet)",price:250,cat:"Köpek",icon:"💊"},
  {name:"Zonaks Biotin Plus",price:100,cat:"Köpek",icon:"💊"},
  {name:"Zonaks Antisitres Paste",price:90,cat:"Köpek",icon:"💊"},
  {name:"Zonaks 1-10 KG Ense Damlası",price:40,cat:"Köpek",icon:"💧"},
  {name:"Zonaks 10-20 KG Ense Damlası",price:40,cat:"Köpek",icon:"💧"},
  {name:"Zonaks 20-40 KG Ense Damlası",price:40,cat:"Köpek",icon:"💧"},
  {name:"Zonaks Köpük Şampuan Aloe Vera",price:100,cat:"Köpek",icon:"🧴"},
  {name:"Zonaks Köpük Şampuan Çilek",price:100,cat:"Köpek",icon:"🧴"},
  {name:"Zonaks Toz Şampuan",price:80,cat:"Köpek",icon:"🧴"},
  {name:"Jessy Köpek Şampuanı",price:30,cat:"Köpek",icon:"🧴"},
  {name:"Dr Heigel's Süt Tozu 200 GR Köpek",price:55,cat:"Köpek",icon:"🥛"},
  {name:"Dr Heigel's Tüy Bakım Ürünü",price:50,cat:"Köpek",icon:"🧴"},
  {name:"Prozoo Collagen Köpek",price:100,cat:"Köpek",icon:"💊"},
  {name:"Vitali Doğ Vitamin Paste",price:75,cat:"Köpek",icon:"💊"},

  {name:"Daglife Kulak Temizleme Losyonu",price:50,cat:"Köpek",icon:"🧴"},
  {name:"Majo Kedi Köpek Kemirgen Kulak Bakım Losyonu",price:70,cat:"Köpek",icon:"🧴"},
  {name:"Majo Oyun Sprey",price:85,cat:"Köpek",icon:"🧴"},
  {name:"Majo Relax Paste Anti Stres",price:80,cat:"Köpek",icon:"💊"},
  {name:"Majo Steriliset Paste",price:80,cat:"Köpek",icon:"💊"},
  {name:"Keyf Yara Bakım Solüsyonu",price:40,cat:"Köpek",icon:"🧴"},
  {name:"Veturel Yara Bakım Losyonu",price:150,cat:"Köpek",icon:"🧴"},
  {name:"Petzoom Pet Park Yavru Köpek Tuvalet Eğitim Seti",price:250,cat:"Köpek",icon:"🐶"},
  {name:"Prozoo Çiş Eğitim Sprey",price:45,cat:"Köpek",icon:"🧴"},
  {name:"Prozoo Kedi Köpek Göz Losyonu",price:80,cat:"Köpek",icon:"🧴"},


  // ==================== KUŞ ====================

  {name:"10'lu Ballı Yem",price:35,cat:"Kuş",icon:"🦜"},
  {name:"15'li Gaga Taşı",price:50,cat:"Kuş",icon:"🐦"},
  {name:"3'lü Daldarı Kızıl",price:15,cat:"Kuş",icon:"🌾"},
  {name:"100 Seri Kafes Koli 24 Adet",price:4560,cat:"Kuş",icon:"🐦"},
  {name:"200 Seri Kafes Koli 24 Adet",price:5400,cat:"Kuş",icon:"🐦"},
  {name:"300 Seri Boyalı Kafes Koli 15'li",price:4500,cat:"Kuş",icon:"🐦"},
  {name:"300 Seri Gold Kafes Koli 15'li",price:4500,cat:"Kuş",icon:"🐦"},
  {name:"300 Seri Krom Kafes Koli 15'li",price:4500,cat:"Kuş",icon:"🐦"},
  {name:"Jako Kafes Üstten Açılır 65x43x33",price:600,cat:"Kuş",icon:"🐦"},
  {name:"Silindir Kafes 3'lü Set",price:2000,cat:"Kuş",icon:"🐦"},
  {name:"Silindir Kafes Gold 3'lü Set",price:2000,cat:"Kuş",icon:"🐦"},
  {name:"Sultan Papağanı Kafesleri",price:600,cat:"Kuş",icon:"🦜"},

  {name:"Majo Kızıştırıcı Yem",price:18,cat:"Kuş",icon:"🌾"},
  {name:"Majo Muhabbet Yemi 500 GR",price:38,cat:"Kuş",icon:"🌾"},
  {name:"Majo Premium Muhabbet Yemi 400 GR",price:35,cat:"Kuş",icon:"🌾"},
  {name:"Majo Tamamlayıcı Yulaf 400 GR",price:26,cat:"Kuş",icon:"🌾"},
  {name:"Şampiyon Kuş Yemi 400 GR",price:35,cat:"Kuş",icon:"🌾"},
  {name:"Kiloluk Daldarı 20 KG Koli",price:275,cat:"Kuş",icon:"🌾"},

  {name:"Aynalı Salıncak",price:30,cat:"Kuş",icon:"🪶"},
  {name:"Papağan Ahşap Salıncak",price:50,cat:"Kuş",icon:"🪵"},
  {name:"Cam Kuş Oyuncağı",price:25,cat:"Kuş",icon:"🦜"},
  {name:"Renkli Gaga Taşı (18 Adet)",price:100,cat:"Kuş",icon:"🐦"},
  {name:"Muhabbet Kuşu Lux Yemlik",price:12,cat:"Kuş",icon:"🥣"},
  {name:"Muhabbet Kuşu Parmak Suluk",price:9,cat:"Kuş",icon:"💧"},
  {name:"Muhabbet Kuşu Yemlik Kristal",price:10,cat:"Kuş",icon:"🥣"},
  {name:"Muhabbet Paraket Suluk 100 CC",price:10,cat:"Kuş",icon:"💧"},
  {name:"Silo Yemlik",price:45,cat:"Kuş",icon:"🥣"},
  {name:"Kuş Tasması",price:20,cat:"Kuş",icon:"🐦"},
  {name:"Banyoluk",price:25,cat:"Kuş",icon:"💧"},
  {name:"Kuş Banyoluğu",price:25,cat:"Kuş",icon:"💧"},
  {name:"Kanarya Hint Bülbülü Yuva Kılı",price:12,cat:"Kuş",icon:"🐦"},
  {name:"Larc Tül",price:22,cat:"Kuş",icon:"🐦"},
  {name:"M Kafes Tülü",price:22,cat:"Kuş",icon:"🐦"},
  {name:"XL Tül",price:22,cat:"Kuş",icon:"🐦"},
  {name:"Kafes Askısı",price:500,cat:"Kuş",icon:"🐦"},
  {name:"Kafes Sehpası",price:500,cat:"Kuş",icon:"🐦"},
  {name:"Dr Heigel's B Vitamin",price:30,cat:"Kuş",icon:"💊"},
  {name:"Dr Heigel's Bit Pire Tozu",price:40,cat:"Kuş",icon:"💊"},
  {name:"Dr Heigel's Multi Vitamin",price:30,cat:"Kuş",icon:"💊"},
  {name:"Dr Heigel's Soğuk Algınlığı",price:30,cat:"Kuş",icon:"💊"},
  {name:"Dr Heigel's Tüy Bakım Ürünü",price:40,cat:"Kuş",icon:"🧴"},
  {name:"İthal Kalamar Kemiği 10-15 CM",price:15,cat:"Kuş",icon:"🦴"},
  {name:"İthal Kalamar Kemiği 15-20 CM",price:25,cat:"Kuş",icon:"🦴"},
  {name:"İthal Kalamar Gagası 6-10 CM",price:10,cat:"Kuş",icon:"🦴"},
  {name:"Paw Kızıştırıcı Vitamin Damla",price:22,cat:"Kuş",icon:"💧"},
  {name:"Paw Multi Vitamin",price:22,cat:"Kuş",icon:"💊"},
  {name:"Paw Tüy Vitamini",price:22,cat:"Kuş",icon:"💊"},


  // ==================== BALIK / AKVARYUM ====================

  {name:"12'li Akvaryum Dekor",price:290,cat:"Balık",icon:"🐠"},
  {name:"Ağaç Adam Dekor",price:120,cat:"Balık",icon:"🌿"},
  {name:"Ağaç Ev Dekor Orta",price:140,cat:"Balık",icon:"🏠"},
  {name:"Balkabağı Ev Dekor",price:120,cat:"Balık",icon:"🎃"},
  {name:"Batik Gemi",price:75,cat:"Balık",icon:"🚢"},
  {name:"Büyük Dümen Dekor",price:180,cat:"Balık",icon:"⚓"},
  {name:"Büyük Gemi Dekor",price:225,cat:"Balık",icon:"🚢"},
  {name:"Efes Jumbo Boy Sur Dekor",price:225,cat:"Balık",icon:"🏰"},
  {name:"Eski Köprü",price:50,cat:"Balık",icon:"🌉"},
  {name:"Kale Orta Boy Dekor",price:125,cat:"Balık",icon:"🏰"},
  {name:"Korsan Fıçısı Dekor",price:120,cat:"Balık",icon:"🛢️"},
  {name:"Köprü XXL",price:200,cat:"Balık",icon:"🌉"},
  {name:"Kuru Kafa Akvaryum Dekor",price:125,cat:"Balık",icon:"💀"},
  {name:"Kütük Dekor",price:145,cat:"Balık",icon:"🪵"},
  {name:"Mantar Dekor",price:125,cat:"Balık",icon:"🍄"},
  {name:"Merdivenli Köprü XXL",price:200,cat:"Balık",icon:"🌉"},
  {name:"Minyon Ev",price:75,cat:"Balık",icon:"🏠"},
  {name:"Orta Boy Köprü Dekor",price:125,cat:"Balık",icon:"🌉"},
  {name:"Sur Dekor",price:120,cat:"Balık",icon:"🏰"},
  {name:"Timsah Orta Boy Dekor",price:125,cat:"Balık",icon:"🐊"},
  {name:"Yıldızlı Kup Dekor",price:125,cat:"Balık",icon:"⭐"},

  {name:"12 İnç Deniz Kabuğu Sepeti",price:200,cat:"Balık",icon:"🐚"},
  {name:"14 İnç Deniz Kabuğu Sepeti",price:300,cat:"Balık",icon:"🐚"},
  {name:"2 İnç Deniz Kabuğu Sepeti",price:60,cat:"Balık",icon:"🐚"},
  {name:"4 İnç Deniz Kabuğu Sepeti",price:90,cat:"Balık",icon:"🐚"},
  {name:"6 İnç Deniz Kabuğu Sepeti",price:110,cat:"Balık",icon:"🐚"},
  {name:"8 İnç Deniz Kabuğu Sepeti",price:140,cat:"Balık",icon:"🐚"},
  {name:"File Deniz Kabuğu",price:120,cat:"Balık",icon:"🐚"},
  {name:"Deniz Kabuğu 1 KG",price:220,cat:"Balık",icon:"🐚"},
  {name:"Deniz Kabuğu Beyaz 1 KG",price:220,cat:"Balık",icon:"🐚"},
  {name:"Akvaryum Balık Yemi",price:0,cat:"Balık",icon:"🐠"},


  // ==================== KAPLUMBAĞA ====================

  {name:"Kaplumbağa Kabuk Geliştirici",price:120,cat:"Kaplumbağa",icon:"🐢"},
  {name:"Kaplumbağa Amonyak Giderici",price:120,cat:"Kaplumbağa",icon:"🐢"},
  {name:"Kaplumbağa Kabuk Sertleştirici",price:60,cat:"Kaplumbağa",icon:"🐢"},
  {name:"Kaplumbağa Su Düzenleyici",price:120,cat:"Kaplumbağa",icon:"🐢"},
  {name:"Kaplumbağa Yemi",price:40,cat:"Kaplumbağa",icon:"🐢"},


  // ==================== OYUNCAK ====================

  {name:"Horoz Larç",price:45,cat:"Oyuncak",icon:"🐔"},
  {name:"Petzoom Sert Top",price:50,cat:"Oyuncak",icon:"⚽"},
  {name:"Tahta Saplı Olta",price:30,cat:"Oyuncak",icon:"🎣"},
  {name:"Tekerlekli Hacı Yatmaz",price:30,cat:"Oyuncak",icon:"🎾"},
  {name:"Tüylü Zilli Top",price:12,cat:"Oyuncak",icon:"🔔"},
  {name:"3 Katlı Kedi Oyuncağı",price:60,cat:"Oyuncak",icon:"🐱"},


  // ==================== AKSESUAR ====================

  {name:"6'lı Set Kıyafet",price:750,cat:"Aksesuar",icon:"👕"},
  {name:"Eko 6'lı Elbise",price:650,cat:"Aksesuar",icon:"👕"},
  {name:"Kedi Köpek Elbisesi 6'lı Set",price:750,cat:"Aksesuar",icon:"👕"},
  {name:"Taraftar Forma BJK 6'lı Set",price:850,cat:"Aksesuar",icon:"👕"},
  {name:"Taraftar Forma FB 6'lı Set",price:850,cat:"Aksesuar",icon:"👕"},
  {name:"Taraftar Forma GS 6'lı Set",price:850,cat:"Aksesuar",icon:"👕"},

  {name:"Elizabet Yakalık 5 Desen",price:85,cat:"Aksesuar",icon:"🐶"},
  {name:"Kedi Köpek Papyon",price:20,cat:"Aksesuar",icon:"🎀"},
  {name:"Kutulu Papyon",price:25,cat:"Aksesuar",icon:"🎀"},
  {name:"Baskılı Kravat",price:30,cat:"Aksesuar",icon:"👔"},

  {name:"Belden Bağlama Tasma L",price:85,cat:"Aksesuar",icon:"🐕"},
  {name:"Belden Bağlama Tasma M",price:75,cat:"Aksesuar",icon:"🐕"},
  {name:"Belden Bağlama Tasma S",price:65,cat:"Aksesuar",icon:"🐕"},
  {name:"Boğma Zincir Tasma",price:95,cat:"Aksesuar",icon:"🐕"},
  {name:"Boyun Tasma",price:60,cat:"Aksesuar",icon:"🐕"},
  {name:"Boyun Tasma Soft",price:85,cat:"Aksesuar",icon:"🐕"},
  {name:"Çalan Vermez Kedi Köpek Boyun Tasma",price:20,cat:"Aksesuar",icon:"🐕"},
  {name:"Gladyatör Tasma Deri",price:525,cat:"Aksesuar",icon:"🐕"},
  {name:"Kolon Gezdirme",price:30,cat:"Aksesuar",icon:"🐕"},
  {name:"M Zincir Gezdirme",price:80,cat:"Aksesuar",icon:"🐕"},
  {name:"S Gezdirme Zincir",price:70,cat:"Aksesuar",icon:"🐕"},
  {name:"L Zincir Gezdirme",price:95,cat:"Aksesuar",icon:"🐕"},
  {name:"XL Gezdirme Zincir",price:105,cat:"Aksesuar",icon:"🐕"},


  // ==================== TUVALET ====================

  {name:"Elekli Açık Tuvalet",price:120,cat:"Tuvalet",icon:"🧼"},
  {name:"Kapalı Tuvalet",price:275,cat:"Tuvalet",icon:"🧼"},
  {name:"Lux Açık Tuvalet",price:160,cat:"Tuvalet",icon:"🧼"},
  {name:"Lux Kapalı Tuvalet",price:325,cat:"Tuvalet",icon:"🧼"},
  {name:"Yavaş Yeme Mama Kabı",price:75,cat:"Aksesuar",icon:"🥣"},
  {name:"İki Gözlü Mama Kabı",price:35,cat:"Aksesuar",icon:"🥣"},
  {name:"İkili Mama Kabı Silikon",price:160,cat:"Aksesuar",icon:"🥣"},
  {name:"Kauçuk Tabanlı İkili Mama Kabı",price:225,cat:"Aksesuar",icon:"🥣"},
  {name:"Su Matarası",price:100,cat:"Aksesuar",icon:"💧"},
  {name:"Tisert Rezerv Mama Kabı 1.9 Litre",price:90,cat:"Aksesuar",icon:"🥣"},
  {name:"Ars Su Pınarı 1.8 Litre Şeffaf",price:650,cat:"Aksesuar",icon:"💧"},


  // ==================== YATAK ====================

  {name:"3'lü Silinebilir Kumaş Yatak",price:900,cat:"Yatak",icon:"🛏️"},
  {name:"Desenli Silindir Yatak 5'li Set",price:750,cat:"Yatak",icon:"🛏️"},
  {name:"Yataklı Çadır",price:300,cat:"Yatak",icon:"⛺"},


  // ==================== BAKIM ====================

  {name:"Kedi Köpek Bit Tarağı",price:25,cat:"Bakım",icon:"🪮"},
  {name:"Orta Boy Basmalı Tarak",price:45,cat:"Bakım",icon:"🪮"},
  {name:"Büyük Basmalı Tarak",price:75,cat:"Bakım",icon:"🪮"},
  {name:"Pet Burus Tarak",price:40,cat:"Bakım",icon:"🪮"},
  {name:"Zampa Tarak S",price:50,cat:"Bakım",icon:"🪮"},
  {name:"Zampa Tarak M",price:55,cat:"Bakım",icon:"🪮"},
  {name:"Zampa Tarak L",price:60,cat:"Bakım",icon:"🪮"},
  {name:"Halı ve Koltuk Tiftik Toplayıcı",price:20,cat:"Bakım",icon:"🧹"},
  {name:"Koku Giderici Ambiance (15 Adet)",price:175,cat:"Bakım",icon:"🧴"},
  {name:"Koku Giderici Motto (15 Adet)",price:175,cat:"Bakım",icon:"🧴"},
  {name:"Pro-Kitten Süt Tozu",price:45,cat:"Bakım",icon:"🥛"},


  // ==================== DİĞER ====================

  {name:"Avakado",price:20,cat:"Diğer",icon:"🥑"},
  {name:"Ambresia Panc Kuzulu",price:12,cat:"Diğer",icon:"🐾"},
  {name:"Ambresia Panc Somon",price:12,cat:"Diğer",icon:"🐾"},
  {name:"Ampresia Panc Tavuklu",price:12,cat:"Diğer",icon:"🐾"},
  {name:"Amsteria Panc Kitten",price:12,cat:"Diğer",icon:"🐱"}
];


// ============================================================
// SAYFA ELEMANLARI
// ============================================================

const grid = document.getElementById("productGrid");
const search = document.getElementById("search");
const sort = document.getElementById("sort");
const empty = document.getElementById("emptyState");

let selected = "Kedi";
let currentUser = null;
let currentProfile = null;


// ============================================================
// FİYAT FORMATLAMA
// ============================================================

function formatPrice(price){
  if(price === null || price === undefined || price === 0){
    return "Fiyat sorunuz";
  }

  return new Intl.NumberFormat("tr-TR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(price) + " TL";
}


// ============================================================
// ÜRÜNLERİ GÖSTER
// ============================================================

function render(){

  const q = search.value.trim().toLowerCase();

  let list = products.filter(p =>
    (selected === "Tümü" || p.cat === selected) &&
    (!q || p.name.toLowerCase().includes(q))
  );

  if(sort.value === "name"){
    list.sort((a,b) =>
      a.name.localeCompare(b.name,"tr")
    );
  }

  if(sort.value === "category"){
    list.sort((a,b) =>
      a.cat.localeCompare(b.cat,"tr")
    );
  }

  grid.innerHTML = list.map(p => `

    <article class="product">

      <div class="product-img">
        ${p.icon}
      </div>

      <div class="product-body">

        <div class="product-cat">
          ${p.cat}
        </div>

        <h3>
          ${p.name}
        </h3>

        <div class="product-price">
          ${formatPrice(p.price)}
        </div>

      </div>

    </article>

  `).join("");

  empty.classList.toggle(
    "hidden",
    list.length > 0
  );
}


// ============================================================
// KATEGORİLER
// ============================================================

document.querySelectorAll(".category-card").forEach(btn => {

  btn.addEventListener("click", () => {

    document
      .querySelectorAll(".category-card")
      .forEach(x => x.classList.remove("active"));

    btn.classList.add("active");

    selected = btn.dataset.category;

    render();

    document
      .getElementById("urunler")
      .scrollIntoView({
        behavior:"smooth",
        block:"start"
      });

  });

});


// ============================================================
// ARAMA / SIRALAMA
// ============================================================

search.addEventListener("input", render);
sort.addEventListener("change", render);


// ============================================================
// BAYİ MODALI
// ============================================================

const modal = document.getElementById("modal");
const businessField = document.getElementById("businessField");
const title = document.getElementById("modalTitle");
const eyebrow = document.getElementById("modalEyebrow");
const text = document.getElementById("modalText");
const submit = document.getElementById("formSubmit");
const foot = document.getElementById("formFoot");

let signup = false;


function setMessage(message, error=false){

  let el = document.getElementById("authMessage");

  if(!el){

    el = document.createElement("div");

    el.id = "authMessage";

    el.style.cssText =
      "margin:12px 0;padding:10px 12px;border-radius:10px;font-size:14px;line-height:1.4;";

    document
      .getElementById("dealerForm")
      .prepend(el);
  }

  el.textContent = message;

  el.style.background =
    error ? "#fff0f0" : "#eefaf1";

  el.style.color =
    error ? "#a32121" : "#176b39";
}


function openModal(mode=false){

  signup = mode;

  modal.classList.remove("hidden");

  eyebrow.textContent =
    mode ? "BAYİ BAŞVURUSU" : "BAYİ GİRİŞİ";

  title.textContent =
    mode
      ? "Bayi hesabı için başvurun"
      : "Bayi hesabınıza giriş yapın";

  text.textContent =
    mode
      ? "İşletme bilgilerinizi bırakın. Başvurunuz yönetici onayına gönderilir."
      : "Bayi hesabınız varsa giriş yapabilirsiniz.";

  businessField.classList.toggle(
    "hidden",
    !mode
  );

  submit.textContent =
    mode ? "Başvuru Gönder" : "Giriş Yap";

  foot.innerHTML = mode

    ? `Zaten hesabınız var mı?
       <button type="button" id="switchMode">
       Giriş yapın.
       </button>`

    : `Bayi olmak ister misiniz?
       <button type="button" id="switchMode">
       Bayi başvurusu yapın.
       </button>`;

  document
    .getElementById("switchMode")
    .onclick = () => openModal(!signup);

  const msg =
    document.getElementById("authMessage");

  if(msg) msg.remove();
}


// ============================================================
// MODAL BUTONLARI
// ============================================================

document.getElementById("loginBtn").onclick =
  () => openModal(false);

document.getElementById("signupBtn").onclick =
  () => openModal(true);

document.getElementById("ctaSignup").onclick =
  () => openModal(true);

document.getElementById("priceLogin").onclick =
  () => openModal(false);

document.querySelectorAll("[data-close]")
  .forEach(x => {

    x.onclick = () =>
      modal.classList.add("hidden");

  });


// ============================================================
// PROFİL
// ============================================================

async function loadProfile(user){

  currentUser = user;

  if(!user){

    currentProfile = null;

    updateAuthButtons();
    render();

    return;
  }

  const {
    data,
    error
  } = await supabaseClient
    .from("dealer_profiles")
    .select("business_name,approved")
    .eq("user_id",user.id)
    .maybeSingle();

  if(error){

    console.error(error);

    currentProfile = null;

  }else{

    currentProfile = data;

  }

  updateAuthButtons();
  render();
}


// ============================================================
// GİRİŞ BUTONLARI
// ============================================================

function updateAuthButtons(){

  const loginBtn =
    document.getElementById("loginBtn");

  const signupBtn =
    document.getElementById("signupBtn");

  if(currentUser){

    loginBtn.textContent = "Çıkış Yap";

    loginBtn.onclick = async () => {

      await supabaseClient.auth.signOut();

      await loadProfile(null);

      alert("Çıkış yapıldı.");

    };

    signupBtn.textContent =
      currentProfile?.approved
        ? "Onaylı Bayi"
        : "Başvuru Bekliyor";

    signupBtn.onclick = () => {

      if(currentProfile?.approved){

        alert(
          "Hesabınız onaylı. " +
          "Bayi fiyatlarını görüntüleyebilirsiniz."
        );

      }else{

        alert(
          "Bayi başvurunuz henüz yönetici tarafından onaylanmadı."
        );

      }

    };

  }else{

    loginBtn.textContent = "Bayi Girişi";
    signupBtn.textContent = "Bayi Ol";

    loginBtn.onclick =
      () => openModal(false);

    signupBtn.onclick =
      () => openModal(true);

  }

}


// ============================================================
// BAYİ FORMU
// ============================================================

document
  .getElementById("dealerForm")
  .addEventListener("submit", async e => {

    e.preventDefault();

    const email =
      document.getElementById("email")
        .value.trim();

    const password =
      document.getElementById("password")
        .value;

    const business =
      document.getElementById("business")
        .value.trim();

    submit.disabled = true;

    submit.textContent =
      "İşleniyor...";

    try{

      if(signup){

        if(!business){

          setMessage(
            "Lütfen işletme adını yazın.",
            true
          );

          return;
        }

        const {
          data,
          error
        } = await supabaseClient.auth.signUp({

          email,
          password,

          options:{
            data:{
              business_name:business
            }
          }

        });

        if(error) throw error;

        if(data.user){

          setMessage(
            data.session

              ? "Başvurunuz alındı. Yönetici onayından sonra bayi hesabınızı kullanabilirsiniz."

              : "Kayıt oluşturuldu. E-posta adresinizi doğruladıktan sonra başvurunuz yönetici onayına alınacaktır."
          );

          if(data.session)
            await loadProfile(data.user);

        }

      }else{

        const {
          data,
          error
        } = await supabaseClient.auth
          .signInWithPassword({
            email,
            password
          });

        if(error) throw error;

        await loadProfile(data.user);

        if(currentProfile?.approved){

          modal.classList.add("hidden");

          alert(
            "Hoş geldiniz! Bayi hesabınız onaylı."
          );

        }else{

          setMessage(
            "Giriş başarılı. Hesabınız henüz yönetici tarafından onaylanmadı."
          );

        }

      }

    }catch(err){

      setMessage(
        err.message || "Bir hata oluştu.",
        true
      );

    }finally{

      submit.disabled = false;

      submit.textContent =
        signup
          ? "Başvuru Gönder"
          : "Giriş Yap";

    }

  });


// ============================================================
// SUPABASE OTURUM
// ============================================================

(async()=>{

  const {
    data
  } = await supabaseClient.auth.getSession();

  await loadProfile(
    data.session?.user || null
  );

  supabaseClient.auth.onAuthStateChange(
    async (_event, session) => {

      await loadProfile(
        session?.user || null
      );

    }
  );

})();


// ============================================================
// İLK RENDER
// ============================================================

render();
