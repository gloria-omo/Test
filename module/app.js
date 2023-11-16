// Dot Notation for addition
const myAddition = require("./math")
let firstNumber = 20
let secondNumber = 5
const result =myAddition.add(firstNumber,secondNumber)
console.log(result)

// destructuring methods add

const {add,sub,mul,div} = require("./math")
let firstNumber1 = 20
let secondNumber2 = 5
const result2 =add(firstNumber1,secondNumber2)
console.log(result2)

// Dot Notation for subtracting
const myStraction = require("./math")
let fristNumbersub = 20
let secondNumbersub = 5
const solution = myStraction.sub(fristNumbersub,secondNumbersub)
console.log(solution)

// destructuring methods sub

let firstNumbersub1 = 20
let secondNumbersub2 = 5
const resultsub2 =sub(firstNumbersub1,secondNumbersub2)
console.log(resultsub2)

// dot notation for multipulation
const myMultipulation = require("./math")
let firstNumbermul = 20;
let secondNumbermul = 5;
const resultmul = myMultipulation.mul(firstNumbermul,secondNumbermul)
console.log(resultmul);

// destructuring method multipulation
let firstNumbermul1 = 20;
let secondNumbermul2 = 5;
const resultmul2 = mul(firstNumbermul1,secondNumbermul2)
console.log(resultmul2)

// Dot notation for division
const mydiv = require("./math")
let firstNumberdiv = 5
let secondNumberdiv = 20
const resultdiv = mydiv.div(firstNumberdiv,secondNumberdiv)
console.log(resultdiv)

// destructuring method division

let firstNumberdiv1 = 5
let secondNumberdiv2 = 20
const resultdiv2 = div(firstNumberdiv1,secondNumberdiv2)
console.log(resultdiv2)