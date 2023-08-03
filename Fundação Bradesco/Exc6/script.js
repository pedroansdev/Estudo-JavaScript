var numMes;

function verificar(){
    numMes = parseInt(document.calendario.numMes.value);

    switch(numMes){
        case 1: document.calendario.nomeMes.value = 'Janeiro'; break;
        case 2: document.calendario.nomeMes.value = 'Fevereiro'; break;
        case 3: document.calendario.nomeMes.value = 'Março'; break;
        case 4: document.calendario.nomeMes.value = 'Abril'; break;
        case 5: document.calendario.nomeMes.value = 'Maio'; break;
        case 6: document.calendario.nomeMes.value = 'Junho'; break;
        case 7: document.calendario.nomeMes.value = 'Julho'; break;
        case 8: document.calendario.nomeMes.value = 'Agosto'; break;
        case 9: document.calendario.nomeMes.value = 'Setembro'; break;
        case 10: document.calendario.nomeMes.value = 'Outubro'; break;
        case 11: document.calendario.nomeMes.value = 'Novembro'; break;
        case 12: document.calendario.nomeMes.value = 'Dezembro'; break;
        default: document.calendario.nomeMes.value = '** Mês Inválido! **'; break; // Se nenhum caso for atendido, o mês estará inválido
    }
}