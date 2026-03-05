var setaEsquerda = window.document.getElementById("seta-esquerda");
var Bruna = window.document.getElementById("Bruna");
var Leonardo = window.document.getElementById("Leonardo");
var Samantha = window.document.getElementById("Samantha");
var setaDireita = window.document.getElementById("seta-direita");

function RolaParaDireita() {
    Bruna.style = "display:none";
    Samantha.style = "display:flex";
    setaEsquerda.style = "display:flex";
    setaDireita.style = "display:none";
}

function RolaParaEsquerda() {
    Bruna.style = "display:flex";
    Samantha.style = "display:none";
    setaEsquerda.style = "display:none";
    setaDireita.style = "display:flex";
}