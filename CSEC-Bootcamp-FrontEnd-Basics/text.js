function toGoAges(age) {
    let max_age = 100
    let days = 100*365 - age*365
    let weeks = 100*52 - age*52
    let months = 100*12 - age*12
    console.log(`You have ${days} days, ${weeks} weeks and ${months} monthes left.`)
}

// toGoAges(21)

let num = Math.random()*1000
// console.log(Math.floor(num))

function leapYear(year) {
    let res = ""
    if (year % 4 == 0) {
        if (year % 100 != 0) {
            res = "Leap"
        }
        else {
            if (year % 400 == 0) {
                res = "Leap"
            }
            else {
                res = "Not Leap"
            }
        }
    }
    else {
        res = "Not Leap"
    }
    return res
}

// console.log(leapYear(2000))

const prompt = require("prompt-sync")({sigint:true})


const output = []
let count = 1

function fizzBuzz() {
    if (count % 3 == 0 && count % 5 == 0) {
        output.push("FizzBuzz")
    }
    else if (count % 3 == 0) {
        output.push("Fizz")
    }
    else if (count % 5 == 0) {
        output.push("Buzz")
    }
    else {
        output.push(count)
    }
    count++;
    console.log(output)
}
for (let count = 1; count <= 100; count++) {
    if (count % 3 == 0 && count % 5 == 0) {
        output.push("FizzBuzz")
    }
    else if (count % 3 == 0) {
        output.push("Fizz")
    }
    else if (count % 5 == 0) {
        output.push("Buzz")
    }
    else {
        output.push(count)
    }
    // count++
}
// console.log(output)

const names  = ["Bini", "Bura", "Mesaye", "Senu", "Selame", "Bini", "Bura", "Mesaye", "Senu", "Selame"]

function whosPaying(names) {
    let tmp = Math.random()*10
    tmp = Math.floor(tmp)
    console.log(`${names[tmp]} is going to but lunch today!`)
}
// whosPaying(names)

let seq = [0, 1]
function fibonacciGenerator(num) {
    if (num == 1) {
        console.log([0])
    }
    else if (num == 2) {
        console.log([0, 1])
    }
    else if (num == 0)
        console.log([])
    else {
        for (let i=0; i < num-2; i++) {
            let len = seq.length
            let new_num = seq[len-1] + seq[len-2]
            seq.push(new_num)
        }
        console.log(seq)
    }
}

fibonacciGenerator(8b)
