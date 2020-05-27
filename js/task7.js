/* 
* task 7
*/

console.log('Задача 7: сумма переплаты по кредиту');

let sumKredita = 2000000,
    years = 5,
    p = 0.1;

let months = years * 12;
let monthlyPercentage = 0.1 / 12;

let monthlyPayment = sumKredita * (
    (monthlyPercentage * ((1 + monthlyPercentage) ** months)) /
    (((1 + monthlyPercentage) ** months) - 1)
    );

let sumAllPayments = monthlyPayment * months;
let pereplata = sumAllPayments - sumKredita;
console.log('Ответ ' + pereplata);