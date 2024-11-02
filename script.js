const gridContainer = document.createElement('div');
gridContainer.className = 'grid-container';
document.body.appendChild(gridContainer);

const boxSize = 40;
const numColumns = Math.ceil(window.innerWidth / boxSize) + 1;
const numRows = Math.ceil(window.innerHeight / boxSize) + 1;
const totalBoxes = numColumns * numRows;

document.addEventListener('DOMContentLoaded', () => {
    loadSign();
})

for (let i = 0; i < totalBoxes - 6; i++) {
    const neonBox = document.createElement('div');
    neonBox.className = 'neon-box';
    gridContainer.appendChild(neonBox);
}

function randomGlow() {
    const boxes = document.querySelectorAll('.neon-box');
    const numToGlow = 2;
    const glowingBoxes = new Set();

    while (glowingBoxes.size < numToGlow) {
        const randomBox = boxes[Math.floor(Math.random() * boxes.length)];
        glowingBoxes.add(randomBox);
    }

    glowingBoxes.forEach(box => box.classList.add('glow'));

    setTimeout(() => {
        glowingBoxes.forEach(box => box.classList.remove('glow'));
    }, 800);
}

const sign = document.querySelector('.sign');

function loadSign() {
    sign.style.top = '350px';
    sign.style.opacity = '1';
}

setInterval(randomGlow, 675);
setInterval(randomGlow, 650);
setInterval(randomGlow, 625);
setInterval(randomGlow, 600);
setInterval(randomGlow, 575);
setInterval(randomGlow, 550);
setInterval(randomGlow, 525);
setInterval(randomGlow, 500);
setInterval(randomGlow, 475);
setInterval(randomGlow, 450);
setInterval(randomGlow, 425);
setInterval(randomGlow, 400);
setInterval(randomGlow, 375);
setInterval(randomGlow, 350);
setInterval(randomGlow, 325);
setInterval(randomGlow, 300);
setInterval(randomGlow, 275);
setInterval(randomGlow, 250);
setInterval(randomGlow, 225);
setInterval(randomGlow, 200);
setInterval(randomGlow, 175);
setInterval(randomGlow, 150);
setInterval(randomGlow, 125);
setInterval(randomGlow, 100);