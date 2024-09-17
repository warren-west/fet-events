// DOM elements
const btnJump = document.getElementById("btn-jump")

// Event Listeners
btnJump.addEventListener("mousemove", (event) => jump(event))
btnJump.addEventListener("click", win)

function win() {
    console.log("You win!")
}

function jump(event) {    
    // Getting width & height of the window
    let w = window.innerWidth
    let h = window.innerHeight

    // Generating new random top and left positions
    let x = Math.trunc(Math.random() * (w - parseInt(event.srcElement.style.width, 10)))
    let y = Math.trunc(Math.random() * (h - parseInt(event.srcElement.style.height, 10)))

    // Setting the new top & left styles
    event.srcElement.style.left = `${x}px`
    event.srcElement.style.top = `${y}px`

    // Getting the button width & height
    // console.log(parseInt(event.srcElement.style.width, 10))
    // console.log(parseInt(event.srcElement.style.height, 10))

    // console.log("w", w)
    // console.log("h", h)
    // console.log("x", x)
    // console.log("y", y)
}