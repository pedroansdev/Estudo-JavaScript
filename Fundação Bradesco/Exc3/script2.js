var num1;
var num2;
var sum;

function somar(){
    /* Entrada de dados */
    num1 = document.formSoma.num1.value;
    num2 = document.formSoma.num2.value;

    /* Processamento de dados */
    sum = parseInt(num1) + parseInt(num2);

    /* Saída de dados */
    window.alert('A soma foi: ' + sum);
}