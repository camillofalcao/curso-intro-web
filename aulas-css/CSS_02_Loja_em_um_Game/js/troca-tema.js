function trocaTema(tema) {
    document.body.classList.remove('azul', 'vermelho', 'verde', 'roxo', 'preto');
    document.body.classList.add(tema)
}

function registrarTrocadorTema(tema) {
    const elementoTema = document.getElementById(`trocar-tema-${tema}`);
    console.log(elementoTema);

    if (elementoTema) {
        elementoTema.addEventListener('click', () => trocaTema(tema));
    }
}

registrarTrocadorTema('azul');
registrarTrocadorTema('vermelho');
registrarTrocadorTema('verde');
registrarTrocadorTema('roxo');
registrarTrocadorTema('preto');
