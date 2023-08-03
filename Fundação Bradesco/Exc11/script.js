var curso;

function cadcurso(){
    curso = document.formulario.curso.value;
    if(curso.toUpperCase() == 'SIST'){
        document.formulario.codCurso.value = 'SIST001/FB';
    }
    else{
        document.formulario.codCurso.value = '**Curso Inválido!**'
    }
}