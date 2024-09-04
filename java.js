document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (username === "" || email === "" || phone === "" || password === "" || confirmPassword === "") {
        alert("All fields are required.");
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be 10 digits and numeric.");
        return;
    }

    var emailPattern = /^[^\s@]+@[^\s@]{3,}\.[a-z]{2,3}$/i;
    if (!emailPattern.test(email)) {
        alert("Invalid email format.");
        return;
    }

    var passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must be at least 7 characters long, with at least one capital letter, one digit, and one special character from the set (&,$,#@).");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    alert("Registration successful!");
});
