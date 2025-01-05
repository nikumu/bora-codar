const simBtn = document.getElementById('simBtn');
const naoBtn = document.getElementById('naoBtn');
const pergunta = document.getElementById('pergunta');
const resultado = document.getElementById('resultado');
const catGif = document.getElementById('catGif');

simBtn.addEventListener('click', handleSim);
simBtn.addEventListener('touchstart', handleSim);

naoBtn.addEventListener('mousemove', handleNaoMove);
naoBtn.addEventListener('touchmove', handleNaoMove);

function handleSim(e) {
    e.preventDefault();
    pergunta.style.display = 'none';
    resultado.textContent = 'BORA CODAR! 🚀';
    naoBtn.style.display = 'none';
    simBtn.style.display = 'none';
    catGif.style.display = 'block';
}

function handleNaoMove(e) {
    e.preventDefault();
    const rect = naoBtn.getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);

    if (
        clientX >= rect.left - 20 &&
        clientX <= rect.right + 20 &&
        clientY >= rect.top - 20 &&
        clientY <= rect.bottom + 20
    ) {
        moveButton();
    }
}

function moveButton() {
    const maxX = window.innerWidth - naoBtn.offsetWidth;
    const maxY = window.innerHeight - naoBtn.offsetHeight;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    naoBtn.style.position = 'fixed';
    naoBtn.style.left = `${randomX}px`;
    naoBtn.style.top = `${randomY}px`;
}

// Prevenir o comportamento padrão de rolagem em dispositivos móveis
document.body.addEventListener('touchmove', function(e) {
    e.preventDefault();
}, { passive: false });