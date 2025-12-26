window.onload = () => {
    document.getElementById("form").reset();
};




const userName = document.getElementById("username");
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmpassword");
const btn = document.getElementById("signupbtn");
const login = document.getElementById("login")


btn.addEventListener("click", function () {

    const allUsers = JSON.parse(localStorage.getItem('allUsers')) || []
    if (
        userName.value === "" ||
        firstName.value === "" ||
        lastName.value === "" ||
        email.value === "" ||
        password.value === "" ||
        confirmPassword.value === ""
    ) {
        alert("Please fill the form");
        return;
    }

    if (password.value !== confirmPassword.value) {

        alert("password and confirmPassword are not same");
        return;
    }
    if (password.value.length < 8) {

        alert("password must be in 8 words");
        return;
    }


    const userNameAlreadyExists = allUsers.find(function (userData) {
        return userData.userName.toLowerCase() == userName.value.toLowerCase();
    });
    if (userNameAlreadyExists) {
        alert("user name already exists");
        return;
    }

    const emailAlreadyExists = allUsers.find(function (userData) {
        return userData.email.toLowerCase() == email.value.toLowerCase();
    });
    if (emailAlreadyExists) {
        alert("email  already exists");
        return;
    }

    const passwordAlreadyExists = allUsers.find(function (userData) {
        return userData.password.toLowerCase() == password.value.toLowerCase();
    });
    if (passwordAlreadyExists) {
        alert("password already exists");
        return;
    }

    alert("Signup Successful!");


    var userDetails = {

        userName: userName.value,
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
    }

    allUsers.push(userDetails)

    localStorage.setItem('allUsers', JSON.stringify(allUsers))



    document.getElementById("page").style.display = "none";
    document.getElementById("loginpage").style.display = "block";

});

login.addEventListener("click", function () {
    document.getElementById("page").style.display = "none";
    document.getElementById("loginpage").style.display = "block";
});

// ===============================
// ===============================


document.addEventListener('DOMContentLoaded', function () {

    const loginEmail = document.getElementById('loginEmail');
    const loginpassword = document.getElementById('loginpassword');
    const loginbtn = document.getElementById('loginbtn');
    const jobpage = document.getElementById('jobpage');

    loginbtn.addEventListener('click', function () {

        // Check if fields are empty
        if (!loginEmail.value.trim() || !loginpassword.value.trim()) {
            return alert("Please fill in all fields.");
        }

        // Check password length
        if (loginpassword.value.length < 8) {
            return alert("Password must be at least 8 characters.");
        }

        // Get users from localStorage
        const allUsers = JSON.parse(localStorage.getItem('allUsers')) || [];

        // Check if user exists
        const isExists = allUsers.find(function (userData) {
            return userData.email.toLowerCase() === loginEmail.value.toLowerCase();
        });

        if (!isExists) {
            return alert("No account found. Please sign up first.");
        }

        // Check password
        if (isExists.password === loginpassword.value) {
            alert("Congratulations! You are logged in.");
            document.getElementById("loginpage").style.display = "none";
            document.getElementById("jobpage").style.display = "block";

        } else {
            alert("Incorrect password. Try again.");
        }

    });

});
