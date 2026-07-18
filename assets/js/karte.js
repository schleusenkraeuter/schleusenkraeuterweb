// ===========================================================
// Interaktive Reisekarte – Leaflet-Setup
// Trägt Marker aus assets/js/reise-daten.js ein
// ===========================================================

(function () {
  const mapEl = document.getElementById("reise-karte");
  if (!mapEl || typeof L === "undefined") return;

  const map = L.map("reise-karte").setView([REISE_START.lat, REISE_START.lng], 10);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende',
  }).addTo(map);

  function icon(color) {
    return L.divIcon({
      className: "",
      html: `<div style="background:${color};width:18px;height:18px;border-radius:50%;border:3px solid #f5f0e1;box-shadow:0 2px 6px rgba(0,0,0,0.5);"></div>`,
      iconSize: [18, 18],
      iconAnchor: [9, 9],
    });
  }

  const icons = {
    start: icon("#e8b93c"),
    anker: icon("#4f9dff"),
    einkauf: icon("#ffcc4f"),
    schleuse: icon("#ff6b4f"),
  };

  function popupHtml(p) {
    return `<strong>${p.titel}</strong>${p.datum ? ` <em>(${p.datum})</em>` : ""}<br>${p.text || ""}`;
  }

  // Startpunkt
  L.marker([REISE_START.lat, REISE_START.lng], { icon: icons.start })
    .addTo(map)
    .bindPopup(popupHtml(REISE_START))
    .openPopup();

  const allPoints = [[REISE_START.lat, REISE_START.lng]];

  (ANKERPLAETZE || []).forEach((p) => {
    L.marker([p.lat, p.lng], { icon: icons.anker }).addTo(map).bindPopup(popupHtml(p));
    allPoints.push([p.lat, p.lng]);
  });

  (EINKAEUFE || []).forEach((p) => {
    L.marker([p.lat, p.lng], { icon: icons.einkauf }).addTo(map).bindPopup(popupHtml(p));
    allPoints.push([p.lat, p.lng]);
  });

  (SCHLEUSEN || []).forEach((p) => {
    L.marker([p.lat, p.lng], { icon: icons.schleuse }).addTo(map).bindPopup(popupHtml(p));
    allPoints.push([p.lat, p.lng]);
  });

  // Route optisch verbinden, sobald mehr als der Startpunkt vorhanden ist
  if (allPoints.length > 1) {
    L.polyline(allPoints, { color: "#e8b93c", weight: 3, dashArray: "6 8", opacity: 0.8 }).addTo(map);
  }

  // Echte GPS-Aufzeichnung der Tour (aus assets/js/route-track.js), falls vorhanden
  if (typeof ROUTE_TRACK !== "undefined" && ROUTE_TRACK.length) {
    ROUTE_TRACK.forEach((segment) => {
      L.polyline(segment, { color: "#3f8f83", weight: 4, opacity: 0.85, lineJoin: "round" }).addTo(map);
      allPoints.push(...segment);
    });
  }

  if (allPoints.length > 1) {
    map.fitBounds(allPoints, { padding: [40, 40] });
  }
})();
