console.log('====================== 1 ========================')

for (let i = 1; i <= 100; i++) {
   console.log(i)
};

console.log('====================== 2 ========================')

for (let i = 100; i >= 1; i--) {
   console.log(i)
};

console.log('====================== 3 ========================')

for (let i = 1; i <= 100; i++) {
   if (i % 2 == 0) {
      console.log(i)
   } else {
      continue;
   };
};

console.log('====================== 4 ========================')

let newArr = new Array();

for (i = 1; i <= 10; i++) {
   newArr.push('x');
};

console.log(newArr)

console.log('====================== 5 ========================')

let newArr1 = new Array();

for (i = 1; i <= 10; i++) {
   newArr1.push(i);
};

console.log(newArr1)

console.log('====================== 6 ========================')

let arr3 = [1, 3, -2, 11, 12, 2, -10, 8, 9];

for (let elem of arr3) {
   if (elem > 0 && elem < 10) {
      console.log(elem);
   } else {
      continue;
   };
};

console.log('====================== 7 ========================')

let arr4 = [1, 3, -2, 5, 12, 2, -10, 8, 9];
let flag = false;

for (let elem of arr4) {
   if (elem == 5) {
      flag = !flag;
      break;
   } else {
      continue;
   };
};

console.log(flag);

console.log('====================== 8 ========================')

let arr5 = [1, 3, -2, 5, 12, 2, -10, 8, 9];
let res = 0;

for (let elem of arr5) {
   res += elem;
};

console.log(res);

console.log('====================== 9 ========================')

let arr6 = [1, 3, -2, 5, 12, 2, -10, 8, 9];
let res6 = 0;

for (let elem of arr6) {
   res6 += elem ** 2;
};

console.log(res6);

console.log('====================== 10 ========================')

let arr7 = [1, 2, 3, 4, 5, 6]
res7 = 0;

for (let elem of arr7) {
   res7 += elem;
};

res7 = res7 / arr7.length;

console.log(res7)

console.log('====================== 11 ========================')

let x = 6;
let result = 1;

for (let i = 1; i <= x; i++) {
   result *= i;
};

console.log(result)

console.log('====================== 12 ========================')

let arr8 = [];

for (let i = 10; i >= 1; i--) {
   arr8.push(i);
};
console.log(arr8)



console.log('====================== 13 ========================')

let arr9 = [1, 2, 3, -4, -6, 2, -9];
let sum = 0;

for (let elem of arr9) {
   if (elem >= 0) {
      sum += elem;
   } else {
      continue;
   };
};

console.log(sum)

console.log('====================== 14 ========================')

let arr = [10, 20, 30, 50, 235, 3000];

for (let elem of arr) {
   if (String(elem)[0] == 1 || String(elem)[0] == 2 || String(elem)[0] == 5) {
      console.log(elem);
   } else {
      continue;
   };
};

console.log('====================== 15 ========================')

let arr1 = [10, 20, 30, 50, 235, 3000];

for (let i = arr1.length - 1; i >= 0; i--) {
   console.log(arr1[i])
}

console.log('====================== 16 ========================')

let arr2 = [0, 1, 2, 3, 5, 5, 8, 7];

for (let i = 0; i <= arr2.length - 1; i++) {
   if (arr2[i] == i) {
      console.log(arr2[i]);
   } else {
      continue;
   };
}
document.write('<hr>Задание 17<br>')

console.log('====================== 17 ========================')

let arr12 = [0, 1, 2, 3, 5, 8, 7];

for (let i = 0; i <= arr12.length - 1; i++) {
   document.write(arr12[i] + '<br>')
}

document.write('<hr>Задание 18<br>')

console.log('====================== 18 ========================')

for (let i = 0; i <= arr12.length - 1; i++) {
   document.write(`<p> ${arr12[i]} </p>`)
}

document.write('<hr>Задание 19<br>')

console.log('====================== 19 ========================')

let days = ['', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];


for (let day = 1; day < days.length; day++) {
   if (day == 6 || day == 7) {
      document.write(`<p><strong>${days[day]}</strong></p>`)
   } else {
      document.write(`<p>${days[day]}</p>`)
   }
}


document.write('<hr>Задание 20<br>')

console.log('====================== 20 ========================')

for (let day = 1; day < days.length; day++) {
   let d = new Date();
   let y = d.getDay();
   if (day === y) {
      document.write(`<p><i>${days[day]}</i></p>`)
   } else {
      document.write(`<p>${days[day]}</p>`)
   };
};

document.write('<hr><br>')

console.log('====================== 21 ========================')

let obj = {
   employee1: 100,
   employee2: 200,
   employee3: 300,
   employee4: 400,
   employee5: 500,
   employee6: 600,
   employee7: 700,
};

console.log(obj)

for (let item in obj) {
   obj[item] += obj[item] * 0.1
};

console.log(obj)

console.log('====================== 22 ========================')

let obj1 = {
   employee1: 100,
   employee2: 200,
   employee3: 300,
   employee4: 400,
   employee5: 500,
   employee6: 600,
   employee7: 700,
};

for (let item in obj1) {
   if (obj1[item] <= 400) {
      obj1[item] += obj1[item] * 0.1
   } else {
      continue;
   }
};

console.log(obj1)

console.log('====================== 23 ========================')

let arr13 = [1, 2, 3, 4, 5];
let arr22 = [6, 7, 8, 9, 10];
let newObj = {};

for (let i = 0; i < arr13.length; i++) {
   key = arr13[i];
   value = arr22[i]
   newObj[key] = value;
}
console.log(newObj);

console.log('====================== 24 ========================')

let obj2 = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
let sum1 = 0;
let sum2 = 0;
let result1 = 0;

for (let item in obj2) {
   key = Number(item)
   value = Number(obj2[item]);
   sum1 += key // 15
   sum2 += value // 40
};
console.log(sum1 / sum2)

console.log('====================== 25 ========================')

let obj4 = { 'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5 };
let newArr2 = [];
let newArr3 = [];

for (let item in obj4) {
   let key = item;
   let value = obj4[item];
   newArr2.push(key);
   newArr3.push(value);
};

console.log(newArr2);
console.log(newArr3);

console.log('====================== 26 ========================')

let obj5 = {
   1: 125,
   2: 225,
   3: 128,
   4: 356,
   5: 145,
   6: 281,
   7: 452,
};

let newArr4 = [];

for (let item in obj5) {
   let value = obj5[item];
   if (String(value)[0] == '1' || String(value)[0] == '2') {
      newArr4.push(value);
   } else {
      continue;
   };
};
console.log(newArr4);

console.log('====================== 27 ========================')

let arr15 = ['', 'a', 'b', 'c', 'd', 'e'];
let newObj3 = {}

for (let i = 1; i <= arr15.length - 1; i++) {
   newObj3[i] = arr15[i]
};

console.log(newObj3)

console.log('====================== 28 ========================')

let arr16 = ['', 'a', 'b', 'c', 'd', 'e'];
let newObj4 = {}

for (let i = 1; i <= arr16.length - 1; i++) {
   newObj4[arr16[i]] = i
};

console.log(newObj4)