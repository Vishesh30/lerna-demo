var add = require('AdditionModule');
var subtract = require('SubtractionModule');
 
var sum = add.add(2,3);
var diff = subtract.subtract(3,2);
 
console.log("Sum: " + sum + " Diff: " + diff);

var sum = add.addSquares(2,3);
var diff = subtract.subtractSquares(3,2);
 
console.log("SumSquares: " + sum + " DiffSquares: " + diff);