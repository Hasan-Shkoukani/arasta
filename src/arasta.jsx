import { useState } from "react";

const TRANSLATIONS = {
  tr: {
    ask: "Fiyat sorunuz",
    special_badge: "✦ Özel Tabak",
    categories: {
      Kebap: "Kebap", Dürüm: "Dürüm", "Özel Menü": "Özel Menü",
      Balık: "Balık", Salata: "Salata", Çorba: "Çorba",
      Meze: "Meze", İçecek: "İçecekler",
    },
    footer: "Mersin, Türkiye · Afiyet olsun!",
    currency: "₺",
  },
  en: {
    ask: "Ask us",
    special_badge: "✦ Chef's Special",
    categories: {
      Kebap: "Kebabs", Dürüm: "Wraps", "Özel Menü": "Special Menu",
      Balık: "Fish", Salata: "Salads", Çorba: "Soups",
      Meze: "Mezze", İçecek: "Drinks",
    },
    footer: "Mersin, Turkey · Enjoy your meal!",
    currency: "₺",
  },
  pl: {
    ask: "Zapytaj",
    special_badge: "✦ Danie Specjalne",
    categories: {
      Kebap: "Kebaby", Dürüm: "Wrapy", "Özel Menü": "Menu Specjalne",
      Balık: "Ryby", Salata: "Sałatki", Çorba: "Zupy",
      Meze: "Mezze", İçecek: "Napoje",
    },
    footer: "Mersin, Turcja · Smacznego!",
    currency: "₺",
  },
  fr: {
    ask: "Nous consulter",
    special_badge: "✦ Plat Spécial",
    categories: {
      Kebap: "Kebabs", Dürüm: "Wraps", "Özel Menü": "Menu Spécial",
      Balık: "Poissons", Salata: "Salades", Çorba: "Soupes",
      Meze: "Mezzés", İçecek: "Boissons",
    },
    footer: "Mersin, Turquie · Bon appétit!",
    currency: "₺",
  },
};

