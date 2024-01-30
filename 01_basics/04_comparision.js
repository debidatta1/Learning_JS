// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1); //equal
// console.log(2 != 1); //not-equal

// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
// This will output false. In JavaScript, when comparing null with a number using the greater than operator, null is treated as 0. Since 0 is not greater than 0, the result is false.

console.log(null == 0);
// This will output false as well. The equality operator (==) performs type coercion, and in this case, null is not equal to 0 in terms of value and type. However, it's generally recommended to use the strict equality operator (===) to avoid unexpected type coercion.

console.log(null >= 0);
// This will output true. Similar to the first case, null is treated as 0 when using the greater than or equal to operator. Since 0 is equal to 0, the result is true.


// The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That's why (3)null >= 0 is true and (1)null > 0 is false.

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);



console.log("2" === 2);
// output false. This is because the strict equality operator (===) in JavaScript not only compares values but also checks for the equality of their types. In this case, you are comparing a string ("2") with a number (2), and they have different types.