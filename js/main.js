const emailsAllowed = ["salvatore.bono2001@gmail.com", "mario.rossi1990@gmail.com", "VanessaPC@gmail.com", "LuisaIA@gmail.com"];
const inputEmail = document.getElementById("input-email");
const btnSignIn = document.getElementById("input-btn");


btnSignIn.addEventListener("click", function () {
    const email = inputEmail.value;
    /* La variabile "emailFound" ti identifica se hai trovato la mail oppure no */
    let emailFound = false;
    /* PROCEDIMENTO: "digito l'email", al click del btn,  l'email in generale sono false (quindi viene stampato false) ma "SE" l'email digitata è uguale  alla variabile "emailsAllowed" diventa Vera,  quindi stampa "email valida". praticamente la variabile "emailFound" è un identificativo che in automatico ti rende tutte "l'email errate" ma se è corretta cambia e diventa true */
    for (let i = 0; i < emailsAllowed.length; i++) {


        if (email === emailsAllowed[i]) {
            emailFound = true;
        }
    }
    if (emailFound === true) {
        console.log("Email Valida")
    }
    else {
        console.log("Email Errata")
    }
})