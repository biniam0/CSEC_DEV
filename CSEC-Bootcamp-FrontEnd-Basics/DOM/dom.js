// const title = document.querySelectorAll(".list-items");
// for (i = 0; i < title.length; i++) {
//     title[i].style.fontSize = "3rem";
// }
// // console.log(title);



// Creating Element
const ul = document.querySelector("ul")
const li = document.createElement("li")
li.innerText = "Spider Verse"
li.classList.add("list-items")

// console.log(li.classList.contains("list-items"));

ul.append(li)



// Modifying the Text 
const firstListItem = document.querySelector(".list-items")
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);


// Traversing the DOM

// console.log(ul.parentNode);
// const html = document.documentElement
// console.log(html.parentNode);
const div = document.querySelector("div")
// console.log(div.childNodes);

console.log(ul.previousElementSibling );

let addition = (a, b) => a+b
console.log(addition(1,4))