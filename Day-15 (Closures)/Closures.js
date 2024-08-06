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
      for (let i = 0; i < arr.length; i++) {
        console.log(`${i}`);
      }
    }
  }
  return arrayIndex();
}

createArray("arjun", "deepak", "rohan", "deepak", "aman");

// Module Pattern:-

// Task Six:-

function taskSixModules() {
  let listItem = [];
  return function getMethods() {
    return {
      getAdd(item) {
        listItem.push(item);
        console.log("Items are added");
        console.log(listItem);
      },

      getRemove(item) {
        let index = listItem.indexOf(item);
        if (index !== -1) {
          listItem.splice(index, 1);
          console.log("Item is removed from the list");
        } else {
          console.log("This item can't be exist");
        }
      },

      getListItem() {
        for (let i = 0; i < listItem.length; i++) {
          console.log("List of all Items are: ", listItem[i]);
        }
      },

      // Method second to display list items

      //   listItems: function() {
      //     if (listItem.length > 0) {
      //         console.log("Current items:", listItem);
      //     } else {
      //         console.log("No items in the collection.");
      //     }
      // }
    };
  };
}

const ItemList = taskSixModules();
ItemList().getAdd(12);
ItemList().getAdd(13);
ItemList().getAdd(14);
ItemList().getAdd(15);
ItemList().getAdd(16);
ItemList().getAdd(17);
ItemList().getRemove(17);
ItemList().getListItem();

// Memoization:-

// Task Seven:-

function memoizationValue() {
  const storeValue = {};
  return function prevData(num) {
    const key = JSON.stringify(num); // Create a unique key for the arguments
    if (storeValue[key]) {
      console.log("Fetching from cache:", storeValue[key]);
      return storeValue[key];
    } else {
      console.log("Calculating result");
      storeValue[key] = num;
      return storeValue[key];
    }
  };
}

const memoizedAdd = memoizationValue();

function addNum(numOne, numTwo) {
  return numOne + numTwo;
}

console.log(memoizedAdd(addNum(3, 6)));
console.log(memoizedAdd(addNum(3, 6)));
console.log(memoizedAdd(addNum(4, 3)));
console.log(memoizedAdd(addNum(4, 3)));
console.log(memoizedAdd(addNum(12, 34)));
console.log(memoizedAdd(addNum(12, 34)));
console.log(memoizedAdd(addNum(12, 45)));
console.log(memoizedAdd(addNum(12, 45)));

// Task Eight:-

function factNumber(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

const memoizedFactNumber = memoizationValue();
console.log("Task Eight Factorial Number: ");
console.log(memoizedFactNumber(factNumber(5)));
console.log(memoizedFactNumber(factNumber(5)));
console.log(memoizedFactNumber(factNumber(6)));
console.log(memoizedFactNumber(factNumber(6)));
console.log(memoizedFactNumber(factNumber(7)));
console.log(memoizedFactNumber(factNumber(7)));
