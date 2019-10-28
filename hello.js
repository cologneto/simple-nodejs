const fs = require('fs');
const colors = fs.readFileSync('colors.txt', 'UTF-8');
const calc = require('./calc');

console.log(colors);
console.log(calc);

