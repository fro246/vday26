const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const confettiContainer = document.getElementById("confetti-container");

// Make NO button run away
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// YES button
yesBtn.addEventListener("click", () => {
  screen1.classList.add("hidden");
  screen2.classList.remove("hidden");
  startConfetti();
});

// CONFETTI FUNCTION
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
