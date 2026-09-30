const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    
    event.preventDefault();
    formulario.innerHTML = `
        <div class="mensagem-sucesso">
            <h2>Inscrição realizada com sucesso! 🎉</h2>
            <p>Obrigado por se inscrever. Em breve entraremos em contato.</p>
        </div>
    `;
});