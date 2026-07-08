# Schleusenkräuter – Website

Statische Website für die fiktive Marke „Schleusenkräuter – Der Schluck für
Schleusenzeit“. Reine HTML/CSS/JS-Seite, kein Build-Prozess nötig.

## Seiten

- `index.html` – Landingpage mit Countdown, Markengeschichte, Crew und Reise-Teaser
- `shop.html` – Fanshop mit Fanartikeln (alle ausverkauft, inkl. Ausreden)
- `karte.html` – Interaktive Reisekarte (Leaflet), aktuell nur mit Startpunkt Priepert befüllt

## 1. Bildmaterial

Das echte, freigestellte Logo ist bereits eingebaut (`assets/img/logo.png`,
`favicon.png`) und wird in Header, Hero und allen Bullaugen-Rahmen im Shop
verwendet. Zwei Fanartikel zeigen bereits eure echten Original-Motive:

- **Crew-Shirt** → `assets/img/products/tshirt.jpg` (euer "10 Jahre
  Bootstour"-Design)
- **Aufkleber** → `assets/img/products/aufkleber.jpg` (der grüne Sticker-Badge)

Für die restlichen zehn Artikel (Tasse, Aschenbecher, Bettwäsche, Flagge,
Feuerzeug, Glas, Cap, Bierdeckel, Schlüsselanhänger, Magnet) zeigt der Shop
aktuell ein stilisiertes Bullaugen-Icon mit eurem Logo als Übergangslösung.
Fertige Prompts für echte Produktfotos (per ChatGPT/Midjourney o. ä. mit eurem
Logo als Referenzbild) liegen in **`Bildgenerierung-Prompts.md`** – inklusive
genauer Anleitung, wie ihr das Ergebnis danach in `shop.html` einsetzt.

## 2. Auf GitHub veröffentlichen (GitHub Pages)

1. Neues Repository auf GitHub anlegen, z. B. `schleusenkraeuter`.
2. Den kompletten Inhalt dieses Ordners in das Repo pushen (Root-Ebene, nicht
   in einen Unterordner):
   ```bash
   git init
   git add .
   git commit -m "Schleusenkräuter Website"
   git branch -M main
   git remote add origin https://github.com/<dein-user>/schleusenkraeuter.git
   git push -u origin main
   ```
3. Im Repo unter **Settings → Pages**:
   - „Source“ auf **Deploy from a branch** stellen
   - Branch `main`, Ordner `/ (root)` auswählen, speichern

Nach ein bis zwei Minuten ist die Seite unter `https://<dein-user>.github.io/schleusenkraeuter/` erreichbar.

## 3. Eigene Domain verbinden

Eure Domain lautet `schleusenkräuter.de` – da sie einen Umlaut enthält, ist sie
eine **Internationalized Domain Name (IDN)**. GitHub Pages verlangt dafür die
**Punycode-codierte Version**:

```
xn--schleusenkruter-blb.de
```

Vorgehen:

1. Im Repo unter **Settings → Pages → Custom domain** genau diese Punycode-Version
   eintragen: `xn--schleusenkruter-blb.de` (GitHub legt dabei automatisch eine
   `CNAME`-Datei im Repo an – die liegt hier auch schon vorbereitet).
2. Bei eurem Domain-Registrar (da, wo ihr die Domain registriert habt) folgende
   DNS-Einträge für die **Apex-Domain** setzen:

   | Typ | Name | Wert |
   |-----|------|------|
   | A | @ | 185.199.108.153 |
   | A | @ | 185.199.109.153 |
   | A | @ | 185.199.110.153 |
   | A | @ | 185.199.111.153 |

   Optional zusätzlich `AAAA`-Records für IPv6 (siehe [GitHub-Doku](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).
3. DNS-Änderungen können bis zu 24 Stunden dauern.
4. Danach in den Pages-Settings **Enforce HTTPS** aktivieren.

Falls ihr zusätzlich `www.schleusenkräuter.de` nutzen wollt, braucht ihr noch
einen `CNAME`-Record bei eurem Registrar, der auf `<dein-user>.github.io` zeigt
(Details ebenfalls in der GitHub-Doku oben).

## 4. Interaktive Reisekarte befüllen

Sobald ihr unterwegs GPS-Koordinaten sammelt, tragt sie in
`assets/js/reise-daten.js` ein – dort gibt es drei Listen (`ANKERPLAETZE`,
`EINKAEUFE`, `SCHLEUSEN`) mit Beispiel-Format als Kommentar. Die Karte
(`karte.html`) zeichnet automatisch alle Punkte plus eine Route zwischen ihnen.
Kein Code-Wissen nötig, einfach Objekte nach dem Muster ergänzen und pushen.

## 5. Countdown anpassen

Das Zieldatum für den Countdown auf der Startseite steht ganz oben in
`assets/js/countdown.js` (`TARGET_DATE`). Für die nächste Tour einfach das
Datum ändern.

---

Viel Spaß auf der Seenplatte – und denkt dran: Nachschub gibt's erst nach der Rückkehr. 🍾⚓
