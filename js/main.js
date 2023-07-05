const emailsAllowed = ["salvatore.bono2001@gmail.com", "mario.rossi1990@gmail.com", "VanessaPC@gmail.com", "LuisaIA@gmail.com"];
const inputEmail = document.getElementById("input-email");
const btnSignIn = document.getElementById("input-btn");


btnSignIn.addEventListener("click", function () {
    const email = inputEmail.value;
    for (let i = 0; i < emailsAllowed.length; i++) {


        if (email === emailsAllowed[i]) {
            console.log("Email valida");
        }

    }
    if (email != emailsAllowed) {
        console.log("Email errata");
    }
})