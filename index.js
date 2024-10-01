document.querySelectorAll('.opcao').forEach(button => {
    button.addEventListener('click', function() {
        const destino = this.getAttribute('data-destino');
        alert(`Você escolheu ir para a ${destino}.`);
    });
});