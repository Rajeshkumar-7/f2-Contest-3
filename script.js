// Get all the tags from the document
// let email_box = document.querySelector("#email")
// let password_box = document.querySelector("#password")
let sumbit_btn = document.querySelector("#submit-btn")
let outPut_boxes = document.querySelectorAll(".warn")
let verified_outPut = document.querySelector("span")

// Initially Disable the submit button
sumbit_btn.disabled = true

// Add event listener to submit btn
sumbit_btn.addEventListener("click" , submitForm)

let emailVerified = false;
let passwordVerifed = false;
// Function for validating email
function checkEmail(){
    let email_box = document.querySelector("#email")
    let email = email_box.value
    if(email.length > 3 && email.includes("@") && email.includes(".")){
        outPut_boxes[0].innerHTML = ""
        emailVerified = true
    }else{
        outPut_boxes[0].innerHTML = "Make sure email is more than 3 characters and has @ and a ."
        emailVerified = false
    }
    checkAll()
}

// Function for validating password
function checkPassword(){
    let password_box = document.querySelector("#password")
    let password = password_box.value
    if(password.length > 8){
        outPut_boxes[1].innerHTML = ""
        passwordVerifed = true
    }else{
        outPut_boxes[1].innerHTML = "Make sure password is more than 8 characters."
        passwordVerifed = false
    }
    checkAll()
}

// Function to check if both email and password is verified
function checkAll(){
    if(emailVerified && passwordVerifed){
        verified_outPut.innerHTML = "All good to go!"
        sumbit_btn.disabled = false
    }else{
        verified_outPut.innerHTML = ""
        sumbit_btn.disabled = true
    }
}

// Function to submit the form
function submitForm(eventDetails){

    // Verify with the user whether to proceed or not
    let text = "Press ok to continue"
    if(confirm(text) == false){
        eventDetails.preventDefault()
    }else{
        alert("successful signup!")
    }
}
