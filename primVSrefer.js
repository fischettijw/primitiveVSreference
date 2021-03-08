console.clear();

let a = 4;
let b = 5;
let c = a;

console.log("let a = 4    ", "a =", a);
console.log("let b = 5    ", "b =", b);
console.log("let c = a    ", "c =", a);

a = 11;
console.log("---------------  a = 11  --------------------");

console.log("a", a);
console.log("b", b);
console.log("c", c);
console.log("=============================================");



let objA = {
    valueOne: 1,
    valueTwo: 2
};

let objB = {
    valueOne: 3,
    valueTwo: 4
};

let objC = objA;

console.log("let objA = {valueOne: 1, valueTwo: 2};", objA.valueOne, objA.valueTwo);
console.log("let objB = {valueOne: 3, valueTwo: 4};", objB.valueOne, objB.valueTwo);
console.log("let objC = objA;", objC.valueOne, objC.valueTwo);


objA.valueOne = 11;
console.log("---------  objA.valueOne = 11  --------------");

console.log("objA ", objA.valueOne, objA.valueTwo);
console.log("objB ", objB.valueOne, objB.valueTwo);
console.log("objC ", objC.valueOne, objC.valueTwo);
console.log("=============================================");

// https://www.youtube.com/watch?v=-hBJz2PPIVE
// https://www.youtube.com/watch?v=9ooYYRLdg_g&t=581s
// https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0