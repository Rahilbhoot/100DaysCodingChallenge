console.log("hey this is tutorial 55 of sigma web dev course")

let a = 5;
var a1 = 5;
let b = 6;
let c = "rahil";
console.log(a + b); //11
console.log(a + b + 8); //19
console.log(typeof (a));//number
console.log(typeof (b));//number
console.log(typeof (c));//string

{
    let a = 66;
    console.log(a);//block scoped 'let' will show 66
}

{
    var a1 = 23;
    console.log(a1); //var is globally scoped it will show 23 here
}

console.log(a1) //but var will change its global value too and here it will also give 23

// const variable can neither be updated nor be re-declared
// const a1 = 6;
// a1 = a1 + 1;//error

// Primitive data types and objects

//==> primitive datatypes
/*
    1.null
    2.number
    3.string
    4.symbol
    5.undefined
    6.boolean
    7.bigint
*/

let x = "rahilbhai";
let y = 22;
let z = 3.5;
const p = true;
let q = undefined;
let r = null;

console.log(x, y, z, p, q, r);
console.log(typeof (x), typeof (y), typeof (z), typeof (p), typeof (q), typeof (r));

//==> Objects

let o = {
    name: "Rahil",
    "job role": "Software developer",
    age: 19,
    "is-handsome": true
}

o.salary = "50000 rupees"
console.log(o);