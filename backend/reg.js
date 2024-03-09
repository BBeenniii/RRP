document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("RegistrationForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        const userData = {
            name: name,
            email: email,
            password: password
        };

        fetch("http://localhost:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert("Registration successful!");
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Registration failed. Please try again later.");
        });
    });
});
