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

// let submitForm = document.querySelector('.submitForm')
// let submitInput = document.querySelector('.submitForm input')
// let submitButton = document.querySelector('.submitForm button')

// submitForm.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log(event.target.value)
// })

// Task Eight:-



// Event Delegation:-

// Task Nine:-

