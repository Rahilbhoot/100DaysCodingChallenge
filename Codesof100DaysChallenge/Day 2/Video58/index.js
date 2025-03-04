// console.log("Hello Rahil you are nice");
// console.log("Hello Rahil you are good");
// console.log("Hello Rahil your tShirt is nice");
// console.log("Hello Rahil your car is amazing");

// This is headach instead use functions

function nice(name) {
    console.log("Hey " + name + " you are nice!");
    console.log("Hey " + name + " you are good!");
    console.log("Hey " + name + " your tShirt is nice!");
    console.log("Hey " + name + " your car is amazing!\n");
}

nice("Harry")
function sum(a, b, c = 3) {
    // console.log(a + b)
    return a + b + c
}
let result = sum(3, 5);
console.log("The sum of this numbers is : " + result)

result = sum(4, 5, 8);
console.log("The sum of this numbers is : " + result)

// Arrow function
const fun1 = (x) => {
    console.log("I am an arrow function", x);
}
fun1(34);
fun1(20);
fun1(67);