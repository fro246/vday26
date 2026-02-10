const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const confettiContainer = document.getElementById("confetti-container");

/* NO BUTTON RUNS AWAY */
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES BUTTON */
yesBtn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
  startConfetti();
});

/* CONFETTI */
function startConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    const colors = ["#ff4d6d", "#ffb3c1", "#ffffff"];
    confetti.style.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 2 + 2 + "s";

    confettiContainer.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

/* SLIDESHOW */
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 3000);

/* COUNTDOWN TO PARIS */
const countdownEl = document.getElementById("countdown");
const parisImage = document.getElementById("parisImage");
const parisOverlay = document.getElementById("parisOverlay");

// ⚠️ CHANGE YEAR IF NEEDED
const tripDate = new Date("March 13, 2026 00:00:00").getTime();

setInterval(() => {
  const now = new Date().getTime();
  const distance = tripDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  if (days > 0) {
    countdownEl.textContent = `${days} days until Paris 🇫🇷💘`;
  } else {
    countdownEl.textContent = `WE’RE TOGETHER 💕`;
    parisImage.classList.add("reveal");
    parisOverlay.style.display = "none";
  }
}, 1000);
