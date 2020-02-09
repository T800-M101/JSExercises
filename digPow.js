function digPow(n, p) {
    let numero = n.toString().split("");
    let array = [];
    let elevado = 0;
    let x = 1;

    for (let i = 0; i < numero.length; i++) {
        array[i] = parseInt(numero[i]);
    }
    contador = p;
    for (let i = 0; i < numero.length; i++) {
        elevado += Math.pow(array[i], contador);
        contador++;
    }

    while (x > 0 && x <= elevado / n) {
        if (x * n == elevado) {
            return x;
        } else {
            x++;
        }
    }
    return -1;
}

let r = digPow(4567, 4);
console.log(r);