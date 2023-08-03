var contador = 1;
var resposta = true;

while(resposta == true){
    document.write('<p>' + contador + 'ª repetição de uma única linha de comando dentro de um laço condicional!</p>');
    contador += 1;
    resposta = window.confirm('Deseja continuar?');
}