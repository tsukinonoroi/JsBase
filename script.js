function reverseString(str) {
    return str.split("").reverse().join("");
}
let str = '12345', num = 12345, sum_str = 0, sum_num = 0, comp_num = 1;
for (let index = 0; index < str.length; index++) {
    sum_str += Number(str[index]);
};
num = String(num);
for (let index = 0; index < num.length; index++) {
    sum_num += Number(num[index]);
};
for (let index = 0; index < num.length; index++) {
    comp_num *= Number(num[index]);
};

alert(`Задание 1: ${sum_str}`);
alert(`Задание 2: ${sum_num}`);
alert(`Задание 3: ${comp_num}`);
alert(`Задание 4: ${reverseString(num)}`);