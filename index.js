const phoneInput = document.getElementById("phonenumber");

const phonePattern = /^\+\d{1,3}(?:\s?)\d{3,4}(?:\s?)\d{3,4}(?:[-\s]?)\d{4,5}$/;

phoneInput.addEventListener("input", () => {
    if (phonePattern.test(phoneInput.value)) {
        phoneInput.style.borderColor = "rgb(0, 167, 0)";
    } else {
        phoneInput.style.borderColor = "";
    }
});

const passwordInput = document.querySelector(".pw");

const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[!./@#$%^&*])[A-Za-z\d!./@#$%^&*]{6,}$/;

passwordInput.addEventListener("input", () => {
    if (passwordPattern.test(passwordInput.value)) {
        passwordInput.style.borderColor = "rgb(0, 167, 0)";
    } else {
        passwordInput.style.borderColor = "rgb(255, 0, 0)";
    }
});

const errormessage = document.querySelector(".errormessage");
const confirmpw = document.getElementById("confirm-password");

confirmpw.addEventListener("input", () => {
    if (confirmpw.value === password.value) {
        passwordInput.style.borderColor = "rgb(0, 167, 0)";
        confirmpw.style.borderColor = "rgb(0, 167, 0)";
        errormessage.style.color = "rgb(0, 167, 0)";
        errormessage.textContent = "Passwords now match";
    }
    else if (confirm.value !== password.value) {
        errormessage.textContent = "Passwords do not match";
        confirmpw.style.borderColor = "rgb(255, 0, 0)";
        errormessage.style.color = "rgb(255, 0, 0)";
    }
})

const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");

firstname.addEventListener("input", () => {
    if (firstname.value !== "") {
        firstname.style.borderColor = "rgb(0, 167, 0)";
    }
});
lastname.addEventListener("input", () => {
    if (lastname.value !== "") {
        lastname.style.borderColor = "rgb(0, 167, 0)";
    }
});
const button = document.querySelector("button");

button.addEventListener("click", (e) => {
    if (confirmpw.value !== password.value) {
        passwordInput.style.borderColor = "rgb(255, 0, 0)";
        confirmpw.style.borderColor = "255, 0, 0";
        errormessage.classList.toggle("hide");
        errormessage.textContent = "Passwords do not match";
        e.preventDefault();
    }
    else {
        errormessage.classList.toggle("hide");
        passwordInput.style.borderColor = "rgb(0, 167, 0)";
        confirmpw.style.borderColor = "rgb(0, 167, 0)";
        errormessage.style.color = "rgb(0, 167, 0)";
        errormessage.textContent = "Passwords now match";
    }
});