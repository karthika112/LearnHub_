function handleLogin(event) {
    event.preventDefault();

    const correctEmail = "react@gmail.com";
    const correctPassword = "123456";
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === correctEmail && password === correctPassword) {
      alert(`Hello, thank you for logging in! Welcome back.`);
      // Redirect to another page if needed
      window.location.href = "index.html"; // Example redirect after login
    } else {
      alert("Invalid email or password. Please try again.");
    }
  }