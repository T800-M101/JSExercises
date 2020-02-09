function digital_root(n) {
    let number = n.toString().split("");
    let array = [];
    let suma = 0;
    for (let i = 0; i < number.length; i++) {
        array[i] = parseInt(number[i]);
        suma += array[i];
    }

    if (suma < 10) {
        console.log(suma);
    } else {
        digital_root(suma);
    }
}

digital_root(1234);