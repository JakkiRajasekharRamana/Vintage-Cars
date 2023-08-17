function openLoginPopup() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("loginForm").style.display = "block";
  }
  
  function closeLoginPopup() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById("loginForm").style.display = "none";
  }
  
  
  function login(event) {
    event.preventDefault();
  
    const loginUsername = document.getElementById("loginUsername").value;
    const loginPassword = document.getElementById("loginPassword").value;
  
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
  
    if (loginUsername === storedUsername && loginPassword === storedPassword) {
        alert("Login successful!");
        window.location.href = "home.html"; 
    } else {
        alert("Login failed. Check your credentials.");
    }
  }
  