function validator(){
    var form = document.getElementById("form")
    var email = document.getElementById("email").innerHTML
    var text = document.getElementById("text")

    let temp = "valid"
    if (email.endsWith("@gmail.com")) {
        valid(temp)
    }
    else {
        let temp = "invalid" 
        valid(temp)
    }
    
}
function valid(temp) {
    if (temp == "valid"){
        const element = document.getElementById("container");
        const tag = document.createElement("span");
        const item = document.createTextNode("Valid");
        tag.appendChild(item)
        element.appendChild(tag)
    }
    else {
        const element = document.getElementById("container");
        const tag = document.createElement("span");
        const item = document.createTextNode("Invalid");
        tag.appendChild(item)
        element.appendChild(tag)
    }

}