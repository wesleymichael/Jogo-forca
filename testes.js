const letra = "michael".split("")

const digitadas = ['a', 'h', 'm'];

const aux = letra.map( (l) =>{
    return digitadas.includes(l) ? l : '_';
})

console.log(aux)