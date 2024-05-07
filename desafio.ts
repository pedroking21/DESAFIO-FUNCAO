/*
Crie uma função que ao receber o dia, mês e ano verifica se está correta
retornando a data completa, caso não seja possível pense em uma solução
(acredito que é possível), utilizar a classe/objeto Date() do typescript 
para validação dos dados.
Nome: Pedro Otávio Camolesi
*/

let teclado = require(`prompt-sync`)();

console.log(`Ao digitar a data de hoje, assuma que Janeiro é o mês 0, Fevereiro o mês 1, e assim por diante.`);
console.log();

let dia: number = teclado(`Digite o dia atual: `);
let mes: number = teclado(`Digite o mês atual: `);
let ano: number = teclado(`Digite o ano atual: `);

dataCorreta(dia,mes,ano);

function dataCorreta(dia:number, mes:number, ano:number): void{
    const dataHoje = new Date();
    
    const hoje:number = dataHoje.getDate();
    const mesAtual:number = dataHoje.getMonth();
    const anoAtual:number = dataHoje.getFullYear();

    if (dia == hoje && mes == mesAtual && ano == anoAtual){
        console.log(`${dataHoje}`);
    }
    else{
        console.log(`A data está incorreta!`);
    }
}