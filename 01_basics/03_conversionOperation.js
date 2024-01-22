let score = "Piyush";

// console.log(typeof score);
// console.log(typeof score);

let valueNumber = Number(score);
// console.log(typeof valueNumber);
// console.log(valueNumber);

// "33" => 33
// "33abc" => NaN (Not a Number)
//  true => 1; false => 0

let isLoggedIn = "piyush";

let booleanIsLoggedIn = Boolean(isLoggedIn);
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33;

let stringNumber = String(someNumber);
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3;
let negValue = -value;
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Debi"

let str3 = str1 + str2
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.