const NAMES = {
  tr: {
    1: "Et Pirzola", 2: "Şeftali Kebabı", 3: "Kuşbaşı", 4: "Patlıcan Kebap",
    5: "Domatesli Kebap", 6: "Beyti", 7: "Adana", 8: "Urfa", 9: "Kuzu Ciğer",
    10: "Ali Nazik", 11: "İskender Kebap", 12: "Tavuk Kanat", 13: "Tavuk Pirzola",
    14: "Parça Tavuk", 15: "Tavuk Şiş", 18: "Hellim Kebap", 19: "Pastırma Kebap",
    20: "Adana Dürüm", 21: "Kuşbaşı Dürüm", 22: "Tavuk Şiş Dürüm", 23: "Şeftali Dürüm",
    24: "Arasta Ateşi Tabağı", 25: "Çipura", 26: "Kalamar", 27: "Çoban Salata",
    28: "Mevsim Salata", 29: "Hellim Salata", 30: "Kelle Paça Çorba", 31: "Ezogelin Çorba",
    32: "Tavuk Çorba", 33: "Mercimek Çorba", 34: "Humus", 35: "Ezme",
    36: "Patlıcan Ezme", 37: "Süzme Yoğurt", 38: "Cola", 39: "Fanta",
    40: "Seven Up", 41: "Sıkma Portakal Suyu", "42a": "Şalgam", "42b": "Ayran",
  },
  en: {
    1: "Lamb Chops", 2: "Şeftali Kebab", 3: "Diced Lamb Kebab", 4: "Eggplant Kebab",
    5: "Tomato Kebab", 6: "Beyti Kebab", 7: "Adana Kebab", 8: "Urfa Kebab",
    9: "Lamb Liver", 10: "Ali Nazik Kebab", 11: "Iskender Kebab", 12: "Chicken Wings",
    13: "Chicken Chops", 14: "Chicken Pieces", 15: "Chicken Shish", 18: "Halloumi Kebab",
    19: "Pastrami Kebab", 20: "Adana Wrap", 21: "Diced Lamb Wrap", 22: "Chicken Shish Wrap",
    23: "Şeftali Wrap", 24: "Arasta Fire Platter", 25: "Sea Bream", 26: "Calamari",
    27: "Shepherd's Salad", 28: "Seasonal Salad", 29: "Halloumi Salad",
    30: "Head & Trotter Soup", 31: "Ezogelin Soup", 32: "Chicken Soup", 33: "Lentil Soup",
    34: "Hummus", 35: "Spicy Tomato Dip", 36: "Mashed Eggplant", 37: "Strained Yogurt",
    38: "Cola", 39: "Fanta", 40: "Seven Up", 41: "Fresh Orange Juice",
    "42a": "Turnip Juice", "42b": "Ayran",
  },
  pl: {
    1: "Kotlety Jagnięce", 2: "Kebab Şeftali", 3: "Kebab z Jagnięciny", 4: "Kebab z Bakłażanem",
    5: "Kebab z Pomidorami", 6: "Beyti Kebab", 7: "Kebab Adana", 8: "Kebab Urfa",
    9: "Wątróbka Jagnięca", 10: "Ali Nazik Kebab", 11: "Kebab Iskender",
    12: "Skrzydełka z Kurczaka", 13: "Kotlety z Kurczaka", 14: "Kawałki Kurczaka",
    15: "Szaszłyk z Kurczaka", 18: "Kebab Halloumi", 19: "Kebab Pastırma",
    20: "Wrap Adana", 21: "Wrap z Jagnięciny", 22: "Wrap Szaszłyk z Kurczaka",
    23: "Wrap Şeftali", 24: "Półmisek Ognia Arasta", 25: "Dorada", 26: "Kalmary",
    27: "Sałatka Pasterska", 28: "Sałatka Sezonowa", 29: "Sałatka Halloumi",
    30: "Zupa z Głowizny", 31: "Zupa Ezogelin", 32: "Zupa Drobiowa", 33: "Zupa z Soczewicy",
    34: "Hummus", 35: "Pikantna Pasta Pomidorowa", 36: "Puree z Bakłażana",
    37: "Jogurt Grecki", 38: "Cola", 39: "Fanta", 40: "Seven Up",
    41: "Świeżo Wyciskany Sok Pomarańczowy", "42a": "Sok z Rzepy", "42b": "Ayran",
  },
  fr: {
    1: "Côtelettes d'Agneau", 2: "Kebab Şeftali", 3: "Kebab d'Agneau Émincé",
    4: "Kebab aux Aubergines", 5: "Kebab aux Tomates", 6: "Beyti Kebab",
    7: "Kebab Adana", 8: "Kebab Urfa", 9: "Foie d'Agneau", 10: "Ali Nazik Kebab",
    11: "Kebab Iskender", 12: "Ailes de Poulet", 13: "Côtelettes de Poulet",
    14: "Morceaux de Poulet", 15: "Brochette de Poulet", 18: "Kebab Halloumi",
    19: "Kebab Pastırma", 20: "Wrap Adana", 21: "Wrap d'Agneau",
    22: "Wrap Brochette Poulet", 23: "Wrap Şeftali", 24: "Plateau Feu Arasta",
    25: "Daurade", 26: "Calmars", 27: "Salade du Berger", 28: "Salade de Saison",
    29: "Salade Halloumi", 30: "Soupe Tête et Pieds", 31: "Soupe Ezogelin",
    32: "Soupe de Poulet", 33: "Soupe de Lentilles", 34: "Houmous",
    35: "Purée de Tomates Épicée", 36: "Caviar d'Aubergine", 37: "Yaourt Égoutté",
    38: "Cola", 39: "Fanta", 40: "Seven Up", 41: "Jus d'Orange Frais",
    "42a": "Jus de Navet", "42b": "Ayran",
  },
};

const MENU_ITEMS = [
  { key: 1,    cat: "Kebap",     price: 600 },
  { key: 2,    cat: "Kebap",     price: 600 },
  { key: 3,    cat: "Kebap",     price: 500 },
  { key: 4,    cat: "Kebap",     price: 600 },
  { key: 5,    cat: "Kebap",     price: 500 },
  { key: 6,    cat: "Kebap",     price: 500 },
  { key: 7,    cat: "Kebap",     price: 500 },
  { key: 8,    cat: "Kebap",     price: 500 },
  { key: 9,    cat: "Kebap",     price: 500 },
  { key: 10,   cat: "Kebap",     price: 500 },
  { key: 11,   cat: "Kebap",     price: 500 },
  { key: 12,   cat: "Kebap",     price: 450 },
  { key: 13,   cat: "Kebap",     price: 500 },
  { key: 14,   cat: "Kebap",     price: 500 },
  { key: 15,   cat: "Kebap",     price: 450 },
  { key: 18,   cat: "Kebap",     price: 500 },
  { key: 19,   cat: "Kebap",     price: 500 },
  { key: 20,   cat: "Dürüm",     price: 250 },
  { key: 21,   cat: "Dürüm",     price: 250 },
  { key: 22,   cat: "Dürüm",     price: 250 },
  { key: 23,   cat: "Dürüm",     price: 250 },
  { key: 24,   cat: "Özel Menü", price: 1500, special: true },
  { key: 25,   cat: "Balık",     price: null },
  { key: 26,   cat: "Balık",     price: null },
  { key: 27,   cat: "Salata",    price: 200 },
  { key: 28,   cat: "Salata",    price: 200 },
  { key: 29,   cat: "Salata",    price: 250 },
  { key: 30,   cat: "Çorba",     price: 250 },
  { key: 31,   cat: "Çorba",     price: 200 },
  { key: 32,   cat: "Çorba",     price: 200 },
  { key: 33,   cat: "Çorba",     price: 200 },
  { key: 34,   cat: "Meze",      price: 100 },
  { key: 35,   cat: "Meze",      price: 100 },
  { key: 36,   cat: "Meze",      price: 100 },
  { key: 37,   cat: "Meze",      price: 100 },
  { key: "42a",cat: "İçecek",    price: 60 },
  { key: "42b",cat: "İçecek",    price: 30 },
  { key: 38,   cat: "İçecek",    price: 60 },
  { key: 39,   cat: "İçecek",    price: 60 },
  { key: 40,   cat: "İçecek",    price: 60 },
  { key: 41,   cat: "İçecek",    price: 100 },
];

