var arrayEven = [];
var arrayOdd = [];

for (i=0; i < 50; i++){
  var number = Math.floor((Math.random() * 100) + 1);
  number%2 === 0? arrayEven.push(number): arrayOdd.push(number)
};