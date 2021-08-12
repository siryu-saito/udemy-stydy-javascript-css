const arry = [1, 2,3, 4, 5, 6];
arry[5] = 8;
arry.unshift('new item');
const val = arry.shift();
console.log(arry);
console.log(arry.length);
console.log(val);