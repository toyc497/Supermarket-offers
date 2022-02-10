/*Resgatando Elementos*/
const backBtn = document.getElementById("back");
const skipBtn = document.getElementById("skip");
const produtoTxt = document.getElementById("produto");
const valorTxt = document.getElementById("valor");
/*.....*/

/* Teste JSON temporario */

const produtos = [
    {
        "produtoItem":"Celular",
        "valorItem":800.00
    },
    {
        "produtoItem":"Hoverboard",
        "valorItem":650.00
    },
    {
        "produtoItem":"Skate",
        "valorItem":500.00
    },
    {
        "produtoItem":"TV",
        "valorItem":1200.00
    },
    {
        "produtoItem":"Mouse",
        "valorItem":30
    }
];

/*...................................*/

let contador = -1;

//Funcao que imprime os dados no HTML
function imprimeDados(item,valor){
    produtoTxt.textContent = item;
    valorTxt.textContent = valor;
}

//Funcao que busca dados JSON referentes ao indice
function buscaDadosJSON(indice){
    const item = produtos[indice].produtoItem;
    const valor = produtos[indice].valorItem;

    imprimeDados(item,valor);
}

function validaQuantidadeItensObjeto(cont){
    const quantidadeItens = produtos.length;
    if(cont >= 0 && cont < quantidadeItens){
        buscaDadosJSON(cont);
    }else{
        contador = 0;
        buscaDadosJSON(contador);
    }
}

backBtn.addEventListener("click", (e) => {
    e.preventDefault();

    contador--;

    validaQuantidadeItensObjeto(contador);
});

skipBtn.addEventListener("click", (e) => {
    e.preventDefault();

    contador++;

    validaQuantidadeItensObjeto(contador);
});