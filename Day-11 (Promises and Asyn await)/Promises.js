// Understanding Promises:-

// Task One and Task Two:-

let firstHeading = document.getElementById("first-heading");

function changeHeading(str = "John") {
  firstHeading.innerHTML = `Hi, My name is ${str}`;
}

new Promise((resolve, reject) => {
  setTimeout(changeHeading, 2000, "Arjun");
  resolve("Complete The task");
  reject("ERROR: Something Went wrong");
})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Chaining Process:-

// Task Three:-

new Promise((resolve, reject) => {
  resolve({
    name: "Arjun Saxena",
    age: 21,
    phone: 1234567890,
    email: "example@gmail.com",
  });
  reject("ERROR: Chaining Process got an error");
})
  .then((data) => {
    console.log("Email is: ", data.email);
    return data;
  })
  .then((data) => {
    console.log("Age is: ", data.age);
    return data;
  })
  .then((data) => {
    console.log("Phone Number: ", data.phone);
  })
  .catch((error) => {
    console.log(error);
  });

// Using Async/Await:-

// Task Four:-

// async function chainingProcess(){
//     let data = new Promise((resolve,reject)=>{
//         resolve({name:"Arjun Saxena",age:21,phone:1234567890,email:"example@gmail.com"})
//         reject("ERROR: Chaining Process got an error");
//     })

//     let response = await data
//     console.log(response)
// }

// chainingProcess();

// Task Five:-

async function chainingProcess() {
  try {
    let data = new Promise((resolve, reject) => {
    //   resolve({
    //     name: "Arjun Saxena",
    //     age: 21,
    //     phone: 1234567890,
    //     email: "example@gmail.com",
    //   });
      reject("ERROR: Task Five got an error");
    });

    let response = await data;
    console.log(response);

  } catch (error) {
    console.log(error);
  }
}

chainingProcess()


// Fetching Data from API:-

// Task Six:-

// new Promise((resolve,reject)=>{
//     let data = fetch('https://api.github.com/users/arjunsaxena122')
//     resolve(data)
//     reject("ERROR: Task Six fetch Api error")
// })
// .then((data)=>{
//     return data.json()
// })
// .then((data)=>{
//     console.log(data)
// })
// .catch((error)=>{
//     console.log(error)
// })

// Task Seven:-

async function taskSeven(){
    try {
        let data = await fetch('https://api.github.com/users/arjunsaxena122');
        let responseData = await data.json()
        console.log(responseData)

    } catch (error) {
        console.log(error)
    }
}

taskSeven()

// Concurrent Promises:-

// Task Eight:-



const promiseOne = Promise.resolve(34);
const promiseTwo = new Promise((resolve,reject)=>{
    setTimeout(resolve,2000,"Promise Two")
})



Promise.all([promiseOne,promiseTwo]).then((data)=>{
    data.forEach((values)=> console.log("This is task Eight values: ",values))
})

// Task Nine:-

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(resolve,1000,"promise Three")
})

let result = Promise.race([promiseThree,promiseTwo])

result.then((data)=>console.log(data))