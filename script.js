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
  "It’s okay... you can be honest 😞",
  "I won’t force you ❤️",
  "Just tell me the truth..."
];

// 🎵 play music
document.body.addEventListener("click", () => {
  bgMusic.currentTime = 20;
  bgMusic.play();
}, { once: true });

// typing effect
const text = "Hey... do you love me? ❤️";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    question.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}
typeEffect();

// NO button
noBtn.addEventListener("mouseover", () => {
  noCount++;

  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 50);

  noBtn.style.position = "absolute";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  setTimeout(() => {
    if (noCount < messages.length) {
      question.innerText = messages[noCount];
    }
  }, 300);

  yesBtn.style.transform = `scale(${1 + noCount * 0.15})`;
});

// YES click
yesBtn.addEventListener("click", () => {
  bgMusic.pause();
  window.location.href = "yes.html";
});