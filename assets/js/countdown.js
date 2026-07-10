// Countdown bis zur nächsten Bootstour ab Priepert
// Ziel: 13.07.2026, 13:00 Uhr (Europe/Berlin)
// Vor dem Start zählt die Uhr runter, danach automatisch hoch (Zeit an Bord).
// Wenn ihr das nächste Mal ablegt, einfach TARGET_DATE anpassen.

(function () {
  const TARGET_DATE = new Date("2026-07-13T13:00:00+02:00");

  const els = {
    days: document.getElementById("cd-days"),
    hours: document.getElementById("cd-hours"),
    minutes: document.getElementById("cd-minutes"),
    seconds: document.getElementById("cd-seconds"),
    wrapper: document.getElementById("countdown-timer"),
    heading: document.getElementById("countdown-heading"),
    note: document.getElementById("countdown-note-top"),
  };

  if (!els.wrapper) return;

  function pad(n) {
    return String(n).padStart(2, "0");
  }

  let departed = false;

  function switchToDepartedCopy() {
    if (departed) return;
    departed = true;
    if (els.heading) els.heading.textContent = "Seit dem Ablegen in Priepert";
    if (els.note) els.note.textContent = "Leinen sind los, Poller sind frei – die Crew ist auf großer Fahrt.";
  }

  function tick() {
    const now = new Date();
    let diff = TARGET_DATE - now;

    if (diff <= 0) {
      switchToDepartedCopy();
      diff = now - TARGET_DATE;
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
  setInterval(tick, 1000);
})();
