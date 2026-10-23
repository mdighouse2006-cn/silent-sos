let step = 0;
let lastTapTime = 0;

function getCorner(x, y) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  const m = 100;

  if (x < m && y < m) return "top-left";
  if (x > w - m && y > h - m) return "bottom-right";

  return "other";
}

// prevent zoom
let lastTouchEnd = 0;
document.addEventListener("touchend", function (e) {
  let now = new Date().getTime();
  if (now - lastTouchEnd <= 300) e.preventDefault();
  lastTouchEnd = now;
}, { passive: false });

// gesture
document.addEventListener("touchstart", function (e) {
  const touch = e.touches[0];
  const corner = getCorner(touch.clientX, touch.clientY);

  let now = new Date().getTime();
  if (now - lastTapTime > 1500) step = 0;

  lastTapTime = now;

  if (step === 0 && corner === "top-left") step = 1;
  else if (step === 1 && corner === "bottom-right") step = 2;
  else if (step === 2 && corner === "top-left") {
    triggerSOS();
    step = 0;
  } else {
    step = 0;
  }
});

function triggerSOS() {

  if (navigator.vibrate) {
    navigator.vibrate(1000);
  }

  navigator.geolocation.getCurrentPosition(
    pos => {
      const lat = pos.coords.latitude;
      const lng = pos.coords.longitude;

      const locationLink = `https://maps.google.com/?q=${lat},${lng}`;

      sendAlertToFirestore(lat, lng);
      sendEmailToContacts(locationLink);
    },
    () => {
      sendAlertToFirestore(0, 0);
    }
  );
}