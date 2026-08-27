document.addEventListener('DOMContentLoaded', function () {
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');

    const temaClaro = document.getElementById('tema-claro');
    const temaEscuro = document.getElementById('tema-escuro');
    const temaContraste = document.getElementById('tema-contraste');

    let tamanhoAtualFonte = 1;

   
    aumentaFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte += 0.1;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

    diminuiFonteBotao.addEventListener('click', function () {
        tamanhoAtualFonte -= 0.1;
        if (tamanhoAtualFonte < 0.8) tamanhoAtualFonte = 0.8;
        document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });

   
    function limparTemas() {
        document.body.classList.remove('tema-claro', 'tema-escuro', 'tema-contraste');
    }

    temaClaro.addEventListener('click', function () {
        limparTemas();
        document.body.classList.add('tema-claro');
    });

    temaEscuro.addEventListener('click', function () {
        limparTemas();
        document.body.classList.add('tema-escuro');
    });

    temaContraste.addEventListener('click', function () {
        limparTemas();
        document.body.classList.add('tema-contraste');
    });

   
    if (typeof ScrollReveal !== 'undefined') {
        ScrollReveal().reveal('#inicio', { delay: 300, distance: '40px', origin: 'bottom' });
        ScrollReveal().reveal('#posts', { delay: 400, distance: '40px', origin: 'left' });
        ScrollReveal().reveal('#contato', { delay: 500, distance: '40px', origin: 'right' });
    }

    // Tema inicial
    document.body.classList.add('tema-claro');
});
