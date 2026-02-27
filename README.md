# Online Shop Website

Jednostavan front-end projekat online prodavnice napravljen pomoću **HTML**, **CSS** i **JavaScript**.

## 📌 Opis projekta

Ovaj sajt simulira osnovni tok kupovine u online prodavnici:
- pregled proizvoda,
- dodavanje artikala u korpu,
- prijava korisnika,
- checkout forma i unos promo koda.

Projekat je edukativnog tipa i fokusiran je na osnovnu strukturu e-commerce sajta bez backend-a i baze podataka.

## 🧩 Stranice

- **`proizvodi.html`** – prikaz proizvoda i dugme **Add to cart**
- **`login.html`** – login forma (demo validacija)
- **`checkout.html`** – forma za dostavu, plaćanje i pregled korpe

## ⚙️ Funkcionalnosti (JavaScript)

- Dodavanje cene proizvoda na ukupan iznos porudžbine
- Prikaz trenutnog iznosa korpe (`openCart`)
- Validacija promo kodova (`SAVE10`, `SAVE15`, `FREESHIP`)
- Demo login provera (`admin / admin`)
- Primer rada sa listama i mapama proizvoda (obračun ukupne vrednosti lagera)

## 🛠️ Tehnologije

- HTML5
- CSS3
- JavaScript (Vanilla JS)

## 📁 Struktura projekta

```text
assignment/
│
├── checkout.html
├── login.html
├── proizvodi.html
├── README.md
│
├── css/
│   ├── checkout.css
│   ├── login.css
│   ├── proizvodi.css
│   └── style.css
│
├── images/
│   └── (slike i ikonice)
│
└── js/
    └── main.js
```

## ▶️ Kako pokrenuti projekat

1. Kloniraj repozitorijum:
   ```bash
   git clone <URL_REPOZITORIJUMA>
   ```
2. Otvori folder projekta.
3. Pokreni `proizvodi.html` u browseru (dupli klik ili Live Server).

## 🔐 Demo kredencijali

Za login test koristi:
- **Username/Email:** `admin`
- **Password:** `admin`

## 📈 Moguća unapređenja

- Povezivanje sa backend API-jem
- Čuvanje korpe u `localStorage`
- Prava autentifikacija korisnika
- Dinamičko učitavanje proizvoda iz baze
- Validacija formi na višem nivou

---

Ako ti se projekat sviđa, slobodno ostavi ⭐ na repozitorijumu.