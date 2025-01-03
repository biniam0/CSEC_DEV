let word1 = "Hello";
let word2 = "World";

let result = `${word1} ${word2}`

// console.log(result)

// document.getElementById('example').innerText = result;

const info = {
    f_name: "bini",
    l_name: "kebe"
};


const {f_name:fn, l_name:ln} = info;


// console.log(`${f_name} ${l_name}`)

// object literals
function addressMaker(address) {
    const {city, state} = address;
    const newAddress = {
        city,
        state,
        country: 'Ethiopia',
    };
    console.log(`${newAddress.city} ${newAddress.state} ${newAddress.country}`);
}

// addressMaker({city: 'Adama', state: 'Oromia'})

let income = [62000, 67000, 75000];
let total = 0

// for (let i = 0; i < income.length; i++) 
for (const i in income ) {
    // console.log(i)
    total += income[i]
}
// console.log(total)

// forEach() method
let txt = "";

function helper(val, idx, arr) {
    txt += val
}

// nums.forEach(helper)
// console.log(typeof(txt))

// example
let incomes = [1000, 2000, 3000];

for (let i in incomes) {
    incomes[i] += 500
    // console.log(income + 500)
}

// console.log(incomes)

const nums = [1,2,3,4,5,6];

var nums2 = [...nums];
function sum(x, y, z) {
    return x + y + z;
}
// console.log(sum.apply(null, nums));


// function add(a, b) {
//     console.log(a * b)
// }

// using arrow function
let add = (a, b) => (a+b);

// console.log(add(2,3))


// leetcode

function sumOfThree(num) {
    let x = num/3

    if (x == Math.floor(x)){
        return [x-1, x, x+1]
    }
    else {
        return []
    }
}

// console.log(sumOfThree(4))

const num = [1,2,3,4]
// console.log(num.includes(4))
// num = [5,5,6,7]

// console.log(num)

// ================

// default params 

function addition(a, b=5) {
    return a+b
}
// console.log(addition(5, 1))


// ==============
export const data = [1,2,3,4,5];


// ==============
let text = "5";
let padded = text.padEnd(4 ,"x");
// console.log(padded)

// ==============
class Arithmetic {
    constructor(a, b){
        this.a = a
        this.b = b
    }
    add(a, b) {
        return this.a + this.b
    }
}

const temp = new Arithmetic(4,3)
console.log(temp.add())
const 