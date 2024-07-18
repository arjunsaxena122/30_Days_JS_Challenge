
// Array Creation and Access:-

// Task One:-

let arr = [1,2,3,4,5];
console.log(`Print the arr's element ${arr}`);
console.table([arr[0],arr[1],arr[2],arr[3],arr[4]]);

// Task Two:-

console.log(`The first element of array is ${arr[0]} and last element of array is ${arr[arr.length-1]}`)

// Array Methods:-

// Task Three:-

// Work on the existing array 

arr.push(6)
console.log(`After push the element in the array is ${arr}`)

// Task Four:-

// Work on the existing array 

arr.pop()
console.log(`Pop the element from the last index of array ${arr}`)

// Task Five:-

// Work on the existing array 
arr.shift()
console.log(`Remove element at the begin of the array ${arr}`)

// Task Six:-

// Work on the existing array 
arr.unshift(-1)
console.log(`Add element at the begin of the array ${arr}`)

// Array Methods:-

// Task Seven:-

const mapArray = arr.map((element)=>element*2)
console.log(`Array map function is ${mapArray}`)

// Task Eight:-

const filterArray = arr.filter((element)=>{
    return element%2==0;
})

console.log(`The Array filter even number is ${filterArray}`)

// Task Nine:-

const reduceArray = arr.reduce((acc,currElem)=>{
    return acc+currElem;
},0)

console.log(`The reduce Array is ${reduceArray}`)

// Array Iteration:-

// Task Ten:-

for(let i =0; i<arr.length;i++){
    console.log(`For Loop:- Iterate the Array element ${arr[i]}`)
}

// Task ELeven:-

arr.forEach((Elem)=> console.log(`For Each:- Array Iteration is ${Elem}`))

// Multi-Dimension Array:-

// Task Twelve:-

let twoDimensionArray = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

// This shows Array in flattened string 
console.log(" ")
console.log(`There are Two Dimension Array here:- ${twoDimensionArray}`)

// This shows like a 2-D Array
console.log(" ")
console.log(twoDimensionArray)

//  Task Thirteen:-

// log the particular element of array

console.log(" ")
console.log(`The particular element of an array from 2-D array is ${twoDimensionArray[0][0]}`);

// log an each element of the array 

console.log(" ")
console.table([twoDimensionArray[0][0],twoDimensionArray[0][1],twoDimensionArray[0][2],twoDimensionArray[1][0],twoDimensionArray[1][1],twoDimensionArray[1][2],twoDimensionArray[2][0],twoDimensionArray[2][1],twoDimensionArray[2][2]])
