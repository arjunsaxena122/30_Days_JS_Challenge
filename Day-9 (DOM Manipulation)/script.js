// Selecting and Manipulation Element:-

// Task One:-

document.getElementById('heading').innerText = "Change the Text by using ID "

// Task Two:-

document.getElementsByClassName('first_heading')[0].style.backgroundColor = "green"


// Creating and Appending Elements:-

// Task Three:-

let div = document.createElement('div')
let para = document.createElement('p')

// Method One:-
// para.innerText = "hi, my name is arjun saxena how are you"


// Method Two:-

let textNodeThree = document.createTextNode("hi, my name is arjun saxena how are you")
para.append(textNodeThree)
div.append(para)
document.body.append(div)


// Task Four:-

const ul = document.querySelector('ul')
let li = document.createElement("li")

let textNodeFour = document.createTextNode("This is a list to create inside the ul");
li.append(textNodeFour)
ul.append(li)

// Removing Element:-

// Task Five:-

const subHeading = document.getElementsByClassName('sub_heading')[0]
// subHeading.remove()

// Task Six:-

let lastElement = document.querySelector('.sub_heading')
lastElement.lastElementChild.remove()

// Modifying Attribute and Classes:-

// Task Seven:-

let img = document.querySelector('img')
img.setAttribute("src","https://images.pexels.com/photos/4400679/pexels-photo-4400679.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")

// Task Eight:-

let firstHeading = document.getElementsByClassName('first_heading')
firstHeading[0].setAttribute('style','color:white; background-color:green; padding:20px; font-size:30px; border-radius:12px;');

firstHeading[0].setAttribute('style'," ")

// Event Handling:-

// Task Nine:-

let changeParagraph = document.querySelectorAll('p')[0]

function changePara(){

    // Method One:-

    // changeParagraph.innerText = "This change in the paragraph is caused by clicking the button."

    // Method Two:-

    let textNode = document.createTextNode("This change in the paragraph is caused by clicking the button by using textNode")
    changeParagraph.innerText = ""
    changeParagraph.append(textNode)
    console.log("Changed Successfully")
}

// Task Ten:- 

let changeBorder = document.querySelector('#changeBorder');

changeBorder.addEventListener('mouseover',()=>{
    changeBorder.style.border = "10px solid green"
})