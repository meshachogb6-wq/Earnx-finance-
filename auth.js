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

}// ===============================
// Register Page - auth.js
// ===============================

// Show / Hide Password

const password = document.getElementById("password");
const toggle = document.getElementById("togglePassword");

if (toggle && password) {
    toggle.onclick = function () {
        if (password.type === "password") {
            password.type = "text";
            toggle.classList.remove("fa-eye");
            toggle.classList.add("fa-eye-slash");
        } else {
            password.type = "password";
            toggle.classList.remove("fa-eye-slash");
            toggle.classList.add("fa-eye");
        }
    };
}

// Country → State

const country = document.getElementById("country");
const state = document.getElementById("state");

const states = {
    Nigeria: [
        "Abia","Adamawa","Akwa Ibom","Anambra","Bauchi","Bayelsa",
        "Benue","Borno","Cross River","Delta","Ebonyi","Edo",
        "Ekiti","Enugu","FCT Abuja","Gombe","Imo","Jigawa",
        "Kaduna","Kano","Katsina","Kebbi","Kogi","Kwara",
        "Lagos","Nasarawa","Niger","Ogun","Ondo","Osun",
        "Oyo","Plateau","Rivers","Sokoto","Taraba","Yobe","Zamfara"
    ],

    Ghana: [
        "Greater Accra","Ashanti","Central","Eastern",
        "Northern","Volta","Western"
    ],

    Kenya: [
        "Nairobi","Mombasa","Kisumu","Nakuru","Kiambu"
    ],

    "South Africa": [
        "Gauteng","KwaZulu-Natal","Western Cape",
        "Eastern Cape","Limpopo"
    ],

    Cameroon: [
        "Centre","Littoral","North West",
        "South West","Far North"
    ]
};

if (country) {

    country.onchange = function () {

        state.innerHTML = '<option value="">Select State</option>';

        if (states[this.value]) {

            states[this.value].forEach(function (item) {

                let option = document.createElement("option");

                option.value = item;
                option.textContent = item;

                state.appendChild(option);

            });

        }

    };

}

// Register Form

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        if (password.value !== confirmPassword) {

            alert("Passwords do not match.");

            return;

        }

        alert("Registration Successful!\nA verification code has been sent to your email.");

        window.location.href = "verify-email.html";

    });

        }
