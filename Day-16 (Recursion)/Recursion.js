// Basic Recursion:-

// Task One:

function factNum(num) {
  if (num == 1) return 1;
  return num * factNum(num - 1);
}

// console.log(factNum(10));

// Task Two:

let a = 0;
let b = 1;
let c = 0;
function fib(num) {
  if (num <= 1) {
    return num;
  } else {
    c = a + b;
    console.log(c);
    a = b;
    b = c;
    return fib(num - 1);
  }
}

// fib(3);

// Recursion With Arrays:-

// Task Three:-

function sumAllElement(arr,i) {
  if(i <= 0) return 0
  return (sumAllElement(arr,i-1) + arr[i-1])

}

let arr = [1,2,3]
let arrLength = arr.length

console.log(sumAllElement(arr,arrLength))


// Task Four:-

function maxArrayElem(arr,i){
  if(i<=0) return 0
  
}

console.log(maxArrayElem(arr,arrLength))