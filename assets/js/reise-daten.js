// ===========================================================
// Reise-Daten für die interaktive Schleusenkräuter-Karte
// ===========================================================
//
// Hier trägst du später eure gesammelten GPS-Koordinaten ein.
// Es gibt drei Kategorien: "anker" (Ankerplätze), "einkauf"
// (Einkäufe/Landgänge) und "schleuse" (Schleusen).
//
// Jeder Eintrag ist ein Objekt mit:
//   lat:   Breitengrad (Zahl, z.B. 53.35123)
//   lng:   Längengrad  (Zahl, z.B. 12.96988)
//   titel: Kurzer Titel, erscheint fett im Popup
//   text:  Beschreibung / Anekdote, erscheint im Popup
//   datum: optional, z.B. "13.07.2026"
//
// Beispiel zum Copy-Pasten:
// { lat: 53.3512, lng: 12.9698, titel: "Schleuse Diemitz", text: "Erste Schleuse der Tour, alles glatt gelaufen.", datum: "13.07.2026" },
//
// Tipp: GPS-Koordinaten bekommt ihr z.B. per Handy (Standort teilen)
// oder aus Google Maps (Rechtsklick auf einen Punkt -> Koordinaten kopieren).

const REISE_START = {
  lat: 53.3512,
  lng: 12.9698,
  titel: "Start: Priepert",
  text: "Ablegehafen der Tour. Von hier aus geht's auf die Mecklenburgische Seenplatte.",
};

const ANKERPLAETZE = [
  // { lat: 53.xxxx, lng: 12.xxxx, titel: "...", text: "...", datum: "..." },
];

const EINKAEUFE = [
  // { lat: 53.xxxx, lng: 12.xxxx, titel: "...", text: "...", datum: "..." },
];

const SCHLEUSEN = [
  // { lat: 53.xxxx, lng: 12.xxxx, titel: "...", text: "...", datum: "..." },
];
