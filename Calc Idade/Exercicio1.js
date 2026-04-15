const readline = require('readline');

const entrada = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entrada.question('Informe seu nome: ', (nome) => {
    entrada.question('Informe o ano em que nasceu: ', (ano) => {
        console.log(`Seu nome é ${nome}, e sua idade é ${2026 - parseInt(ano)} anos`);
        entrada.close();
    });
});
