const values = [3, 11, 7, 2, 9, 10];

const sum = arr => arr.reduce((a,b) => a + b, 0)
const min = arr => Math.min(...arr);
const max = arr => Math.max(...arr);

console.log(sum(values));
console.log(min(values));
console.log(max(values));
