const emailsAllowed = ["salvatore.bono2001@gmail.com", "mario.rossi1990@gmail.com", "VanessaPC@gmail.com", "LuisaIA@gmail.com"];
const inputEmail = document.getElementById("input-email");
const btnSignIn = document.getElementById("input-btn");


btnSignIn.addEventListener("click", function () {
    const email = inputEmail.value;
    let emailFound = false;
    for (let i = 0; i < emailsAllowed.length; i++) {


        if (email === emailsAllowed[i]) {
            console.log("Email valida");
            emailFound = true;
        }

    }
    console.log(emailFound);
})