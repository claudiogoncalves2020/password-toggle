"use strict";

//Variablen vergeben
//type von input tag von Passord zu text ändern

const inputPassword = document.querySelector("#input-password");
const btnPassword = document.querySelector("#btn-password");

btnPassword.addEventListener("click", () => {
  if (inputPassword.type === "password") {
    inputPassword.type = "text";
    btnPassword.innerText = "Hide Password";
  } else if (inputPassword.type === "text") {
    inputPassword.type = "password";
    btnPassword.innerText = "Show Password";
  }
});
