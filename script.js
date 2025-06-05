// Select elements
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function animateUpdate(element, newValue) {
  if (element.textContent !== newValue) {
    element.classList.remove("fade");
    void element.offsetWidth; // Trigger reflow for restarting animation
    element.textContent = newValue;
    element.classList.add("fade");
  }
}

function updateClock() {
  const now = new Date();
  let h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();
  const ampm = h >= 12 ? "PM" : "AM";

  h = h % 12 || 12;

  animateUpdate(hourEl, String(h).padStart(2, "0"));
  animateUpdate(minuteEl, String(m).padStart(2, "0"));
  animateUpdate(secondEl, String(s).padStart(2, "0"));
  animateUpdate(ampmEl, ampm);
}

setInterval(updateClock, 1000);
updateClock();

// List of background image URLs

const backgrounds = [
  // "./assets/bg1.jpeg",
  // "./assets/bg2.jpeg",
  // "./assets/bg3.jpeg",
  // "./assets/bg4.jpeg",
  // "./assets/bg5.jpeg",
  // "./assets/bg6.jpeg",
  // "./assets/bg7.jpeg",
  // "./assets/bg8.jpeg",
  // "./assets/bg9.jpeg",
  // "./assets/bg10.jpeg",
  // "./assets/bg11.jpeg",
  // "./assets/bg12.jpeg",
  // "./assets/bg14.jpeg",
  // "./assets/bg15.jpeg",
  // "./assets/bg16.jpeg",
  // "./assets/bg17.jpeg",
  // "./assets/bg18.jpeg",
  // "./assets/bg19.jpeg",
  // "./assets/bg20.jpeg",
  // "./assets/bg21.jpeg",
];

let index = 0;
const videoEl = document.createElement("video");
videoEl.src = "./assets/vid/clip.mp4";
videoEl.autoplay = true;
videoEl.loop = true;
videoEl.muted = true;
videoEl.style.cssText = `
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  object-fit: cover;
  z-index: -1;
  display: none;
`;

document.body.appendChild(videoEl);

function changeBackground() {
  // Show video on first rotation
  if (index === 0) {
    document.body.style.backgroundImage = "none";
    videoEl.style.display = "block";
  } else {
    document.body.style.backgroundImage = `url('${backgrounds[index - 1]}')`;
    videoEl.style.display = "none";
  }

  index = (index + 1) % (backgrounds.length + 1); // +1 to include video
}

// Initial background
changeBackground();

// Change every 30 seconds (30,000 milliseconds)
setInterval(changeBackground, 10000);
