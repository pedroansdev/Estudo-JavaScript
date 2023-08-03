document.write('<h1>Declaração e atribuição de variável</h1>');
document.write('<p>var num = <b>30</b>;</p>');
var num = 30;

document.write('<hr>');
document.write('<p>Operador TERNÁRIO <b>(? :)</b> com operadores RELACIONAIS (==, !=, <)</p>');

document.write('<p>num <b>==</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta =>');
((num == 20) ? document.write('<b>"SIM"</b>') : document.write('<b>"NÃO"</b>'));

document.write('<p>num <b>!=</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta =>');
((num != 20) ? document.write('<b>"SIM"</b>') : document.write('<b>"NÃO"</b>'));

document.write('<p>num <b><</b> 20 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta =>');
((num < 20) ? document.write('<b>"SIM"</b>') : document.write('<b>"NÃO"</b>'));

document.write('<hr>');
document.write('<p>Operador TERNÁRIO com expressão ARITMÉTICA</p>');

document.write('<p>(num <b>-</b> 20) <b>==</b> 0 <b>?</b> "SIM" <b>:</b> "NÃO" - Resposta =>');
(((num - 20) == 0) ? document.write('<b>"SIM"</b>') : document.write('<b>"NÃO"</b>'));