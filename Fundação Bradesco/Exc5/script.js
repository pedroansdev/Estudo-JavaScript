/* Declaração de variáveis */

var hrTrab; // Horas trabalhadas
var vlHora; // Valor das horas trabalhadas
var dcInss; // Desconto do INSS
var toDesc; // Total de descontos
var slBrut; // Salário bruto
var slLiq; // Salário líquido

/* Variáveis para utilização do InnerText para poder mostrar os dados no html */
var h3hrTrab;
var h3vlHora;
var h3dcInss;
var h3toDesc;
var h3slBrut;
var h3slLiq;

function calcular(){
    /* Definição de valores das variáveis primárias */
    hrTrab = document.salario.horasTrabalhadas.value;
    vlHora = document.salario.valorHora.value;
    dcInss = document.salario.desconto.value;
    
    /* Definição de valores das variáveis de InnerText */
    h3hrTrab = document.querySelector("#hrTrab");
    h3vlHora = document.querySelector("#vlHora");
    h3dcInss = document.querySelector("#dcInss");
    h3toDesc = document.querySelector("#toDesc");
    h3slBrut = document.querySelector("#slBrut");
    h3slLiq = document.querySelector("#slLiq");

    /* Execução do cálculo do salário líquido */
    slBrut = parseFloat(hrTrab) * parseFloat(vlHora);
    toDesc = (dcInss/100) * slBrut;
    slLiq = slBrut - toDesc;

    /* Saídas por consistência de valores */
    h3hrTrab.innerText = 'Quantidade de horas trabalhadas (entre 135 e 180): ' + hrTrab;
    if(hrTrab > 180){
        window.alert('Valor máximo EXCEDIDO! (Máximo: 180)');
    }
    if(hrTrab < 135){
        window.alert('Valor mínimo INVÁLIDO! (Mínimo: 135)')
    }

    h3vlHora.innerText = 'Valor da hora trabalhada (entre 25 e 50): ' + vlHora;
    if(vlHora > 50){
        window.alert('Valor máximo EXCEDIDO! (Máximo: 50)');
    }
    if(vlHora < 35){
        window.alert('Valor mínimo INVÁLIDO! (Mínimo: 35)');
    }

    h3dcInss.innerText = 'Valor de desconto do INSS: ' + dcInss + '%';
    if(dcInss > 15){
        window.alert('Valor máximo EXCEDIDO! (Máximo: 15)');
    }
    if(dcInss < 5){
        window.alert('Valor mínimo INVÁLIDO! (Mínimo: 5)');
    }

    h3slBrut.innerText = 'Salário bruto: R$' + slBrut;
    h3toDesc.innerText = 'Total de descontos: R$' + toDesc;
    h3slLiq.innerText = 'Salário líquido: R$' + slLiq;

    /* Saídas por aninhamento de IFs */

    if(slLiq > 10500){
        window.alert('Salário Elevado! (10500+)');
    }
    else{
        if(slLiq > 6000){
            window.alert('Salário Satisfatório! (6000 - 10500)');
        }
        else{
            if(slLiq > 3000){
                window.alert('Salário Moderado! (3000 - 6000)');
            }
            else{
                window.alert('Salário Insatisfatório! (3000-)')
            }
        }
    }
}