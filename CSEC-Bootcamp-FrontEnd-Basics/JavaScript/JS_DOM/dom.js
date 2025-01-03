// const screen = document.getElementById('screen');
const screen = document.getElementById('screen');

const element = document.getElementById("container");
const para = document.createElement("button");
const node = document.createTextNode("Age");
para.appendChild(node);
element.appendChild(para);

const new_button = document.getElementsByTagName("button")[3];
const age_click = document.createAttribute("onclick")
age_click.value = "age_fun()"
new_button.setAttributeNode(age_click)
 





function name_fun() {
    screen.textContent = "Biniam"
}
function dept_fun() {
    
    screen.textContent = "SWE"
}
function campus_fun() {
    screen.textContent = "ASTU"
}
function campus_fun() {
    screen.textContent = "ASTU"
}
function age_fun() {
    screen.textContent = "21"
}

