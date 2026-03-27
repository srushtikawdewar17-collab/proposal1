const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');
const questionSection = document.getElementById('question-section');
const successSection = document.getElementById('success-section');

let yesScale = 1;

// Function to move the 'No' button randomly and grow 'Yes'
noBtn.addEventListener('mouseover', () => {
    // 1. Calculate random coordinates
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    // 2. Make the Yes button grow bigger
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
});

// For mobile users who can't "hover"
noBtn.addEventListener('click', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    yesScale += 0.2;
    yesBtn.style.transform = `scale(${yesScale})`;
});

// Action when 'Yes' is clicked
yesBtn.addEventListener('click', () => {
    questionSection.classList.add('hidden');
    successSection.classList.remove('hidden');
    spawnHearts();
});

// Extra effect: Floating hearts after Yes is clicked
function spawnHearts() {
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = "❤️";
        heart.classList.add('floating-heart');
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heart.style.animationDuration = (Math.random() * 2 + 3) + "s";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }, 200);
}
