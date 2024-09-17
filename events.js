// DOM Elements
const paraEl = document.getElementById("para")
const selectCarsEl = document.getElementById("select-cars")
// const audiOptionEl = document.getElementById("Audi")
const btnSubmitFormEl = document.getElementById("btn-submit-form")
const inputFNameEl = document.getElementById("first-name")

// Event Listeners
selectCarsEl.addEventListener("change", (event) => selectChange(event))
btnSubmitFormEl.addEventListener("click", (event) => validateFormData(event))
inputFNameEl.addEventListener("change", (event) => inputChangeFunc(event))


// Event Handlers
function myFunc() {
    console.log("myFunc() fired!")

    console.log(paraEl)

    paraEl.innerText = "New Text"
}

function paraClick() {
    console.log("Paragraph element was clicked!")
}

function inputChangeFunc(event) {
    // console.log("input element text was changed!")
    // console.log(event.target.value)

    // Validate input text
    // 1. Should not be empty
    // 2. Should be at least 3 characters

    if (event.target.value == "") {
        // if empty OR too little character then error
        console.log("Input is empty!")
    }
    else if (event.target.value.length < 3) {
        console.log("Input needs to be more than 3 characters!")

    } else {
        // else success
        console.log("Success!")
    }

}

function selectChange(event) {
    console.log("Select box was changed!")

    // console.log(event) // event -> target -> value
    console.log(event.target.value)
}

function validateFormData(event) {
    event.preventDefault() // stop page refreshing

    // Do some form validation
    // We can copy paste for the fname from above
    if (inputFNameEl.value == "") {
        // if empty OR too little character then error
        console.log("Input is empty!")
    }
    else if (inputFNameEl.value.length < 3) {
        console.log("Input needs to be more than 3 characters!")

    } else {
        // else success
        console.log("First name is okay!")
    }

    // Then validate the select box (shouldn't be default option)
    // console.log("Select value:", selectCarsEl.value)

    // Check if the selected car brand is "default"
    if (selectCarsEl.value.toLowerCase() !== "default".toLowerCase()) {
        // Change CSS class to is-valid
        selectCarsEl.classList = "is-valid"
        console.log("Success!")
    } else {
        selectCarsEl.classList = "is-error"
        console.log("Please select a valid car brand from the list")

        // Change CSS class to is-error
    }
}

// Note: An arrow function is treated like a variable
// It can be passed around in the same way a variable can

let listOfCarBrands = [
    "Audi",
    "BMW",
    "Mercedes",
    "Tesla",
]

function populateSelectBox(listOfCarBrands) {
    for (let brand of listOfCarBrands) {
        let newEl = document.createElement("option")
        newEl.id = brand
        newEl.value = brand
        newEl.innerText = brand

        selectCarsEl.appendChild(newEl)
    }
}

populateSelectBox(listOfCarBrands)