function fatorial(numero) {
    if(numero == 1) {
        return 1
    } else {
        return numero * fatorial(numero - 1)
    }
}

console.log("fatorial de 4", fatorial(4));
console.log("fatorial de 5", fatorial(5));
console.log("fatorial de 3", fatorial(3));
console.log("fatorial de 1", fatorial(1));