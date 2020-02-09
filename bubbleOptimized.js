//Ordenando arreglo
numbers = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
for (i = 0; i < numbers.length; i++) {
    sorted = true;
    for (j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
            temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
            sorted = false;
        }
    }
}

console.log(numbers);