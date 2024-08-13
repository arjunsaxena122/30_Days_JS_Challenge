let num1 = 12;
let num2 = 36;

// Task One:-

let add = num1 + num2;
console.log("Add two numbers: ",add);

// Task Two:-

let sub = num1 - num2;
console.log("Subtract two numbers: ",sub);

// Task Three:-

let mul = num1 * num2;
console.log("Multiply two numbers: ",mul);

// Task Four:-

let div = num1/num2;
console.log("Divide two numbers: ",div);

// Task Five:-

let rem = num2%num1;
console.log("Remainder two numbers: ",rem);

// Task Six:-

add += 1;
console.log("Assignment Operator of Addition Value: ",add);

// Task Seven:-

sub -= 1;
console.log("Assignment Operator of Subtract Value: ",sub);

// Task Eight:-

let compNum = add>sub;
console.log("Comparison Operator Task Eight One: ",compNum);

compNum = add<sub;
console.log("Comparison Operator Task Eight Two: ",compNum);

// Task Nine:-

compNum = add>=sub;
console.log("Comparison Operator Task Nine One: ",compNum);

compNum = add<=sub;
console.log("Comparison Operator Task Nine Two: ",compNum);

// Task Ten:-

compNum = add==sub;
console.log("Comparison Operator Task Ten One: ",compNum);

compNum = add===sub;
console.log("Comparison Operator Task Ten One: ",compNum);

// Task Eleven:-

compNum = add>sub && add<sub;
console.log("Comparison Operator Task Eleven : ",compNum);

// Task Twelve:-

compNum = add>sub || add<sub;
console.log("Comparison Operator Task Twelve : ",compNum);

// Task Thirteen:-

compNum = !(add>sub);
console.log("Comparison Operator Task Thirteen : ",compNum);

// Task Fourteen:-

let ternaryOperator = add?console.log("Positive Number"):console.log("Negative Number");