import { useState } from "react";

const TRANSLATIONS = {
  tr: {
    ask: "Fiyat sorunuz",
    special_badge: "✦ Özel Tabak",
    categories: {
      Kebap: "Kebap",
      Dürüm: "Dürüm",
      "Özel Menü": "Özel Menü",
      Balık: "Balık",
      Salata: "Salata",
      Çorba: "Çorba",
      Meze: "Meze",
      İçecek: "İçecekler",
    },
    footer: "Mersin, Türkiye · Afiyet olsun!",
    currency: "₺",
  },

  en: {
    ask: "Ask us",
    special_badge: "✦ Chef's Special",
    categories: {
      Kebap: "Kebabs",
      Dürüm: "Wraps",
      "Özel Menü": "Special Menu",
      Balık: "Fish",
      Salata: "Salads",
      Çorba: "Soups",
      Meze: "Mezze",
      İçecek: "Drinks",
    },
    footer: "Mersin, Turkey · Enjoy your meal!",
    currency: "₺",
  },

  pl: {
    ask: "Zapytaj",
    special_badge: "✦ Danie Specjalne",
    categories: {
      Kebap: "Kebaby",
      Dürüm: "Wrapy",
      "Özel Menü": "Menu Specjalne",
      Balık: "Ryby",
      Salata: "Sałatki",
      Çorba: "Zupy",
      Meze: "Mezze",
      İçecek: "Napoje",
    },
    footer: "Mersin, Turcja · Smacznego!",
    currency: "₺",
  },

  fr: {
    ask: "Nous consulter",
    special_badge: "✦ Plat Spécial",
    categories: {
      Kebap: "Kebabs",
      Dürüm: "Wraps",
      "Özel Menü": "Menu Spécial",
      Balık: "Poissons",
      Salata: "Salades",
      Çorba: "Soupes",
      Meze: "Mezzés",
      İçecek: "Boissons",
    },
    footer: "Mersin, Turquie · Bon appétit!",
    currency: "₺",
  },

  ar: {
    ask: "اسألنا",
    special_badge: "✦ الطبق الخاص",
    categories: {
      Kebap: "مشاوي",
      Dürüm: "لفائف",
      "Özel Menü": "قائمة خاصة",
      Balık: "أسماك",
      Salata: "سلطات",
      Çorba: "شوربات",
      Meze: "مقبلات",
      İçecek: "مشروبات",
    },
    footer: "مرسين، تركيا · بالهناء والشفاء!",
    currency: "₺",
  },
};

