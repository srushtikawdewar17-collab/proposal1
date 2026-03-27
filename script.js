const yesBtn = document.getElementById('yes');
const noBtn = document.getElementById('no');
const bgMusic = document.getElementById('bgMusic');
const questionText = document.getElementById('question');

let yesSize = 18; 

// Start music on first interaction
document.body.addEventListener('click', () => {
    if (bgMusic.paused) bgMusic.play();
}, { once: true });

function moveAndGrow() {
    // 1. Move No Button
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'fixed';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Grow Yes Button
    yesSize += 10;
    yesBtn.style.fontSize = `${yesSize}px`;
    yesBtn.style.padding = `${yesSize/2}px ${yesSize}px`;
}

noBtn.addEventListener('mouseover', moveAndGrow);
noBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    moveAndGrow();
});

yesBtn.addEventListener('click', () => {
    // Change to your romantic line
    questionText.innerHTML = "Nenu ninnu premisthunnanu, Thikkoda! ❤️";
    
    // Switch Song
    bgMusic.src = "inkem.mp3";
    bgMusic.load();
    bgMusic.play();

    // Fade out buttons
    document.querySelector('.buttons').style.opacity = '0';

    // Wait for the song to start before moving to success page
    setTimeout(() => {
        window.location.href = "yes.html";
    }, 2500);
});

// Background Hearts Generator
setInterval(() => {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}, 300);
