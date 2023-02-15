"use strict";

let arr = [];
for (let index = 0; index < 3; index++) {
  arr.push(index + 1);
}
document.write(`Задание 1: ${arr}<br>`);
for (let index = 3; index < 5; index++) {
  arr.push(index + 1);
}
document.write(`Задание 2: ${arr}`);
