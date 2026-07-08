# Prompts für echte Produktfotos

Zwei Artikel im Shop haben schon ein echtes Motiv (Crew-Shirt und Aufkleber –
aus euren Original-Dateien). Für die restlichen zehn Fanartikel liefert diese
Datei fertige Prompts, mit denen ihr in einem Bildgenerator (ChatGPT/GPT-4o
mit Bild-Upload, Midjourney, Ideogram o. ä.) realistische Produktfotos erzeugen
könnt.

## So geht's

1. Öffnet ein Tool, das ein Referenzbild akzeptiert (z. B. ChatGPT mit
   Bild-Upload, oder Midjourney mit `--cref`).
2. Ladet die Logo-Datei hoch: `assets/img/logo.png` (das ist euer echtes,
   freigestelltes Logo).
3. Kopiert den passenden Prompt unten, fügt ihn zusammen mit dem hochgeladenen
   Logo ein.
4. Ladet das Ergebnis herunter und speichert es unter dem angegebenen Dateinamen
   in `assets/img/products/`.
5. In `shop.html` bei der entsprechenden Produktkarte die Zeile
   `<span class="porthole"><img src="assets/img/logo.png" ...></span>` durch
   `<img src="assets/img/products/<dateiname>" ...>` ersetzen und die Klasse
   `product-media porthole-media` durch `product-media photo` ändern (siehe
   Vorlage beim Crew-Shirt / Aufkleber in `shop.html`).

Tipp: Die Prompts sind bewusst auf Englisch, weil die meisten Bildmodelle darauf
präziser reagieren. Ein einheitlicher Stil-Rahmen (Studio-Licht, Holzdeck-Look)
sorgt dafür, dass am Ende alle Produktbilder zusammenpassen.

---

### 1. Kapitänsbecher „Poller-Grip“ → `tasse.jpg`
```
Professional studio product photography of a white ceramic mug with a sturdy
handle, photographed at a three-quarter angle. The attached dark green and
gold vintage badge logo (reading "SCHLEUSENKRÄUTER – Der Schluck für
Schleusenzeit") is printed clearly on the front-facing side of the mug. Soft
studio lighting, subtle shadow, light wood dock background, shallow depth of
field, photorealistic, high resolution, no extra text, no watermark.
```

### 2. Deck-Ascher „Standfest“ → `aschenbecher.jpg`
```
Professional studio product photography of a matte black round ceramic
ashtray sitting on a weathered teak boat deck. The attached dark green and
gold vintage badge logo is engraved/printed in the center of the ashtray.
Warm golden-hour side lighting, soft shadow, shallow depth of field,
photorealistic, high resolution, no extra text, no watermark.
```

### 3. Kajütenbettwäsche „Tiefschlaf Backbord“ → `bettwaesche.jpg`
```
Professional product photography of a neatly folded navy blue bedding set
(duvet cover and pillow) inside a cozy boat cabin bunk. The attached dark
green and gold vintage badge logo is printed as a small emblem on the corner
of the pillow. Soft natural window light, cozy atmosphere, photorealistic,
high resolution, no extra text, no watermark.
```

### 4. Schleusenwimpel „Volle Fahrt“ → `flagge.jpg`
```
Professional outdoor photography of a triangular pennant flag mounted on a
short flagpole attached to a boat railing, fabric fluttering gently in the
wind. The flag is dark green fabric with the attached gold vintage badge
logo printed large in the center. Bright daylight, lake and boats softly
blurred in the background, photorealistic, high resolution, no extra text,
no watermark.
```

### 5. Anlege-Flame Feuerzeug → `feuerzeug.jpg`
```
Professional studio product photography of a brushed steel refillable
lighter standing upright on a rustic wooden table. The attached dark green
and gold vintage badge logo is printed small on the front face of the
lighter. Soft studio lighting, subtle reflection, shallow depth of field,
photorealistic, high resolution, no extra text, no watermark.
```

### 6. Stamperl-Set „6 an Deck“ → `glas.jpg`
```
Professional product photography of six small shot glasses arranged in a
row on a wooden crate. Each glass has a small etched version of the attached
dark green and gold vintage badge logo. Warm golden-hour outdoor lighting,
lake in soft focus behind, photorealistic, high resolution, no extra text,
no watermark.
```

### 7. Kapitänsmütze „Blick nach vorn“ → `cap.jpg`
```
Professional studio product photography of a navy blue captain's baseball
cap resting on a coiled nautical rope. The attached dark green and gold
vintage badge logo is embroidered on the front panel of the cap. Soft studio
lighting, subtle shadow, photorealistic, high resolution, no extra text, no
watermark.
```

### 8. Bierdeckel-Set „Poller-Rund“ → `bierdeckel.jpg`
```
Professional product photography of a fanned stack of round cardboard beer
coasters on a wooden table, the top coaster clearly showing the attached
dark green and gold vintage badge logo. Soft warm lighting, shallow depth of
field, photorealistic, high resolution, no extra text, no watermark.
```

### 9. Poller-Anhänger „Fest verzurrt“ → `schluesselanhaenger.jpg`
```
Professional studio product photography of a small leather keychain shaped
like a mooring bollard, with a round metal tag engraved with the attached
dark green and gold vintage badge logo, resting on coiled rope. Soft studio
lighting, shallow depth of field, photorealistic, high resolution, no extra
text, no watermark.
```

### 10. Kühlschrankmagnet „Immer an Bord“ → `magnet.jpg`
```
Professional studio product photography of a round enamel-style fridge
magnet featuring the attached dark green and gold vintage badge logo,
photographed on a brushed steel fridge door surface. Soft reflective
lighting, shallow depth of field, photorealistic, high resolution, no extra
text, no watermark.
```
