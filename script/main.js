const homeButton = document.getElementById('home-button');
const planosButton = document.getElementById('planos-button');
const sobreButton = document.getElementById('sobre-button');
const contatoButton = document.getElementById('contato-button');


if (homeButton) {
    homeButton.addEventListener('click', () => {
        window.location.href = 'index.html'; 
    });
}

if (planosButton) {
    planosButton.addEventListener('click', () => {
        window.location.href = 'planos.html'; 
    });
}

if (sobreButton) {
    sobreButton.addEventListener('click', () => {
        window.location.href = 'sobre.html'; 
    });
}

if (contatoButton) {
    contatoButton.addEventListener('click', () => {
        window.location.href = 'contato.html'; 
    });
}

const verPlanos = document.getElementById('ver-planos');

if (verPlanos) {
    verPlanos.addEventListener('click', () => {
        window.location.href = 'planos.html'; 
    });
}
