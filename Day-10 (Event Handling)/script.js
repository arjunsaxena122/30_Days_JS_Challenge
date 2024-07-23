// Basic Event Handling
// Task One:-

let changeBtn = document.querySelector('.change-btn')
let changeText = document.querySelector("#changeText")
changeBtn.addEventListener("click",()=>{
    changeText.textContent = "Hi, my name is Arjun Saxena and yours"
})

// Task Two:-

let imgContainer = document.querySelector('.img-container')
addEventListener('dblclick',()=>{
    imgContainer.classList.toggle('visible')
})

// Mouse Events:-

// Task Three:-

let changeBgColor = document.querySelector('.changeBgColor');
let changeHeadingText = document.querySelector('.changeBgColor h2')

changeBgColor.addEventListener('mouseover',()=>{
    changeHeadingText.textContent = "Task Three"
    changeBgColor.style.backgroundColor = "green"
})

// Task Four:-

changeBgColor.addEventListener('mouseout',()=>{
    changeHeadingText.textContent = "Task Four"
    changeBgColor.style.backgroundColor = "white"
})

// Keyboard Events:-

// Task Five:-

let keydownInput = document.querySelector('.keydownText input')
keydownInput.addEventListener('keydown',(event)=>{
    keydownInput = event.key
    console.log("KeyDown keys:- ",keydownInput)
})

// Task Six:-
let keyupInput = document.querySelector('.keyupText input')
keyupInput.addEventListener('keyup',(event)=>{
    console.log("KeyUp keys:- ",event.key)
})

// Forms Events:-

// Task Seven:-

let submitForm = document.querySelector('.submitForm')
let username = document.getElementById('username');
let fullName = document.getElementById('fullName');
let phone = document.getElementById('phone');

submitForm.addEventListener('submit',(event)=>{
    event.preventDefault()
    console.log(username.value)
    console.log(fullName.value)
    console.log(phone.value)

})

// Task Eight:-

let selectOption = document.querySelector('#selectChange')
let changeContent = document.querySelector('.changeContent')
selectOption.addEventListener('change',(event)=>{
    let insideEvent = event.target.value
    changeContent.textContent = `You select the ${insideEvent} country`
})


// Event Delegation:-

let listContainer = document.querySelector('.list-container');
// Task Nine:-


// listContainer.addEventListener('click',(event)=>{
//         console.log(event.target.textContent)
// },false)


// Task Ten:-

listContainer.addEventListener('click',()=>{
    let addList = document.createElement('li');
    let textNode = document.createTextNode("This new list added dynamically in this list");
    addList.append(textNode);
    listContainer.append(addList)
    
},false)