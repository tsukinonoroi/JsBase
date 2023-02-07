"use strict";
let a, b, c, d, result, str;
//exr1
let test = Boolean(3);
alert(test);
//exr2
test = Boolean(0);
alert(test);
//exr3
test = Boolean(-1);
alert(test);
//exr4
test = Boolean(-0);
alert(test);
// exr5
test = Boolean(+0);
alert(test);
//exr6
test = Boolean('abc');
alert(test);
//exr7
test = Boolean('');
alert(test);
//exr8
test = Boolean('0');
alert(test);
//exr9
test = Boolean(true);
alert(test);
//exr10
test = Boolean(false);
alert(test);
//exr11
test = Boolean('true');
alert(test);
//exr12
test = Boolean('false');
alert(test);
//exr13
test = Boolean(null);
alert(test);
//exr14
test = Boolean('null');
alert(test);
//exr15
test = Boolean(undefined);
alert(test);
//exr16
test = Boolean('undefined');
alert(test);
//exr17
test = Boolean(NaN);
alert(test);
//exr18
test = Boolean('NaN');
alert(test);
//exr19
test = Boolean(3 * 'abc');
alert(test);
//exr20
test = Boolean(Infinity);
alert(test);
//exr21
test = Boolean(1 / 0);
alert(test);