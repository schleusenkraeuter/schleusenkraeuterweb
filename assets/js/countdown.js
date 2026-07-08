// Countdown bis zur nächsten Bootstour ab Priepert
// Ziel: 13.07.2026, 13:00 Uhr (Europe/Berlin)
// Wenn ihr das nächste Mal ablegt, einfach TARGET_DATE anpassen.

(function () {
  const TARGET_DATE = new Date("2026-07-13T13:00:00+02:00");

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    minutes: document.getElementById("cd-minutes"),
    seconds: document.getElementById("cd-seconds"),
    wrapper: document.getElementById("countdown-timer"),
    expired: document.getElementById("countdown-expired"),
  };

  if (!els.wrapper) return;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  function tick() {
    const now = new Date();
    const diff = TARGET_DATE - now;

    if (diff <= 0) {
      els.wrapper.style.display = "none";
      if (els.expired) {
        els.expired.style.display = "block";
        els.expired.textContent = "⚓ Leinen los! Wir sind auf der Seenplatte – Nachschub gibt's erst nach der Heimkehr.";
      }
      clearInterval(timer);
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    els.days.textContent = pad(days);
    els.hours.textContent = pad(hours);
    els.minutes.textContent = pad(minutes);
    els.seconds.textContent = pad(seconds);
  }

  tick();
  const timer = setInterval(tick, 1000);
})();
