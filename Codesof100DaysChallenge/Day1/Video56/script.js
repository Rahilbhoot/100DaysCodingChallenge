console.log("Hello I am conditional tutorial");


// Conditional statements
let age = 45;
let grace = 2;

if ((age + grace) > 18) {
    console.log('You can drive');
}
else {
    console.log('You cannot drive');
}

// Operator
// 1. arithmatic operators are basic math operators
let a = 2;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b); //a^b a rais to b

//2. assignment operator

console.log(a += 2)//4

//3. comparision operators

let age2 = 18;
if (age2 == 18) {
    console.log("Yayy you are 18")
} else {
    console.log("You are very small or adult.");
}

let string1 = "3"

if (string1 == 3) {
    console.log("It is giving yes if we compare string and a number");
}

if ("string" === 3) {
    // this will not run
} else {
    console.log("alternative of '==' is '===' where the comparision is strict.")
}

// 4.Logical operator

let a2 = 3;
let b2 = 4;

console.log(a != b) //true

// Comments

// single line comments are denoted by '//'

//multi line comments are denoted by '/**/'



// If-else ladder

let age1 = 54;

if (age1 == 0) {
    console.log("Are you kidding you are 0 years old...");
} else if (age1 > 10 && age1 < 15) {
    console.log("You are a kid");
} else if (age1 > 18) {
    console.log("you are not a kid any more");
} else {
    console.log("Invalid age");
}



// Ternary Operator
let x = 6;
let y = 8;
let z = (x > y) ? (x - y) : (y - x);//here if x will be greater x-y will happen or if y is greater y-x will happen
// syntax
// condition?iftrue:iffalse
console.log(z);