const toggleBtn = document.querySelector(".toggle-btn");
const statusText = document.querySelector(".status");

function applyTheme(theme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(theme);
  localStorage.setItem("theme", theme);
  toggleBtn.textContent =
    theme === "dark" ? "☀️ Light Mode aktivieren" : "🌙 Dark Mode aktivieren";
  statusText.textContent =
    theme === "dark" ? "🌙 Dark Mode ist aktiv" : "☀️ Light Mode ist aktiv";
}

function toggleTheme() {
  const current = document.body.classList.contains("dark") ? "dark" : "light";
  applyTheme(current === "dark" ? "light" : "dark");
}

// Initiales Setup: hole gespeichertes Theme oder fallback auf System
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(prefersDark ? "dark" : "light");
}

toggleBtn.addEventListener("click", toggleTheme);
const btnLouis = document.getElementById("louis");
btnLouis.addEventListener("click", function () {
  btnLouis.innerHTML = "gelouist";
  //button.style.color="orange";
  console.log("louis geklickt");
});

const btnLena = document.getElementById("lena");
btnLena.addEventListener("click", (e) => {
  btnLena.innerHTML = "abgeLENAt";
  console.log("lena geklickt");
});

const btnKlick = document.getElementById("clickID");
btnKlick.addEventListener("click", function () {
  btnKlick.innerHTML = "Klick dich selber";
  console.log("Klick Klick");
});

const divVid = document.getElementById("containerID");
divVid.addEventListener("mouseover", function () {
  divVid.innerHTML = "bitte bezahlen sie 99€ um weiter zu lesen";
});

const mausPositions = document.getElementById("screenLog");
mausPositions.addEventListener("mousemove", logKey);

function logKey(e) {
  screenLog.innerText = ` 
    Screen X/Y: ${e.screenX}, ${e.screenY}
    Client X/Y: ${e.clientX}, ${e.clientY}`;
}
