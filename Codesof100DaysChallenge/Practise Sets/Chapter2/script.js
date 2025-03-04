// Questions
/*
 1. Use the Logical operators to find weather the age of a person lies between 10 and 20
 2. Demonstrate the use of switch case statement in JavaScript
 3. Write a JS program to find whether a number is divisible by 2 'and' 3
 4. Write a JS program to find whether a number is divisible by 2 'or' 3
 5. Print "You can drive" or "you can not drive" based on age being greater the 18 using ternary operator
*/

// 1.
let age = prompt("Give your age : ");
if (age >= 10 && age <= 20) {
    console.log("Your are a kid or a teen");
} else {
    console.log("You are an adult");
}

// 2.
let day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day)

// 3.
let num2 = Number(prompt("Enter a number : "));

if (num2 % 2 == 0 && num2 % 3 == 0) {
    console.log(num2 + " is divisible by 2 and 3 both.");
} else {
    console.log(num2 + " is not divisible by 2 and 3 both.");
}

// 4.
let num1 = Number(prompt("Enter a number : "));

if (num1 % 2 == 0 && num1 % 3 == 0) {
    console.log(num1 + " is divisible by 2 and 3 both.");
} else if (num1 % 2 == 0) {
    console.log(num1 + " is divisible by 2");
} else if (num1 % 3 == 0) {
    console.log(num1 + " is divisible by 3.");
} else {
    console.log(num1 + " is not divisible by 2 or 3.");
}

// 5. 
let age2 = Number(prompt("Give your age : "));
let drive = (age2 > 18) ? "You can drive" : "you can not drive";
console.log(drive)