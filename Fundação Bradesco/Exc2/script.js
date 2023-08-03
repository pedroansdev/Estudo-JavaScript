/* Objetivo: Receber nome e sobrenome do usuário, concatenar os campos e 
   apresentar em saudação personalizada
   Elementos de entrada: Método form do objeto document
   Elementos de saída: Método alert do objeto window */

/* Definição de variáveis */

var nome;
var sobrenome;
var nomeCompleto;

function concatena(){
    /* Entrada de dados */
    nome = document.concatenacao.f_nome.value;
    sobrenome = document.concatenacao.f_sobrenome.value;

    /* Processamento de dados */
    nomeCompleto = nome + ' ' + sobrenome;

    /* Saída de dados */
    window.alert('Olá ' + nomeCompleto);
}