const CATEGORIES = ["Kebap", "Dürüm", "Özel Menü", "Balık", "Salata", "Çorba", "Meze", "İçecek"];
const LANGS = ["tr", "en", "pl", "fr"];

const styles = {
  wrap: {
  width: "100%",
  maxWidth: "100%",
  minWidth: 0,
  overflowX: "hidden",
  margin: 0,
  padding: 0,
  minHeight: "100vh",
  boxSizing: "border-box",
  fontFamily: "'Inter', 'Segoe UI', sans-serif",
  background: "#0F0F0F",
  color: "#F5F5F5",
},

  /* HERO */
  hero: {
    background: "linear-gradient(180deg, #161616 0%, #0F0F0F 100%)",
    padding: "34px 22px 24px",
    position: "relative",
    overflow: "hidden",
    borderBottom: "1px solid rgba(255,120,40,0.15)",
  },

  heroBg: {
    position: "absolute",
    inset: 0,
    background:
      "radial-gradient(circle at top right, rgba(255,90,0,0.15), transparent 40%), radial-gradient(circle at bottom left, rgba(255,40,0,0.08), transparent 45%)",
  },

  logoWrap: {
    position: "relative",
    textAlign: "center",
    zIndex: 2,
  },

  logoText: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 34,
    color: "#fff",
    letterSpacing: 1,
    margin: 0,
    fontWeight: 700,
  },

  logoSub: {
    display: "block",
    marginTop: 6,
    color: "#FF7A1A",
    fontSize: 11,
    letterSpacing: 5,
    textTransform: "uppercase",
    fontWeight: 600,
  },

  /* LANG */
  langBar: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: 18,
    position: "relative",
    zIndex: 2,
  },

  langBtn: (active) => ({
    background: active
      ? "linear-gradient(135deg,#FF5A1F,#FF8A1F)"
      : "rgba(255,255,255,0.05)",
    border: active
      ? "1px solid rgba(255,138,31,0.8)"
      : "1px solid rgba(255,255,255,0.08)",
    color: active ? "#fff" : "rgba(255,255,255,0.65)",
    fontSize: 11,
    padding: "6px 13px",
    borderRadius: 999,
    cursor: "pointer",
    fontWeight: 700,
    letterSpacing: 0.8,
    transition: "all 0.2s ease",
    backdropFilter: "blur(8px)",
  }),

  /* CATEGORY BAR */
  catScroll: {
    display: "flex",
    gap: 10,
    overflowX: "auto",
    padding: "16px",
    scrollbarWidth: "none",
    background: "#121212",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },

  catPill: (active) => ({
    whiteSpace: "nowrap",
    padding: "8px 16px",
    borderRadius: 999,
    fontSize: 12,
    fontWeight: 700,
    cursor: "pointer",
    border: active
      ? "1px solid #FF6A1A"
      : "1px solid rgba(255,255,255,0.08)",
    background: active
      ? "linear-gradient(135deg,#FF5A1F,#FF8A1F)"
      : "#181818",
    color: active ? "#fff" : "#BDBDBD",
    transition: "all 0.2s ease",
    letterSpacing: 0.4,
    boxShadow: active
      ? "0 6px 18px rgba(255,90,31,0.25)"
      : "none",
  }),

  /* SECTION */
  sectionHead: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    padding: "24px 18px 14px",
  },

  sectionTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 22,
    color: "#fff",
    margin: 0,
    letterSpacing: 0.5,
  },

  divider: {
    flex: 1,
    height: 1,
    background:
      "linear-gradient(to right, rgba(255,106,26,0.5), transparent)",
  },

  /* ITEMS */
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 18px",
    margin: "0 12px 10px",
    borderRadius: 18,
    background: "#181818",
    border: "1px solid rgba(255,255,255,0.04)",
    transition: "all 0.2s ease",
    boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
  },

  itemName: {
    fontSize: 15,
    fontWeight: 700,
    color: "#F3F3F3",
    lineHeight: 1.3,
  },

  itemSub: {
    fontSize: 12,
    color: "#8E8E8E",
    marginTop: 4,
  },

  itemPrice: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 18,
    fontWeight: 700,
    color: "#FF7A1A",
    whiteSpace: "nowrap",
    marginLeft: 14,
  },

  itemPriceAsk: {
    fontSize: 12,
    color: "#A0A0A0",
    whiteSpace: "nowrap",
    marginLeft: 12,
    fontStyle: "italic",
  },

  /* SPECIAL */
  specialWrap: {
    margin: "12px 14px",
    borderRadius: 22,
    padding: "18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background:
      "linear-gradient(135deg, rgba(255,90,31,0.15), rgba(255,140,40,0.08))",
    border: "1px solid rgba(255,122,26,0.3)",
    boxShadow: "0 8px 24px rgba(255,90,31,0.12)",
  },

  specialBadge: {
    fontSize: 10,
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "#FF9A3D",
    fontWeight: 700,
    marginBottom: 5,
  },

  specialName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 18,
    color: "#fff",
  },

  specialSub: {
    fontSize: 12,
    color: "#B8B8B8",
    marginTop: 4,
  },

  specialPrice: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 24,
    fontWeight: 700,
    color: "#FF9A3D",
  },

  /* FOOTER */
  footer: {
    textAlign: "center",
    padding: "28px 16px",
    fontSize: 11,
    color: "#777",
    letterSpacing: 1,
    marginTop: 16,
  },
};

