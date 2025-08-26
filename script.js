// 🎈 Balloon Generator
const balloonContainer = document.getElementById("balloons");
const colors = ["#ff4e88", "#ff6f61", "#ffb347", "#6a5acd", "#00c9a7", "#42a5f5", "#ab47bc"];

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");

  // Random color
  balloon.style.background = colors[Math.floor(Math.random() * colors.length)];

  // Random position
  balloon.style.left = Math.random() * 100 + "vw";

  // Random speed
  balloon.style.animationDuration = 6 + Math.random() * 5 + "s";

  balloonContainer.appendChild(balloon);

  // Remove after float
  setTimeout(() => balloon.remove(), 11000);
}

// Zyada balloons banane ke liye interval chhota rakha
setInterval(createBalloon, 500);

// 🎶 Music Controls
const song = document.getElementById("birthdaySong");
const btn = document.getElementById("unmuteBtn");

btn.addEventListener("click", () => {
  song.muted = false;
  song.play();
  btn.innerText = "🎵";
});

