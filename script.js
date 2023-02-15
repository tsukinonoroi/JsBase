"use strict";

let today = new Date();
var d = String(today.getDate()).padStart(2, "0");
var m = String(today.getMonth() + 1).padStart(2, "0");
var y = today.getFullYear();
console.log(y);
let date = { year: y, month: m, day: d };
document.write(`${date.year}-${date.month}-${date.day}`);