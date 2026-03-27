const question = document.getElementById("question");
const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const bgMusic = document.getElementById("bgMusic");

let noCount = 0;

const messages = [
  "Hey... answer properly 😶",
  "Do you really not feel anything? 💔",
  "Not even a little? 😔",
  "I thought maybe... there was something 🥺",
  "It’s okay... be honest 😞",
  "I won’t force you ❤️",
  "Just tell me the truth..."
];

// 🎵 start bg music
document.body.addEventListener("click", () => {
  bgMusic.play().catch(()=>{});
}, { once: true });

// 😭 NO button logic
noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  if (noCount < messages.length) {
    question.innerText = messages[noCount];
  }

  yesBtn.style.transform = `scale(${1 + noCount * 0.15})`;
});

// 💖 YES click (MAIN LOGIC)
yesBtn.addEventListener("click", () => {

  bgMusic.pause();

  document.querySelector(".buttons").style.display = "none";

  question.innerText = "Listen... 💖";

  const song1 = new Audio("dekhta.mp3");
  const song2 = new Audio("inkem.mp3");

  song1.play().catch(()=>{});

  setTimeout(() => {
    song1.pause();
    song2.play().catch(()=>{});

    const finalText = "Shree... nenu ninu premisthinnanu na tikkoda 💖";
    let i = 0;
    question.innerText = "";

    function typeWriter() {
      if (i < finalText.length) {
        question.innerText += finalText.charAt(i);
        i++;
        setTimeout(typeWriter, 70);
      } else {
        question.classList.add("final-glow");
        createHeartsBurst();
      }
    }

    typeWriter();

  }, 5000);
});

// 💥 heart explosion
function createHeartsBurst() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.innerText = "💖";
    heart.classList.add("burst");

    heart.style.left = "50%";
    heart.style.top = "50%";

    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 200;

    heart.style.setProperty("--x", Math.cos(angle) * distance + "px");
    heart.style.setProperty("--y", Math.sin(angle) * distance + "px");

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 1500);
  }
}
