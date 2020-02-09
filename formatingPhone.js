let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let a = "";
let b = "";
let c = "";
for (i = 0; i < 3; i++) {
    a = a + numbers[i].toString();
}

for (i = 3; i < 6; i++) {
    b = b + numbers[i].toString();
}

for (i = 6; i < numbers.length; i++) {
    c = c + numbers[i].toString();
}
console.log("(" + a + ") " + "" + b + "-" + c);