const palavra = 'aaaaal'.split("")
totalAcertos();

function totalAcertos(){
    const letrasSemRepeticao = palavra.filter( (letra, i) => {
        return palavra.indexOf(letra) === i;
    });
    console.log(letrasSemRepeticao.length)
}