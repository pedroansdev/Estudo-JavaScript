/* Objetivo: capturar o nome do usuário e apresentar a saudação personalizada
   Elementos de entrada: método prompt do objeto window
   Elementos de saída: método write do objeto document */

/* Definição de variáveis */

var nome;

/* Entrada de dados */

nome = window.prompt('Entre com seu nome: ', 'Digite seu nome nesta caixa');

/* Saída de dados */

document.write('<h2> Olá ' + nome + ', Seja bem-vindo! </h2>');