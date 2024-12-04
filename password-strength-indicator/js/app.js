const passwordButton = document.querySelector("#passowrd-button");
const passwordInput = document.querySelector("#password-input");
const passwordOutput = document.querySelector("#password-output");
console.log(passwordButton, passwordInput);
passwordInput.addEventListener("input", function () {
  console.log(passwordInput.value);
  if (passwordInput.value.length < 8) {
    passwordOutput.innerText = "password is too short";
    passwordOutput.style.color = "red";
  } else {
    console.log("isLoweCase", passwordInput.value.search(/[a-z]/));
    if (passwordInput.value.search(/[a-z]/) == -1) {
      passwordOutput.innerText = "password is missing  a lowercase letter";
      passwordOutput.style.color = "red";
    } else if (passwordInput.value.search(/[A-Z]/) == -1) {
      passwordOutput.innerText = "password is missing a upperCase letter";
      passwordOutput.style.color = "red";
    } else if (passwordInput.value.search(/[0-9]/) == -1) {
      passwordOutput.innerText = "password is missing a number";
      passwordOutput.style.color = "red";
    } else {
      passwordOutput.innerText = "password is must strong";
      passwordOutput.style.color = "green";
    }
  }
});
