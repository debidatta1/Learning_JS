//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// Number: Represents both integer and floating-point numbers. Example: 5, 3.14.
// String: Represents a sequence of characters enclosed in single or double quotes. Example: "Hello, world!".
// Boolean: Represents a binary value, either true or false, often used for conditional logic.
// Undefined: Represents a variable that has been declared but hasn't been assigned a value yet. Example: let x;.
// Null:  standalone value it is represenataion of empty value it is special type and it is a object type. Example: let y = null; 
// Symbol (ES6): it is mostly used to find uniqueness.
// BigInt (ES11): Represents large integers that cannot be represented by the Number type.

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 3456543576654356754n



// Reference (Non primitive) (Object Data Types)

// Array, Objects, Functions
// Object: Represents a collection of key-value pairs (properties and methods). Example: { name: "John", age: 30 }.
// Array: Represents a list-like collection of values, indexed by numbers (integer indices). Example: [1, 2, 3, 4].
// Function: Represents a reusable block of code that can be invoked or called with arguments. Example: function add(x, y) { return x + y; }.


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3