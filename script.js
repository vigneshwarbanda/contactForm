document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let messageError = document.getElementById("messageError");
    let successMsg = document.getElementById("successMsg");

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";
    successMsg.textContent = "";

    let isValid = true;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "") {
        nameError.textContent = "Name is required.";
        isValid = false;
    }

    if (!emailPattern.test(email)) {
        emailError.textContent = "Enter a valid email.";
        isValid = false;
    }

    if (message === "") {
        messageError.textContent = "Message cannot be empty.";
        isValid = false;
    }

    if (isValid) {
        successMsg.textContent = "Form submitted successfully!";
        document.getElementById("contactForm").reset();
    }
});
