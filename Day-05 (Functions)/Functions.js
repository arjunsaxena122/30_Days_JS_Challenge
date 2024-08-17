// Function Declaration

// Task One:-

function isCheckNum (num){
    if(num%2==0){
        return console.log("This Number is even")
    }
    else{
        return console.log("This Number is Odd")
    }
}

isCheckNum(5)

// Task Two:-

function SquareNumber(num){
    return console.log("Square Number is: ",num*num);
}

// console.log("Square Number is: ",SquareNumber(5))
SquareNumber(5)


// Function Expression:-

// Task Three:-

function whoMaximumNum(a,b){
    if(a>b) return console.log(`${a} is maximum number`)
    else return console.log(`${b} is Maximum Number`)
}

whoMaximumNum(5,10)

// Task Four:-

let strOne = "Arjun";
let strTwo = "Saxena"

function concatTwoString(a,b){
    return console.log(`Concat the two String:  ${a} ${b}`)
}

concatTwoString(strOne,strTwo)

// Arrow Functions

// Task Five:-

const sumTwoNum = (a,b) =>{
    return console.log(`Sum of two Number is: ${a+b}`)
}

sumTwoNum(4,6)

// Task Six:-

let Str = "Hi, I am Arjun Saxena, How are you"

const isStringChar = (str) =>{
    return str.includes("123")
}

if(isStringChar(Str)){
    console.log("true")
}
else{
    console.log("false")
}

// Function Parameter and Default Values

// Task Seven:-

function productTwoNumber(a,b=2){
    return console.log(`This is product of two values: ${a*b}`)
}

productTwoNumber(4)
productTwoNumber(4,5)

// Task Eight:-

let PersonName = "Arjun Saxena";

function greetingMessage(str1,age=21){
    return console.log(`Good Morning, ${str1} sir and You are ${age} year old`)
}

greetingMessage(PersonName);

// Higher Order Function 

// Task Nine:-

function ranNumber(){
    return Math.floor(Math.random()*10 + 1);
}

function higherOrderFunction(fn,n){
    let resultFun = []
    for(let i=0;i<n;i++){
        resultFun.push(fn())
    }
    console.log("Higher Order Function:")
    return resultFun;

}

console.log(higherOrderFunction(ranNumber,5))

// Task Ten:-

function higherOne(){
        return "Hello"
}

function higherTwo(val){
    return `${val} Saxena`
}

function twoHigherOrderFunction(fn1,fn2,val){
    let greet = fn1()
    return `${greet} ${fn2(val)}`
}

console.log(twoHigherOrderFunction(higherOne,higherTwo,"Arjun"))