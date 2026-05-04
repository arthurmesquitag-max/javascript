const usuario = {
    nome: "Pedro",
    idade: 18,
    selecao: "Argentina"
}

const mensagemdeboasvindas1 = "Bem vindo, torcedor Brasileiro";
const mensagemdeboasvindas2 = "Bem vindo, torcedor Argentino";
const mensagemDeBoasVindasGeral = "Bem vindo, amante do esporte";

//estrutura de decisão usando operador ternário encadeado
// ele funcional como if | else | else if

usuario.selecao === "Brasil" && usuario.idade >= 18
    ? console.log(mensagemdeboasvindas1) // se for torcedor do brasil e maior de 18
    : usuario.selecao === "Argentina" && usuario.idade >= 18
        ? console.log(mensagemdeboasvindas2) // se for torcedor argentino e maior de idade
        : usuario.idade >= 18
            ? console.log(mensagemDeBoasVindasGeral)
            : console.log("Não vendemos ingresso para menores de 18 anos.");

const mensagemDeEscolha = "clique no setor a qual deseja comprar seu ingresso";
const mensagemFinal = "divirta-se no maracanã";

console.log(mensagemDeEscolha);
console.log(mensagemFinal);