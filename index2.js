// Function to open the login popup
function openLoginPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loginForm").style.display = "block";
  }
  
  // Function to close the login popup
  function closeLoginPopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
  }
  
  
  // Function to handle login form submission
  function login(event) {
    event.preventDefault();
  
    // Get entered login data
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    // Retrieve stored signup data
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    // Check if entered data matches stored data
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; // Redirect to the home page
    } else {
        alert("Login failed. Check your credentials.");
    }
  }
  