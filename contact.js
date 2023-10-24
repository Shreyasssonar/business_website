document.getElementById("contactForm").addEventListener("submit", function (event) {
    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");
    let attachment = document.getElementById("attachment");
    let valid = true;

    if (name.value.trim() === "") {
        valid = false;
        name.classList.add("error");
    } else {
        name.classList.remove("error");
    }

    if (email.value.trim() === "" || !isValidEmail(email.value)) {
        valid = false;
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

    if (subject.value.trim() === "") {
        valid = false;
        subject.classList.add("error");
    } else {
        subject.classList.remove("error");
    }

    if (message.value.trim() === "") {
        valid = false;
        message.classList.add("error");
    } else {
        message.classList.remove("error");
    }

    if (attachment.files.length > 4) {
        valid = false;
        attachment.classList.add("error");
    } else {
        attachment.classList.remove("error");
    }

    if (valid === false) {
        event.preventDefault();
    }
});

function isValidEmail(email) {
    // Add your email validation logic here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}