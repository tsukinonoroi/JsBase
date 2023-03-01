"use strict";

let ok = confirm('Вам есть 18 лет?');

if (ok) {
	document.write('только для совершеннолетник');
} else {
	document.write('нельзя');
}