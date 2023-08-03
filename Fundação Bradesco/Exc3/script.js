/* Objetivo: Desenvolver um programa que faça a leitura de 2 números inteiros e apresente
   o resultado da soma entre eles */

/* Definição de variáveis */

var num1;
var num2;
var sum;

/* Entrada de dados */

num1 = parseInt(window.prompt('Informe o primeiro número: ', 'Digite aqui'));
num2 = parseInt(window.prompt('Informe o segundo número: ', 'Digite aqui'));

/* Processamento de dados */

sum = num1 + num2;

/* Saída de dados */

document.write('<h2> O resultado da primeira soma é: ' + sum + '</h2>');
