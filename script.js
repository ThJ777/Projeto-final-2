document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');

    // Toggle do menu de acessibilidade
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');

        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });

    // Ajuste de tamanho da fonte com limites
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    let tamanhoAtualFonte = 1;   // valor inicial (100%)
    const limiteMaximo = 2;      // 200%
    const limiteMinimo = 0.7;    // 70%

    aumentaFonteBotao.addEventListener('click', function(){
        if (tamanhoAtualFonte < limiteMaximo) {
            tamanhoAtualFonte += 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    diminuiFonteBotao.addEventListener('click', function(){
        if (tamanhoAtualFonte > limiteMinimo) {
            tamanhoAtualFonte -= 0.1;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
        }
    });

    // Alternar tema claro/escuro
    const alternaContraste = document.getElementById('alterna-contraste');
    alternaContraste.addEventListener('click', function(){
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        }
    });

});

// ScrollReveal com efeito de origem e distância
ScrollReveal().reveal('#inicio', { delay: 500, origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#biografia', { delay: 500, origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#galeria', { delay: 500, origin: 'right', distance: '50px', duration: 1000 });
ScrollReveal().reveal('#contato', { delay: 500, origin: 'bottom', distance: '50px', duration: 1000 });
