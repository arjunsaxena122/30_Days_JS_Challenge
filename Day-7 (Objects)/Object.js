// Object creation and Access

// Task One:-

// Method One:-

const book = {
    title:"chai aur code",
    author:"Hitesh sir",
    year:2024
}

// This return object
console.log(book)
console.log("")

// This return [object Object]
console.log(`Console the objects: ${book}`)
console.log("")


// Method Two:-

let object = new Object();

object.title = "chai aur code"
object.author = "Hitesh chai"
object.year = "2021"

console.log(object)
console.log("")


// Task Two:-

console.log(`title and author properties are:- ${book.title} and ${book.author}`)
console.log("")

// Object Methods:-

// Task Three:-

const stringBookTitle = book.title.toString()
console.log(`Title convert into object to string: ${stringBookTitle} `)
console.log("")

const stringBookAuthor = book.author.toString()
console.log(`Author convert into object to string: ${stringBookAuthor} `)
console.log("")


// Task Four:-

// Method One:-

function updateBookYear(year){
    return console.log(`Updated Book Year ${book.year = year}`)
}

updateBookYear(2024)
console.log("")
console.log("This updated Book year: ",book)

// Method Two:-

let updateYear = {...book,year:2000}
console.log("")
console.log("This updated Year by using spread operator: ",updateYear)


// Nested Object:-

// Task Five:-

const NestedObject = {
    name:{
        firstName:"Arjun",
        lastName:"Saxena"
    },
    books:{
        title:"Coding",
        author:"Arjun Saxena",
        year:2024
    }
}

// Task Six:-

console.log(" ");
console.log("This is the nested object: ",NestedObject)

console.log(" ");
console.log("This is the name object: ",NestedObject.name)

console.log(" ");
console.log("This is the books object: ",NestedObject.books)


// The this keyword:-

// Task Seven:-

const newBook = {
    title:"Task Seven",
    author:"Arjun Saxena",
    year:2024,
    getNewBook:function(){
        return `This is book title: ${this.title} and This is book year: ${this.year}`
    },
    getBook(){
        return `This is book title: ${this.title} and This is book year: ${this.year}`
    }
}

console.log(newBook.getNewBook())
console.log(newBook.getBook())


// Object Iteration:-

// Task Eight:-

console.log("")
for(const bookObj in book){
    console.log(`This is keys of book: ${bookObj}  This is values of book: ${book[bookObj]}`);
}

// Task Nine:-

console.log("")
console.log(Object.keys(book));
console.log("")
console.log(Object.values(book));
console.log("")
console.log(Object.entries(book));


