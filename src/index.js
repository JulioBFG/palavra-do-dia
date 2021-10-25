function showWord() {
    fetch('https://api.dicionario-aberto.net/random').then((res) => {
        console.log(res);
    });
};

showWord();