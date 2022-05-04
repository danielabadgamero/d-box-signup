let inputs = [...document.querySelectorAll("input")]
inputs.splice(inputs.length - 1, 1);
const err = document.createElement("para");
let valid = [false, false, false, false]
const submit = document.querySelector("input[type='submit']");
submit.disabled = true;

inputs.forEach((input) => {
    input.addEventListener("change", () => {
        if (input.id === "username-reg") {
            if (input.value.length < 3) {
                if (!input.classList.contains("incorrect")) {
                    input.classList.add("incorrect");
                    err.textContent = "Username must be between 3 and 16 characters long!";
                    input.parentNode.appendChild(err);
                    valid[0] = false;
                }
            } else if (input.value.length > 16) {
                if (!input.classList.contains("incorrect")) {
                    input.classList.add("incorrect");
                    err.textContent = "Username must be between 3 and 16 characters long!";
                    input.parentNode.appendChild(err);
                    valid[0] = false;
                }
            } else {
                input.classList.remove("incorrect");
                input.classList.add("correct");
                valid[0] = true;
                input.parentNode.removeChild(err);
            }
        }
        if (input.id === "email") {
        if (input.value.indexOf("@") < 0) {
                input.classList.add("incorrect");
                err.textContent = "Email must contain @!";
                input.parentNode.appendChild(err);
                valid[1] = false;
            } else {
                input.classList.remove("incorrect");
                input.classList.add("correct");
                valid[1] = true;
                input.parentNode.removeChild(err);
            }
        }
        if (input.id === "password-rep") {
            if (input.value !== document.getElementById("password-reg").value) {
                document.getElementById("password-reg").classList.add("incorrect");
                input.classList.add("incorrect");
                err.textContent = "Passwords do not match!";
                input.parentNode.appendChild(err);
                valid[3] = false;
            } else {
                input.classList.remove("incorrect");
                input.classList.add("correct");
                document.getElementById("password-reg").classList.remove("incorrect");
                document.getElementById("password-reg").classList.add("correct");
                valid[3] = true;
                input.parentNode.removeChild(err);
            }
        }
        if (input.id === "password-reg") {
            if (input.value.length < 8) {
                if (!input.classList.contains("incorrect")) {
                    input.classList.add("incorrect");
                    err.textContent = "Password must be between 8 and 16 characters long!";
                    input.parentNode.appendChild(err);
                    valid[2] = false;
                }
            } else if (input.value.length > 16) {
                if (!input.classList.contains("incorrect")) {
                    input.classList.add("incorrect");
                    err.textContent = "Password must be between 8 and 16 characters long!";
                    input.parentNode.appendChild(err);
                    valid[2] = false;
                }
            } else {
                input.classList.remove("incorrect");
                input.classList.add("correct");
                valid[2] = true;
                input.parentNode.removeChild(err);
            }
        }
        if (valid.indexOf(false) < 0) {
            submit.disabled = false;
        } else {
            submit.disabled = true;
        }
    })
})