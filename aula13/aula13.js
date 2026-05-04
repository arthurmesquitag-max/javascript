//operador ternário: forma curta de escrever if|else para decidir entre dois valores 
//com base em uma condição . estágio de futebol.

const usuario = {
    nome: "pedro",
    idade: 30,
    selecao: "brasil"
}

const mensagemdeboasvindas1 = "Bem vindo, torcedor brasileiro";
const mensagemdeboasvindas2 = "Bem vindo, tocedor Argentino";

if(usuario.selecao === 'brasil'){
    console.log(mensagemdeboasvindas1);
}else{
    console.log(mensagemdeboasvindas2)
}

const mensagemDeEscolha = "clique no setor a qual deseja compra seu ingresso";
const mensagemFinal = "divirta-se no maracanã";