export default function ArastaMenu() {
  const [lang, setLang] = useState("tr");
  const [activeCat, setActiveCat] = useState("Kebap");

  const t = TRANSLATIONS[lang];
  const names = NAMES[lang];
  const namesBase = NAMES["tr"];
  const items = MENU_ITEMS.filter((i) => i.cat === activeCat);

  return (
    
    <div style={styles.wrap}>
      {/* Hero */}
      <div style={styles.hero}>
        <div style={styles.heroBg} />
        <div style={styles.logoWrap}>
          <p style={styles.logoText}>
            Arasta
            <span style={styles.logoSub}>Mangal &amp; Kebap</span>
          </p>
        </div>
        <div style={styles.langBar}>
          {LANGS.map((l) => (
            <button key={l} style={styles.langBtn(lang === l)} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Category tabs */}
      <div style={styles.catScroll}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            style={styles.catPill(activeCat === cat)}
            onClick={() => setActiveCat(cat)}
          >
            {t.categories[cat] || cat}
          </button>
        ))}
      </div>

      {/* Section header */}
      <div style={styles.sectionHead}>
        <h2 style={styles.sectionTitle}>{t.categories[activeCat] || activeCat}</h2>
        <div style={styles.divider} />
      </div>

      {/* Menu items */}
      {items.map((item) => {
        const name = names[item.key] || "";
        const nameTr = namesBase[item.key] || "";
        const showSub = lang !== "tr" && nameTr && nameTr !== name;

        if (item.special) {
          return (
            <div key={item.key} style={styles.specialWrap}>
              <div>
                <div style={styles.specialBadge}>{t.special_badge}</div>
                <div style={styles.specialName}>{name}</div>
                {showSub && <div style={styles.specialSub}>{nameTr}</div>}
              </div>
              <div style={styles.specialPrice}>
                {item.price}{t.currency}
              </div>
            </div>
          );
        }

        return (
          <div key={item.key} style={styles.item}>
            <div style={{ flex: 1 }}>
              <div style={styles.itemName}>{name}</div>
              {showSub && <div style={styles.itemSub}>{nameTr}</div>}
            </div>
            {item.price === null ? (
              <span style={styles.itemPriceAsk}>{t.ask}</span>
            ) : (
              <span style={styles.itemPrice}>{item.price}{t.currency}</span>
            )}
          </div>
        );
      })}

      {/* Footer */}
      <div style={styles.footer}>{t.footer}</div>
    </div>
  );
}