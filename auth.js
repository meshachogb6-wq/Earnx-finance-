// ================================
// EarnX-Finance Authentication
// auth.js
// ================================

// Show / Hide Password

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

if (toggle && password) {

    toggle.addEventListener("click", () => {

        if (password.type === "password") {

            password.type = "text";
            toggle.classList.remove("fa-eye");
            toggle.classList.add("fa-eye-slash");

        } else {

            password.type = "password";
            toggle.classList.remove("fa-eye-slash");
            toggle.classList.add("fa-eye");

        }

    });

}

// Login Form

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const button = document.querySelector(".auth-btn");

        button.innerHTML = "Logging in...";

        button.disabled = true;

        setTimeout(() => {

            alert("Login Successful!");

            window.location.href = "dashboard.html";

        }, 1500);

    });

}
