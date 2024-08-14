// Task One:-

let num = 12;

if(num>0){
    console.log(`${num} Number is positive`);
}
else if(num<0){
    console.log(`${num} Number is negative`);
}
else{
    console.log(`${num} Number is Zero`);

}

// Task Two:-

let age = 20

if(age>=18){
    console.log("You are eligible for vote");
}
else{
    console.log("You aren't eligible for vote");
}

// Task Three:-

let a = 12;
let b=53;
let c = 34;

if(a>b){
    if(a>c){
        console.log("a value is maximum");
    }
    else{
        console.log("c value is maximum");
    }
}
else{
    if(b>c){
        console.log("b value is maximum");
    }
    else{
        console.log("c value is maximum");
    }
}

// Task Four:-

let day = 5;

switch(day){
    case 1: console.log('Monday');
    break;
    case 2: console.log('Tuesday');
    break;
    case 3: console.log('Wednesday');
    break;
    case 4: console.log('Thursday');
    break;
    case 5: console.log('Friday');
    break;
    case 6: console.log('Saturday');
    break;
    case 7: console.log('Sunday');
    break;

    default:console.log("This day doesn't exist ");
}

// Task Five:-

let grade = 'A';

switch(grade){
    case "A": console.log('You scored 90%');
    break;
    case "B": console.log('You scored 80%');
    break;
    case "C": console.log('You scored 70%');
    break;
    case "D": console.log('You scored 40%');
    break;
    case "F": console.log('You scored 40%');
    break;

}

// Task Six:-

let result = num%2==0;

result?console.log("Even number"):console.log("Odd Number");

// Task Seven:-

let year = 2002;

if((year%400==0)||(year%4==0 && !(year%100==0))){
    console.log("This is a leap year");
}
else{
    console.log("This is not a leap year");
}