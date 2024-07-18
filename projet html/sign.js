// Static list of users
let users = [
    { email: "user1@example.com", password: "password1" },
    { email: "user2@example.com", password: "password2" },
    { email: "user3@example.com", password: "password3" }
];

// Function to handle login form submission
function login(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get user input
    const emailInput = document.getElementById("maill").value;
    const passwordInput = document.getElementById("pass").value;

    // Check if provided email and password match any user
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email === emailInput && user.password === passwordInput) {
            userFound = true;
            break; // Exit the loop if user is found
        }
    }

    if (userFound) {
        alert("Login successful!");
        window.location.href = "Untitled-ex1.html";
        // Redirect or perform further actions here
    } else {
        alert("Invalid email or password. Please try again.");
    }
    return false;
}

// Function to handle signup form submission
function signup(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get user input
    const emailInput = document.getElementById("signup-email").value;
    const passwordInput = document.getElementById("signup-password").value;
    const passwordConfirmInput = document.getElementById("signup-password-confirm").value;

    // Check if passwords match
    if (passwordInput !== passwordConfirmInput) {
        alert("Passwords do not match. Please try again.");
        return false;
    }

    // Check if email already exists
    const emailExists = users.some(user => user.email === emailInput);
    if (emailExists) {
        alert("Email already exists. Please use a different email.");
        return false;
    }

    // Add new user to the list
    users.push({ email: emailInput, password: passwordInput });
    alert("Signup successful! You can now log in.");

    // Log the list of users to the console
    console.log(users);

    // Optionally, switch to the login form after successful signup
    document.querySelector(".toggle-left #login").click();
    return false;
}

// Event listeners for toggle buttons
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
