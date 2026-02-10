const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const confettiContainer = document.getElementById("confetti-container");

/* NO BUTTON ESCAPES */
noBtn.addEventListener("touchstart", moveNo);
noBtn.addEventListener("mouseover", moveNo);

function moveNo() {
  const x = Math.random() * 150 - 75;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
  startConfetti();
});

/* CONFETTI */
function startConfetti() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.backgroundColor =
      ["#ff4d6d", "#ffb3c1", "#ffffff"][Math.floor(Math.random() * 3)];
    c.style.left = Math.random() * 100 + "vw";
    c.style.animationDuration = Math.random() * 2 + 2 + "s";
    confettiContainer.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

/* SLIDESHOW */
const slides = document.querySelectorAll(".slide");
let slideIndex = 0;

setInterval(() => {
  slides.forEach(s => s.classList.remove("active"));
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3000);

/* COUNTDOWN TO MARCH 13, 2026 */
const countdownEl = document.getElementById("countdown");
const parisImage = document.getElementById("parisImage");
const parisOverlay = document.getElementById("parisOverlay");

const tripDate = new Date("2026-03-13T00:00:00").getTime();

setInterval(() => {
  const now = Date.now();
  const diff = tripDate - now;
  const days = Math.ceil(diff / (1000 * 60 * 60 * 24));

  if (days > 0) {
    countdownEl.textContent = `${days} days until Paris 🇫🇷💘`;
  } else {
    countdownEl.textContent = `WE’RE TOGETHER 💕`;
    parisImage.classList.add("reveal");
    parisOverlay.style.display = "none";
  }
}, 1000);

