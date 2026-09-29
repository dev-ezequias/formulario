const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(event) {
    // 1. Impede a página de recarregar
    event.preventDefault();

    // 2. Substitui todo o conteúdo interno do formulário pela mensagem
    formulario.innerHTML = `
        <div class="mensagem-sucesso">
            <h2>Inscrição realizada com sucesso! 🎉</h2>
            <p>Obrigado por se inscrever. Em breve entraremos em contato.</p>
        </div>
    `;
});