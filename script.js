console.log('====================== 1 ========================')

for (let i = 0; i <= 10; i++) {
   console.log(i);
}

console.log('====================== 2 ========================')

for (let i = 10; i >= 0; i--) {
   console.log(i);
}

console.log('====================== 3 ========================')

for (let i = 10; i >= 0; i--) {
   console.log(i);
}

console.log('====================== 4 ========================')

let i = 0;

while (i <= 10) {
   console.log(i);
   i++;
}

console.log('====================== 5 ========================')

let res = 0;

for (let i = 1; i <= 10; i++) {
   res += i;
}
console.log(res);

console.log('====================== 6 ========================')

let res1 = 1;

for (let i = 1; i <= 10; i++) {
   res1 *= i;
}
console.log(res1);

console.log('====================== 7 ========================')

let arr = ['1', '2', '3', '4', '5'];
let sum = 0;

for (let elem of arr) {
   sum += Number(elem);
}

console.log(sum); // должно вывести 15

console.log('====================== 8 ========================')

let arr1 = ['1', '2', '3', '4', '5'];
let sum1 = 0;

for (let elem of arr1) {
   sum1 += Number(elem);
}

console.log(sum1); // должно вывести 15

console.log('====================== 9 ========================')

let arr2 = ['1', '2', '3', '4', '5'];
let sum2 = 0;

for (let elem of arr2) {
   sum2 += Number(elem);
}

console.log(sum2); // должно вывести 15

console.log('====================== 10 ========================')

let arr3 = ['1', '2', '3', '4', '5'];
let sum3 = 0;

for (let i = 0; i <= arr3.length - 1; i++) {
   sum3 += Number(arr3[i]);
}

console.log(sum3);

console.log('====================== 11 ========================')

let arr4 = ['1', '2', '3', '4', '5'];
let sum4 = 0;

for (let i = 0; i < arr4.length; i++) {
   sum4 += Number(arr4[i]);
}

console.log(sum4);

console.log('====================== 12 ========================')

let arr5 = ['1', '2', '3', '4', '5'];
let sum5 = 0;

for (let i = 0; i < arr5.length; i++) {
   sum5 += Number(arr5[i]);
}

console.log(sum5);

console.log('====================== 13 ========================')

let arr6 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr6.length; i++) {
   arr6[i] = arr6[i] ** 2;
}

console.log(arr6);

console.log('====================== 14 ========================')

let arr7 = [];

for (let i = 1; i <= 5; i++) {
   arr7.push(i);
}

console.log(arr7);

console.log('====================== 15 ========================')

let obj = { a: 1, b: 2, c: 3 };
let sum7 = 0;

for (let elem in obj) {
   sum7 += obj[elem];
}

console.log(sum7);

console.log('====================== 16 ========================')

let obj8 = { a: 1, b: 2, c: 3 };
let sum8 = 0;

for (let key in obj8) {
   sum8 += obj8[key];
}

console.log(sum8);

console.log('====================== 17 ========================')

let arr9 = [1, 2, 3, 4, 5];
let flag = false;

for (let elem of arr9) {
   if (elem === 3) {
      flag = true;
      break;
   } else {
      continue;
   };
};

if (flag) {
   console.log('+++')
} else {
   console.log('---')
};

console.log('====================== 18 ========================')

let arr10 = [];

for (let i = 1; i <= 5; i++) {
   arr10.push(i);
};

console.log(arr10);

console.log('====================== 19 ========================')

let arr11 = [1, 2, 3, 4, 5];
let res11 = false;

for (let elem of arr11) {
   if (elem === 3) {
      res11 = true;
      break;
   } else {
      continue;
   };
};

console.log(res11);

console.log('====================== 20 ========================')

let arr12 = [1, 2, 3, 4, 5];

for (let elem of arr12) {
   if (elem % 2 == 0) {
      console.log(elem);
   }
}

console.log('====================== 21 ========================')

let arr13 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let newArr = []

for (let elem of arr13) {
   if (elem % 2 != 0) {
      newArr.push(elem);
   } else {
      continue;
   }
}

console.log(newArr);