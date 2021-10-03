import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const langFR = {
    lang: "FR",

    // nav
    withDelivery: "Avec livraison",
    inRestaurant: "Au restaurant",
    contact: "Contact",
    coupons: "Bons de réduction",
    currency: "€",

    // header
    delivery: "Livraison",
    orderAndPickup: "Commande et ramassage",
    beingYourOrder: "étant votre commande",
    findRestaurant: "Trouver Restaurant",

    // recommendations
    recommendations: "Recommandations",

    // design
    designAMuffin: "Concevoir un muffin",
    chocolate: "Chocolat",
    honey: "Mon chéri",
    raspberry: "Framboise",
    none: "Rien",

    size: "Taille",
    toppings: "Garnitures",
    fillings: "Garnitures",
    quantity: "Quantité",
    price: "Le prix",
    order: "ordre",
    youCanNotOrderMore: "Vous ne pouvez pas commanderPlus!",

    // subscribe
    title: "Abonnez-vous à notre newsletter",
    subPlaceholder: "Entrez une adresse e-mail valide",
    submit: "Nous faire parvenir",

};

const langDE = {
    lang: "DE",

    // nav
    withDelivery: "Mit Lieferung",
    inRestaurant: "Im Restaurant",
    contact: "Kontakt",
    coupons: "Gutscheine",
    currency: "€",

    // header
    delivery: "Lieferung",
    orderAndPickup: "Bestellung und Abholung",
    beingYourOrder: "Ihre Bestellung sein",
    findRestaurant: "Restaurant finden",

    // recommendations
    recommendations: "Empfehlungen",

    // design
    designAMuffin: "Muffins entwerfen",
    chocolate: "Schokolade",
    honey: "Honig",
    raspberry: "Himbeere",
    none: "Keiner",

    size: "Größe",
    toppings: "Beläge",
    fillings: "Füllungen",
    quantity: "Menge",
    price: "Preis",
    order: "Befehl",
    youCanNotOrderMore: "Sie können nicht mehr bestellen!",

    // subscribe
    title: "Abonniere unseren Newsletter",
    subPlaceholder: "Geben sie eine gültige E-Mail-Adresse an",
    submit: "einreichen",
};

const langGB = {
    lang: "GB",

    // nav
    withDelivery: "With delivery",
    inRestaurant: "In restaurant",
    contact: "Contact",
    coupons: "Coupons",
    currency: "£",

    // header
    delivery: "Delivery",
    orderAndPickup: "Order and pickup",
    beingYourOrder: "Being your order",
    findRestaurant: "Find restaurant",

    // recommendations
    recommendations: "Recommendations",

    // design
    designAMuffin: "Design a Muffin",
    chocolate: "Chocolate",
    honey: "Honey",
    raspberry: "Raspberry",
    none: "None",

    size: "Size",
    toppings: "Toppings",
    fillings: "Fillings",
    quantity: "Quantity",
    price: "Price",
    order: "Order",
    youCanNotOrderMore: "You can not order more!",

    // subscribe
    title: "Subscribe to our Newsletter",
    subPlaceholder: "Enter a valid email address",
    submit: "Submit"
};

const langPL = {
    lang: "PL",

    // nav
    withDelivery: "W dostawie",
    inRestaurant: "W restauracji",
    contact: "Kontakt",    
    coupons: "Kupony",
    currency: "PLN",

    // header
    delivery: "Zamów z dostawą",
    orderAndPickup: "Z odbiorem w restauracji",
    beingYourOrder: "Rozpocznij zamówienie",
    findRestaurant: "Znajdź restauracje",

    // recommendations
    recommendations: "Polecane",

    // design
    designAMuffin: "Zaprojektuj Babeczkę",

    chocolate: "Czekolada",
    honey: "Miód",
    raspberry: "Maliny",
    none: "Nic",

    size: "Rozmiar",
    toppings: "Dodatki",
    fillings: "Nadzienie",
    quantity: "Ilość",
    price: "Cena",
    order: "Zamów",
    youCanNotOrderMore: "Nie możesz zamówić większej ilości!",

    // subscribe
    title: "Zasubskrybuj nasze babeczki!",
    subPlaceholder: "Podaj swój adres email",
    submit: "Zatwierdź",
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            GB: { translation: langGB },
            PL: { translation: langPL },
            DE: { translation: langDE },
            FR: { translation: langFR }
        },
        lng: "FR",
        fallbackLng: "PL",
        interpolation: { escapeValue: false }
    });

export default i18n;