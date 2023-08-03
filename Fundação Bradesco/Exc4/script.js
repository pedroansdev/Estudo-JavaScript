var num1;
var num2;
var solucao;

function verificar(){
    num1 = document.formulario.val1.value;
    num2 = document.formulario.val2.value;
    solucao = document.querySelector("#numOrganizados");

    if(parseInt(num1) < parseInt(num2)){
        solucao.innerText = num1 + " => " + num2;
    }
    else{
        solucao.innerText = num2 + " => " + num1;
    }
}