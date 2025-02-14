function validarFormulario() {

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || nome.length <= 2) {
        alert('Por favor, insira seu nome.');
        return;
    }

    if (email === '' || !validarEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }

    if (telefone === '' || !validarTelefone(telefone)) {
        alert('Por favor, insira um telefone válido.');
        return;
    }

    if (mensagem === '' || mensagem.length === 0) {
        alert('Por favor, insira uma mensagem.');
        return;
    }
    
    alert('Mensagem enviada com sucesso! Logo entrarei em contato com você.')

    enviarFormulario();
}

function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefone(telefone) {
    const regex = /^\d{10,11}$/; 
    return regex.test(telefone);
}

document.querySelector('form').addEventListener('submit', validarFormulario);