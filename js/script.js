const simBtn = document.getElementById('simBtn');
        const naoBtn = document.getElementById('naoBtn');
        const pergunta = document.getElementById('pergunta');
        const resultado = document.getElementById('resultado');
        const catGif = document.getElementById('catGif');

        simBtn.addEventListener('click', () => {
            pergunta.style.display = 'none';
            resultado.textContent = 'BORA CODAR! 🚀';
            naoBtn.style.display = 'none';
            simBtn.style.display = 'none';
            catGif.style.display = 'block';
        });

        naoBtn.addEventListener('mousemove', (e) => {
            const rect = naoBtn.getBoundingClientRect();
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            if (
                mouseX >= rect.left - 20 &&
                mouseX <= rect.right + 20 &&
                mouseY >= rect.top - 20 &&
                mouseY <= rect.bottom + 20
            ) {
                moveButton();
            }
        });

        function moveButton() {
            const maxX = window.innerWidth - naoBtn.offsetWidth;
            const maxY = window.innerHeight - naoBtn.offsetHeight;

            const randomX = Math.floor(Math.random() * maxX);
            const randomY = Math.floor(Math.random() * maxY);

            naoBtn.style.position = 'fixed';
            naoBtn.style.left = `${randomX}px`;
            naoBtn.style.top = `${randomY}px`;
        }