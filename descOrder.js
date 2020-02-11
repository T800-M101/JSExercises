function descOrder(a) {

    let array = a.toString().split('').map(Number);
    let arrayString;
    let concatenado = '';
    let result;
    for (let i = 0; i < array.length; i++) {
        let sorted = true;
        for (let j = 0; j < array.length; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                sorted = false;
            }
        }
    }

    for (let i = 0; i < array.length; i++) {
        arrayString = array[i].toString();
        concatenado += arrayString;
    }
    result = parseInt(concatenado);

    return result;
}
console.log(descOrder(234567));