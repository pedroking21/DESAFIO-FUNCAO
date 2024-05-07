/*
Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução
(acredito que é possível), utilizar a classe/objeto Date() do typescript
para validação dos dados.
Nome: Pedro Otávio Camolesi
*/
var teclado = require("prompt-sync")();
console.log("Ao digitar a data de hoje, assuma que Janeiro \u00E9 o m\u00EAs 0, Fevereiro o m\u00EAs 1, e assim por diante.");
console.log();
var dia = teclado("Digite o dia atual: ");
var mes = teclado("Digite o m\u00EAs atual: ");
var ano = teclado("Digite o ano atual: ");
dataCorreta(dia, mes, ano);
function dataCorreta(dia, mes, ano) {
    var dataHoje = new Date();
    var hoje = dataHoje.getDate();
    var mesAtual = dataHoje.getMonth();
    var anoAtual = dataHoje.getFullYear();
    if (dia == hoje && mes == mesAtual && ano == anoAtual) {
        console.log("".concat(dataHoje));
    }
    else {
        console.log("A data est\u00E1 incorreta!");
    }
}
