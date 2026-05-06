const usuario = {
    nome: "pelé",
    idade: 18,
    selecao: "Brasil"
}

const mensagemDeBoasVindas1 = "Bem vindo, torcedor brasileiro";

const mensagemDeBoasVindas2 = "Bem vindo, torcedor Argentino";

const mensagemDeBoasVindasGeral = "Bem vindo, amante do esporte";

const mensagemDeEscolha = "clique no setor a qual deseja comprar seu ingresso"

const mensagemFinal = "Divirta-se no maracanã";

usuario.idade < 18
? console.log("Não vendemos ingressospara menores de 18 anos")
: (
    usuario.selecao === "Brasil"
    ?console.log(mensagemDeBoasVindas1)
    : usuario.selecao === "Argentina"
    ? console.log(mensagemDeBoasVindas2)
    : console.log(mensagemDeBoasVindasGeral),

    console.log(mensagemDeEscolha),
    console.log(mensagemFinal)
);