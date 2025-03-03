// Questions
/*
    1. Create a variable of type string and try to add number into it.
    2. create a const object in  javascript. Can you change it hold a number later?
    3. Try to add a new key in the const object in problem 2 . Were you able to add it??
    4. Write a js program to create a word meaning dictionary of 5 words
*/

// 1.
let stringVar = "rahil";
console.log(stringVar + 10); //it concatinates 10 to string

// 2. 
const rahil = {}
rahil.phoneNumber = 1234567890;
console.log(rahil)// yes we are able to add number later

// 3.
rahil.age = 19;
console.log(rahil); //yes we are able to add a new key to the object

// 4.

let dictionary = {
    "sonorous": "having a pleasant, deep and full sound",
    "malleable": "(used about metals, etc.) that can be hit or pressed into shape easily without breaking or cracking",
    "ductile": "(of a metal) able to be drawn out into a thin wire.",
    "enthusiastic": "full of excitement and interest in something",
    "optimistic": "expecting good things to happen or something to be successful; showing this feeling"
}

console.log(dictionary)