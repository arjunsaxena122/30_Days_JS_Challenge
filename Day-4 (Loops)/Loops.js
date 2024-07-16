// Task One:-
console.log("Print Number from 1 to 10");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task Two:-

console.log("Print Multiplication Table of 5");
let table = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${table} * ${i} = ${table * i}`);
}

// Task Three:-

console.log("Sum of Number from 1 to 10");
let sum = 0;
let i = 1;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("The sum of number from 1 to 10 is: ", sum);

// Task Four:-

console.log("Print Number from 10 to 1");
i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// Task Five:-

console.log("Print Number from  1 to 5");
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 5);


// Task Six:-

let fact = 1;
let factNum = 6

do{
    fact = fact * factNum
    factNum--;
}while(factNum > 0)
console.log("Factorial Number is: ",fact);

// Task Seven:-

let stars = 5  

for(let i = 0; i<stars; i++){
    let row = " " 
    for(let j = 0; j<=i; j++){
        row += "* "
    }
    console.log(row)
}

// Task Eight:-

console.log("Print Number from 1 to 10 with continue");
for (let i = 1; i <= 10; i++) {
    if(i==5) continue;
    console.log(i);
}

// Task Nine:-

console.log("Print Number from 1 to 10 with break");
for (let i = 1; i <= 10; i++) {
    if(i==7) break;
    console.log(i);
}
