// Function to open the signup popup
function openSignupPopup() {
    document.getElementById("overlay-signup").style.display = "block";
    document.getElementById("signupForm").style.display = "block";
}

// Function to close the signup popup
function closeSignupPopup() {
    document.getElementById("overlay-signup").style.display = "none";
    document.getElementById("signupForm").style.display = "none";
}

// Function to handle signup form submission
function signup(event) {
    event.preventDefault();

    // Get the entered data
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    // Store data in local storage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    // Close the signup popup
    closeSignupPopup();
}

// Automatically open the signup popup after a few seconds
setTimeout(openSignupPopup, 200);


