// Understanding Closures:-

// Task One:-

function outerFun() {
  let outerName = "Outer Variable Name";
  console.log(outerName);
  function innerFun() {
    let innerName = "Inner variable Name";
    console.log(innerName);
  }
  return innerFun();
}

outerFun();

// Task Two:-

function outerCounter() {
  let counter = 0;
  function innerCounter() {
    counter += 1;
    return counter;
  }
  function getCounterValue() {
    let countValue = innerCounter();
    return countValue;
  }
  return getCounterValue();
}

console.log(outerCounter());

// Practical Closures:-

// Task Three:-

function uniqueID() {
  let randomId = Math.floor(Math.random() * Math.pow(10, 16) + 1);
  console.log(randomId);
  function trackLastId() {
    let trackID = randomId;
    console.log("Old ID", trackID);
    randomId += Math.floor(Math.random() * Math.pow(10, 16) + 1);
    console.log(randomId);
  }
  return trackLastId();
}

uniqueID();

// Task Four:-

function username(str) {
  return function greetingUsername() {
    return console.log(`Good Morning, ${str} Sir`);
  };
  // return greetingUsername()
}

const greet = username("arjun Saxena");
greet();

// Closures in Loops:-

// Task Five:-

function createArray(...num) {
  let arr = [];
  for (let i = 0; i < num.length; i++) {
    arr.push(num[i]);
    function arrayIndex() {
      console.log(arr);
      for (let i = 0; i < arr.length; i++) {
        console.log(`${i}`);
      }
    }
  }
  return arrayIndex();
}

console.log(createArray("arjun", "deepak", "rohan", "deepak", "aman"));

// Module Pattern:-

// Task Six:-

// Memoization:-

// Task Seven:-

function memoizationValue() {
  const storeValue = {};
  
  function prevData(num) {
    const key = JSON.stringify(num); // Create a unique key for the arguments
    if (storeValue[key]) {
      console.log('Fetching from cache:', storeValue[key]);
      return storeValue[key];
    } else {
      console.log('Calculating result');
      console.log(storeValue[key] = num)
      console.log(storeValue)
      return storeValue[key];
    }
  }
  
  return prevData;
}

const memoizedAdd = memoizationValue();

function addNum(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(memoizedAdd(addNum(3, 6))); // Fetching from cache
