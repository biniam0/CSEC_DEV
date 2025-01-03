// js code

// primitive type
// let f_name = "Jaleta";
// let age = 21;
// let student = true;
// let l_name = undefined;
// let graduate = null


let me = {
    f_name: "Ja",
    age: 21,
    student: true,
    l_name: undefined,
    graduate: null
};

// dot notation
let age = me.age
// console.log(age)

// bracket notation
age = me["age"]
// console.log(age)

let num = [1,2,3,4,5,6]

num.push(7)
let len = num.length


function greet(a, b) {
    console.log(a+b)
}


function sumOfThree(num) {
    let x = num / 3

}

let x = 4
// x == 4 ? console.log("True"): console.log("False")

// function swap(a, b) {
//     let temp = a
//     a = b
//     b = temp
//     console.log(a, b)
// }



const swap = (a, b) => {
    let temp = a
    a = b
    b = temp
    console.log(a, b)}

function grade(mark) {
    if (mark > 100 || mark < 0) {
        console.log("Invalid Mark")
    }  
    else if(mark >= 90 && mark <= 100){
        console.log("A")
    }
    else if (mark >= 80 && mark <= 89) {
        console.log("B")
    }
    else if (mark >= 70 && mark <= 79) {
        console.log("C")
    }
    else if (mark >= 60 && mark <= 69) {
        console.log("D")
    }
    else if (mark >= 0 && mark <= 59) {
        console.log("F")
    }
}

grade(99)

// document.getElementById("example") = grade(99)


import {data} from './es6beyond.js'

console.log(data)