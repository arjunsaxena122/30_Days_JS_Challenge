// Basic  Error Handling with try-catch

// Task One:-

function taskOne() {
  try {
    console.log("This is Task One");
    throw new Error(`Error from throw keyword and throw by me`);
  } catch (error) {
    console.log("Error from catch block ", error);
  }
}
taskOne();

// Task Two:-

function taskTwo(numOne, numTwo) {
  if (numTwo === 0) {
    throw new Error("Error: Task Two :Denominator is Zero");
  }
  return numOne / numTwo;
}

try {
  console.log(taskTwo(4, 0));
} catch (error) {
  console.log("ERROR: Task Two catch block error", error);
}

// Finally Block:-

// Task Three:-

function taskThree(str) {
  console.log("This is Task Three by ", str);
}

try {
  taskThree("Arjun Saxena");
} catch (error) {
  console.log("ERROR: Task Three Error by Catch Block", error);
} finally {
  console.log(
    "(Task Three) : finally always run after the try and catch block"
  );
}

// Custom Error Objects:-

// Task Four:-

class customError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
  }
}

function taskFour() {
  console.log("This is Task Four");
  throw new customError("That is custom Error call by Task Four Function");
}

try {
  taskFour();
} catch (error) {
  console.log("ERROR: Task Four Error by Catch Block", error);
}

// Task Five:-

function validateUser(username, fullName) {
  if ((username && fullName) === "") {
    throw new customError("ERROR: Task Five User Validation Failed");
  }

  return { username, fullName };
}

try {
  validateUser("");
} catch (error) {
  console.log("ERROR: User validation failed", error);
}

// Error Handling In Promises:-

// Task Six:-

const taskSixPromise = new Promise((resolve, reject) => {
  let randomNumber = Math.floor(Math.random() * 10 + 1);
  setTimeout(() => {
    if (randomNumber < 5) {
      resolve("Task Six: Promise Resolved");
    } else {
      reject("Task Six: Promise Couldn't Resolve");
    }
  }, 200);
});

taskSixPromise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// Task Seven:-

async function taskSeven() {
    let randomNumber = Math.floor(Math.random() * 10 + 1);
    setTimeout(() => {
      if (randomNumber < 5) {
        console.log("Task Seven: Promise Resolved");
      } else {
        throw new customError("ERROR: Task Seven Promise Can't be resolved");
      }
    }, 200);
}
try {
    taskSeven()
    
} catch (error) {
    console.log(error)
}

// Graceful Error Handling in Fetch:-

// Task Eight:-

fetch('https://apigithub.com/users/arjunsaxena122')
.then((data)=>{
    return data.json()
})
.then((data)=>{
    console.log(data)
})
.catch(()=>{
    throw new customError("ERROR: Task Eight fetch Api for an invalid URL ")
})

// Task Nine:-

async function taskNine(){
    try {
        let data = await fetch('https://apigithub.com/users/arjunsaxena122')
        let response = await data.json();
        console.log(response)

    } catch (error) {
        throw new customError("ERROR: Task Nine fetch Api for an invalid URL ")
    }
}

taskNine()

