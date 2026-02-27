let iznos = 0; // u $
function dodajNaIznos (iznosZaDodati) {
    iznos += iznosZaDodati;
    console.log("Trenutni iznos: " + iznos);
}
function openCart () {
    alert("Trenutni iznos porudzbine: $" + iznos.toFixed(2));
}
dodajNaIznos(39.99);
dodajNaIznos(89.99);
dodajNaIznos(29.99);
const PRODUCT1_NAME = "Product 1";
const PRODUCT1_PRICE = 1000;
const PRODUCT1_QTY = 0;

const PRODUCT2_NAME = "Product 2";
const PRODUCT2_PRICE = 2000;
const PRODUCT2_QTY = 0;

const VAT_RATE = 0.2;
const CURRENCY = "EUR";
const USD_PER_EUR = 1.16;

const VALID_COUPONS = ["SAVE10", "SAVE15", "FREESHIP"];
console.log(VALID_COUPONS);

console.log(typeof PRODUCT1_NAME);
console.log(typeof PRODUCT1_PRICE);
console.log(typeof VAT_RATE);
// Normalizuje unos kupona: uklanja razmake sa krajeva i pretvara u velika slova.
function normalizeCoupon (code) {
    return code.trim().toUpperCase();
}
// Proverava da li normalizovan kupon postoji u listi važećih kupona.
function isValidCoupon (code) {
    for (const coupon of VALID_COUPONS) {
        if (coupon === code) {
            return true;
        }
    }

    return false;
}
function applyPromoCode () {
    validateAndNotify();
}
// Čita unos kupona iz forme, normalizuje ga, proverava validnost i prikazuje poruku korisniku.
function validateAndNotify () {
    const promoInput = document.getElementById("promo-input");
    const promoValue = (promoInput && promoInput.value) || "";
    const normalizedCode = normalizeCoupon(promoValue);

    if (!isValidCoupon(normalizedCode)) {
        alert("Nevažeći kupon kod");
    } else if (normalizedCode === "SAVE10") {
        alert("Vaš kupon donosi 10% popusta!");
    } else if (normalizedCode === "SAVE15") {
        alert("Vaš kupon donosi 15% popusta!");
    } else if (normalizedCode === "FREESHIP") {
        alert("Vaš kupon donosi besplatnu dostavu!");
    } else {
        alert("Kupon je važeći.");
    }
}
function login (username, password) {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    const rawUsername = typeof username === "string" ? username : (emailInput && emailInput.value) || "";
    const rawPassword = typeof password === "string" ? password : (passwordInput && passwordInput.value) || "";

    const trimmedUsername = rawUsername.trim();
    const trimmedPassword = rawPassword.trim();

    return trimmedUsername === "admin" && trimmedPassword === "admin";
}

function handleLogin (event) {
    event.preventDefault();
    const isValid = login();
    
    if (isValid) {
        alert("Login uspešan!");
    } else {
        alert("Pogrešno korisničko ime ili lozinka. Pokušajte: admin/admin");
    }
    
    return false;
}
const artikliMap = new Map([
    ["Patike", { price: 100, qty: 12 }],
    ["Majica", { price: 25, qty: 40 }],
    ["Pantalone", { price: 55, qty: 18 }],
    ["Jakna", { price: 120, qty: 9 }],
    ["Kapa", { price: 15, qty: 30 }],
    ["Ranac", { price: 65, qty: 14 }],
    ["Sat", { price: 220, qty: 6 }],
    ["Naočare", { price: 80, qty: 11 }],
    ["Čarape", { price: 8, qty: 75 }],
    ["Rukavice", { price: 20, qty: 22 }]
]);

const allProducts = Array.from(artikliMap.entries()).map(([name, product]) => ({
    name,
    price: product.price,
    qty: product.qty
}));

let totalValue = 0;
for (const proizvod of allProducts) {
    const price = Number(proizvod.price);
    const qty = Number(proizvod.qty);
    totalValue += price * qty;
}
console.log("Ukupna vrednost lagera: " + totalValue + " USD");
let lowStock = [];
for (const proizvod of allProducts) {
    if (proizvod.qty < 10) {
        lowStock.push(proizvod.name);
    }
} console.log("Proizvodi sa malom količinom na lageru: " + lowStock.join(", "));
// Vraća proizvod po imenu (case-insensitive); vraća null ako proizvod ne postoji.
function findProductByName (list, searchName) {
    const normalizedSearchName = searchName.toLowerCase().trim();

    for (const proizvod of list) {
        if (proizvod.name.toLowerCase().trim() === normalizedSearchName) {
            return proizvod;
        }
    }

    return null;
}

console.log(findProductByName(allProducts, " patike "));
console.log(findProductByName(allProducts, "Laptop"));