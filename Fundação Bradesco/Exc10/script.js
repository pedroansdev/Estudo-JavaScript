var resposta;

resposta = window.confirm('Clique em uma das opções:');

if(resposta == true){
    document.write('Você clicou no botão OK, escolhendo o valor <b>TRUE</b>!');
}
else{
    document.write('Você clicou no botão CANCELAR, escolhendo o valor <b>FALSE</b>!');
}