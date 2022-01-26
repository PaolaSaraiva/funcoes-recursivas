function verMatriz(elemento) {
    if(elemento instanceof Array) {
        elemento.forEach((el) => {
            verMatriz(el)
        });
        console.log('\n');
    } else {
        console.log('| ' + elemento + ' |');
    }
}

verMatriz([
    [1,2,3],
    [4,5,6],
    [7,8,9]
])