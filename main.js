// Баланс

let balance = 25000;

// Траты
let car = 4480;
let food = 890;

// Доходы
let invoice = 5500;
let stock = 4200;

console.log(car + food);

console.log(balance - (car + food));

console.log(invoice + stock);

console.log((balance - (car + food)) + (invoice + stock));

// Итог
let totalBalance = ((balance - (car + food)) + (invoice + stock))