const NAMES = {
  tr: {
    1: "Et Pirzola",
    2: "Şeftali Kebabı",
    3: "Kuşbaşı",
    4: "Patlıcan Kebap",
    5: "Domatesli Kebap",
    6: "Beyti",
    7: "Adana",
    8: "Urfa",
    9: "Kuzu Ciğer",
    10: "Ali Nazik",
    11: "İskender Kebap",
    12: "Tavuk Kanat",
    13: "Tavuk Pirzola",
    14: "Parça Tavuk",
    15: "Tavuk Şiş",
    18: "Hellim Kebap",
    19: "Pastırma Kebap",
    20: "Adana Dürüm",
    21: "Kuşbaşı Dürüm",
    22: "Tavuk Şiş Dürüm",
    23: "Şeftali Dürüm",
    24: "Arasta Ateşi Tabağı",
    25: "Çipura",
    26: "Kalamar",
    27: "Çoban Salata",
    28: "Mevsim Salata",
    29: "Hellim Salata",
    30: "Kelle Paça Çorba",
    31: "Ezogelin Çorba",
    32: "Tavuk Çorba",
    33: "Mercimek Çorba",
    34: "Humus",
    35: "Ezme",
    36: "Patlıcan Ezme",
    37: "Süzme Yoğurt",
    38: "Cola",
    39: "Fanta",
    40: "Seven Up",
    41: "Sıkma Portakal Suyu",
    "42a": "Şalgam",
    "42b": "Ayran",
  },

  ar: {
    1: "ريش لحم",
    2: "كباب شفتالي",
    3: "كباب لحم مكعبات",
    4: "كباب بالباذنجان",
    5: "كباب بالطماطم",
    6: "كباب بيتي",
    7: "كباب أضنة",
    8: "كباب أورفا",
    9: "كبدة خروف",
    10: "علي نازك",
    11: "إسكندر كباب",
    12: "أجنحة دجاج",
    13: "ريش دجاج",
    14: "قطع دجاج",
    15: "شيش دجاج",
    18: "كباب حلوم",
    19: "كباب بسترما",
    20: "لفافة أضنة",
    21: "لفافة لحم",
    22: "لفافة شيش دجاج",
    23: "لفافة شفتالي",
    24: "طبق أراستا أتيشي",
    25: "دنيس",
    26: "كالاماري",
    27: "سلطة الراعي",
    28: "سلطة موسمية",
    29: "سلطة حلوم",
    30: "شوربة كوارع",
    31: "شوربة إيزوجيلين",
    32: "شوربة دجاج",
    33: "شوربة عدس",
    34: "حمص",
    35: "إزمه حارة",
    36: "متبل باذنجان",
    37: "لبنة",
    38: "كولا",
    39: "فانتا",
    40: "سفن أب",
    41: "عصير برتقال طازج",
    "42a": "شلغم",
    "42b": "عيران",
  },
};

const MENU_ITEMS = [
  { key: 1, cat: "Kebap", price: 600 },
  { key: 2, cat: "Kebap", price: 600 },
  { key: 3, cat: "Kebap", price: 500 },
  { key: 4, cat: "Kebap", price: 600 },
  { key: 5, cat: "Kebap", price: 500 },
  { key: 6, cat: "Kebap", price: 500 },
  { key: 7, cat: "Kebap", price: 500 },
  { key: 8, cat: "Kebap", price: 500 },
  { key: 9, cat: "Kebap", price: 500 },
  { key: 10, cat: "Kebap", price: 500 },
  { key: 11, cat: "Kebap", price: 500 },
  { key: 12, cat: "Kebap", price: 450 },
  { key: 13, cat: "Kebap", price: 500 },
  { key: 14, cat: "Kebap", price: 500 },
  { key: 15, cat: "Kebap", price: 450 },
  { key: 18, cat: "Kebap", price: 500 },
  { key: 19, cat: "Kebap", price: 500 },
  { key: 20, cat: "Dürüm", price: 250 },
  { key: 21, cat: "Dürüm", price: 250 },
  { key: 22, cat: "Dürüm", price: 250 },
  { key: 23, cat: "Dürüm", price: 250 },
  { key: 24, cat: "Özel Menü", price: 1500, special: true },
];

const CATEGORIES = [
  "Kebap",
  "Dürüm",
  "Özel Menü",
  "Balık",
  "Salata",
  "Çorba",
  "Meze",
  "İçecek",
];

const LANGS = ["tr", "en", "pl", "fr", "ar"];

