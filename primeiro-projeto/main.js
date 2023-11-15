const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Qual o seu nome? ", (nome) => {
    console.log("O Nome do usuario é: " + nome);
})

rl.on('close', () => {
    console.log("Adeus! ")
    process.exit(0)
})