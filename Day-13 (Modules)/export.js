function addTwoNum(a,b){
    return a+b;
}

const subTwoNum = (a,b) => a-b;


const personObject = {
    username:"arjunsaxena122",
    fullName:"Arjun Saxena",
    age:21,
    getValue:function(){
        console.log(`Hi, My name is ${this.fullName}`)
    }
}


    // export {addTwoNum,personObject};
    // export default {addTwoNum,personObject}
    export {addTwoNum,subTwoNum,personObject}