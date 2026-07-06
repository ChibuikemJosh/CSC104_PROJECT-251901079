const usernameInput =
document.getElementById("username");

const passwordInput =
document.getElementById("password");

const phoneInput =
document.getElementById("phone");

const usernameFeedback =
document.getElementById("usernameFeedback");

const passwordFeedback =
document.getElementById("passwordFeedback");

const phoneFeedback =
document.getElementById("phoneFeedback");

const usernameRegex =
/^[A-Za-z0-9]{5,15}$/;

const passwordRegex =
/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/;

const phoneRegex =
/^\+234\d{10}$/;

usernameInput.addEventListener("input",()=>{

    if(usernameRegex.test(usernameInput.value)){

        usernameFeedback.textContent="✔ Valid Username";
        usernameFeedback.className="valid";

    }else{

        usernameFeedback.textContent="✖ Username must be 5-15 alphanumeric characters";
        usernameFeedback.className="invalid";

    }

});

passwordInput.addEventListener("input",()=>{

    if(passwordRegex.test(passwordInput.value)){

        passwordFeedback.textContent="✔ Strong Password";
        passwordFeedback.className="valid";

    }else{

        passwordFeedback.textContent="✖ Minimum 8 characters, one uppercase, one digit and one special character";
        passwordFeedback.className="invalid";

    }

});

phoneInput.addEventListener("input",()=>{

    if(phoneRegex.test(phoneInput.value)){

        phoneFeedback.textContent="✔ Valid Nigerian Number";
        phoneFeedback.className="valid";

    }else{

        phoneFeedback.textContent="✖ Format must be +234 followed by 10 digits";
        phoneFeedback.className="invalid";

    }

});