// Template Literals:-

// Task One:-

let personName = "Arjun Saxena"
let personAge = 21;

console.log(`Hi, My name is ${personName} and I am ${personAge} year old`)

// Task Two:-

// Multiline String

console.log(`This is String One
This is String Two`)

// Destructuring:-

// Task Three:-

let arrOne = [1,2,3,4,5]

let [arrTwo,arrThree] = arrOne

console.log(`This is arrOne: ${arrOne}`)
console.log(`This is arrTwo: ${arrTwo}`)
console.log(`This is arrThree: ${arrThree}`)

// Task Four:-

const book = {
    title:"Day-8",
    author:"Arjun"
}

// Method One:-

// const {title,author}= book
// console.log(title)
// console.log(author)

// Method Two:-

// let {title:a,author:b}= book

// console.log(a)
// console.log(b)

// Method Three:-

let bookObject = {...book}

console.log(`This is book object: ${JSON.stringify(bookObject)}`);
console.log(bookObject);

// Spread and Rest Operator:-

// Task Five:-

const spreadArrayOne = [1,2,3,4];
const spreadArrayTwo = [5,6,7,8];

const newArray = [...spreadArrayOne,...spreadArrayTwo,9,10]
// console.log(`Using Spread Operator to combine two Arrays: ${newArray}`)
console.log("Using Spread Operator to combine two Arrays:",newArray)

// Task Six:-

function sumRestParameter(...num){
    let sum = 0;
    for(values of num){
        sum+=values
    }
    return console.log(`Rest Parameter sum values are: ${sum}`)
}

sumRestParameter(...spreadArrayTwo)

// Default Parameter:-

// Task Seven:-

function defaultParameter(paraOne,paraTwo=1){
    return paraOne*paraTwo
}

console.log(`default Parameter with calling function is: ${defaultParameter(2,3)}`)
console.log(`default Parameter without the second parameter is: ${defaultParameter(2)}`)

// Enhanced Object literals:-

// Task Eight:-

const enhancedObject = {
    channelName:{
        firstOne:"Hitesh Chaudhary",
        SecondOne:"Chai aur Code",
    },
    createName:"Hitesh Chaudhary Sir",
    channelSubscriber:"1 Million One day",
    greeting: function(){
        return "Hello Sir"
    }
}

console.log(enhancedObject)
console.log(enhancedObject.greeting())

// Task Nine:-

let channelName = "Chai aur Code"
let createName = "Hitesh Chaudhary Sir"
let channelSubscriber = "1 Million One day"

const computedValues = {
    channelName,
    createName,
    channelSubscriber
}


console.log(computedValues)