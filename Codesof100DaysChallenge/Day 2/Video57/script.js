console.log("This is a tutorial on loops in JS")

let a = 1;
// console.log(a);
// console.log(a + 1);
// console.log(a + 2);
// This is headache to write repeatedly

// Loops
// 1.For loop
// for (let i = 1; i <= 100; i++) {
//     console.log(a + i);
// }

// For in loop
let person = {
    name: "Rahil",
    age: 19,
    JobTitle: "Software dev",
    birthYear: 2006
}

for (const key in person) {
    console.log(key);
}

// For of loop
let name1 = "Rahil"
for (const val of name1) {
    console.log(val);
}

// While loop
let a1 = 10;
while (a1 != 0) {
    console.log("rahil");
    --a1;
}

// Do while loop

let a2 = 10;

do {
    console.log("Hello rahil");
} while (a2 > 10) //this executes atleast once even if condition is false