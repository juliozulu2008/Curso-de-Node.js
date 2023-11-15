const http = require('http');
const fs = require('fs');
const hostname = "127.0.0.1";
const port = 3000;

//Criando arquivos com Node
fs.writeFile('Julio.txt', 'Em 2024 o Corinthians vai ser campeao', (err) => {
    if (err) throw err;
    console.log("O arquivo foi criado com sucesso!");
})
//Atualizando arquivo apos criação
fs.appendFile('Julio.txt', "\n E eu vou trabalhar muito como Dev Pleno",(err) => {
    if (err) throw err;
    console.log("O arquivo foi atualizado com sucesso!");
})
//Leutura de arquivo
fs.readFile('Julio1.txt', (err, data) => {
    console.log(data.toString());
})
// Renomeado e deletando o arquivo
// fs.unlink('Julio.txt', (err) => {
//     if (err) {
//         console.log(err)
//     }
//     console.log("arquivo foi deletado com sucesso!");
// })
//Renomeando
fs.rename('Julio1.txt', 'julio2.txt', (err) => {
  console.log('Rename complete!');
});

const server = http.createServer((req, res) => {
    fs.readFile('index.html', (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.write('Erro interno no servidor');
            return res.end();
        }

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });
});

server.listen(port, hostname, () => {
    console.log("Server On...");
});