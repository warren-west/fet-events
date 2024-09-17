// DOM Elements

const paraElements = document.getElementsByClassName("para")

console.log(paraElements)

// paraElements[3].innerHTML = "Changed!"

// What about innerHTML?
// const myUl = document.createElement("ul")

// myUl.innerHTML = "<li>Item 1</li><li>Item 2</li>"

// document.body.appendChild(myUl)

let count = 1

for (let x of paraElements) {
    x.innerText += " " + count
    count++
}

// Make every second element red
for (let i = 1; i < paraElements.length; i += 2) {
    paraElements[i].style.color = "red"
}

paraElements[3].remove()