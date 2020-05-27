/* 
* task 8
*/

console.log('Задача 8: решение уравнения');

let x;
a = 8,
b = 3;

x = (16 + 2 * b - a) / 2;      

console.log('X1 = ' + x);
console.log('проверка ' + ((a + 2 * (x -b)) == 16))

x= (a - 15 * b) / (b - 6);

console.log('X2 = ' + x);
console.log('проверка ' + (b * (x + 15) == a + 6 * x))

x= 23780 / (1 + 2 + a + b);

console.log('X3 = ' + x);
console.log('проверка ' + ((x + (2 * x) + (a * x) + (b * x)) ));