const styles = {
  wrap: {
    width: "100%",
    minHeight: "100vh",
    background: "#0F0F0F",
    color: "#fff",
    fontFamily: "sans-serif",
  },

  hero: {
    padding: 30,
    textAlign: "center",
  },

  langBar: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginTop: 20,
    flexWrap: "wrap",
  },

  langBtn: (active) => ({
    padding: "8px 14px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background: active ? "#FF7A1A" : "#222",
    color: "#fff",
    fontWeight: 700,
  }),

  catScroll: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    padding: 16,
  },

  catPill: (active) => ({
    padding: "8px 14px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background: active ? "#FF7A1A" : "#222",
    color: "#fff",
    whiteSpace: "nowrap",
  }),

  sectionHead: {
    padding: "10px 18px",
  },

  sectionTitle: {
    fontSize: 24,
    margin: 0,
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 14px",
    padding: "16px",
    borderRadius: 18,
    background: "#181818",
  },

  itemName: {
    fontSize: 16,
    fontWeight: 700,
  },

  itemSub: {
    fontSize: 12,
    opacity: 0.7,
    marginTop: 4,
  },

  itemPrice: {
    color: "#FF7A1A",
    fontWeight: 700,
    fontSize: 18,
  },

  specialWrap: {
    margin: "14px",
    padding: "20px",
    borderRadius: 20,
    background: "#25180f",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    border: "1px solid #FF7A1A",
  },

  specialBadge: {
    fontSize: 11,
    color: "#FF7A1A",
    marginBottom: 6,
  },

  specialName: {
    fontSize: 20,
    fontWeight: 700,
  },

  specialSub: {
    opacity: 0.7,
    marginTop: 5,
  },

  specialPrice: {
    fontSize: 26,
    color: "#FF7A1A",
    fontWeight: 700,
  },

  footer: {
    textAlign: "center",
    padding: 30,
    opacity: 0.6,
    fontSize: 12,
  },
};

export default function ArastaMenu() {
  const [lang, setLang] = useState("tr");
  const [activeCat, setActiveCat] = useState("Kebap");

  const t = TRANSLATIONS[lang];
  const names = NAMES[lang] || NAMES.tr;
  const namesBase = NAMES.tr;

  const items = MENU_ITEMS.filter((i) => i.cat === activeCat);

  return (
    <div
      style={{
        ...styles.wrap,
        direction: lang === "ar" ? "rtl" : "ltr",
      }}
    >
      {/* HERO */}
      <div style={styles.hero}>
        <img
          src="/arasta.png"
          alt="Arasta"
          style={{ width: 180, height: 180 }}
        />

        <div style={styles.langBar}>
          {LANGS.map((l) => (
            <button
              key={l}
              style={styles.langBtn(lang === l)}
              onClick={() => setLang(l)}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY */}
      <div style={styles.catScroll}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            style={styles.catPill(activeCat === cat)}
            onClick={() => setActiveCat(cat)}
          >
            {t.categories[cat]}
          </button>
        ))}
      </div>

      {/* SECTION TITLE */}
      <div style={styles.sectionHead}>
        <h2 style={styles.sectionTitle}>
          {t.categories[activeCat]}
        </h2>
      </div>

      {/* ITEMS */}
      {items.map((item) => {
        const name = names[item.key];
        const nameTr = namesBase[item.key];

        const showSub =
          lang !== "tr" &&
          lang !== "ar" &&
          nameTr &&
          nameTr !== name;

        if (item.special) {
          return (
            <div
              key={item.key}
              style={{
                ...styles.specialWrap,
                flexDirection:
                  lang === "ar" ? "row-reverse" : "row",
              }}
            >
              <div>
                <div style={styles.specialBadge}>
                  {t.special_badge}
                </div>

                <div style={styles.specialName}>{name}</div>

                {showSub && (
                  <div style={styles.specialSub}>
                    {nameTr}
                  </div>
                )}
              </div>

              <div style={styles.specialPrice}>
                {item.price}
                {t.currency}
              </div>
            </div>
          );
        }

        return (
          <div
            key={item.key}
            style={{
              ...styles.item,
              flexDirection:
                lang === "ar" ? "row-reverse" : "row",
            }}
          >
            <div style={{ flex: 1 }}>
              <div style={styles.itemName}>{name}</div>

              {showSub && (
                <div style={styles.itemSub}>
                  {nameTr}
                </div>
              )}
            </div>

            {item.price === null ? (
              <span>{t.ask}</span>
            ) : (
              <span style={styles.itemPrice}>
                {item.price}
                {t.currency}
              </span>
            )}
          </div>
        );
      })}

      {/* FOOTER */}
      <div style={styles.footer}>
        {t.footer}
      </div>
    </div>
  );
}