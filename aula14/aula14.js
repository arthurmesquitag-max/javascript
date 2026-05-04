const usuario = {
    nome: "pedro",
    idade: 30,
    selecao: "Argentina"
}

const mensagemdeboasvindas1 = "Bem vindo, torcedor Brasileiro";
const mensagemdeboasvindas2 = "Bem vindo, torcedor Argentino";

usuario.selecao === "Brasil"
? console.log(mensagemdeboasvindas1)
: console.log(mensagemdeboasvindas2)
// ? > "se a condição for verdadeira, faça isso"
// : > "senão (caso seja falsa), faça aquilo"

const mensagemdeboasvindas = "Clique no setor a qual deseja comprar seu ingresso";
const mensagemFinal = "Diverta-se no maracanã";
console.log(mensagemdeboasvindas);
console.log(mensagemFinal);