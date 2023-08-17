function openSignupPopup() {
    document.getElementById("overlay-signup").style.display = "block";
    document.getElementById("signupForm").style.display = "block";
}

function closeSignupPopup() {
    document.getElementById("overlay-signup").style.display = "none";
    document.getElementById("signupForm").style.display = "none";
}

function signup(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    closeSignupPopup();
}
setTimeout(openSignupPopup, 200);


