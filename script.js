"use strict";

let num = 99;
if (num >= 10 && num <= 99){
    var tmp, sum = 0;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
console.log(sum)
} if (sum <= 9){
    console.log("Однозначная сумма цифр")
} else {
    console.log("Двузначная сумма цифр")
}