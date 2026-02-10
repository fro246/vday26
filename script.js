const button = document.getElementById("revealBtn");
const message = document.getElementById("hiddenMessage");

button.addEventListener("click", () => {
  message.classList.remove("hidden");
  button.textContent = "💘";
});
