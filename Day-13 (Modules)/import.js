// Creating and Exporting Modules:-

// Method One:-

// import myModels from "./export.js"

// const {addTwoNum,personObject}  = myModels;

// Method Two:-

import {addTwoNum,subTwoNum,personObject} from "./export.js"



// Task One:-



// import {addTwoNum} from "./export.js";

console.log(`Add Two Number:-  ${addTwoNum(3,4)}`)

// Task Two:-

// import {personObject}  from "./export.js";

console.log(personObject)
console.log(personObject.getValue())

// Named and Default 

// Task Three:-

console.log(`Subtract the two Numbers: ${subTwoNum(5,2)}`)

// Task Four:-

import myDefaultFunction from "./defaultExport.js"

const {fiveTable,printConsole} = myDefaultFunction

console.log(printConsole())
console.log(fiveTable())

// Importing Entire Modules:-

// Task Five:-

console.log(`Task Five to add Number:- ${addTwoNum(4,5)}`)
console.log(`Task Five to subtract Number:- ${subTwoNum(9,5)}`)
console.log(`Task Five to call person object:- ${JSON.stringify(personObject)}`)


// Using Third Party Modules:-

// Task Six:-

import lodash from "lodash"

console.log("They have lodash: ",lodash.floor(3.0004))


// Task Seven:-

import axios from 'axios';

async function axiosData(){
    let response = await axios.get('https://api.github.com/users/arjunsaxena122')
    let responseData = response.data
    console.log(responseData.name)

}


try {
    axiosData()
} catch (error) {
    console.log(error)
}


// Task Eight:-

import bundler from './bundler.js'
console.log(bundler.printConsole())
console.log(bundler.fiveTable())