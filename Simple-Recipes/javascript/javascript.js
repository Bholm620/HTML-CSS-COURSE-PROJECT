//recipe

//sets up the buttons
var btns = document.querySelectorAll("input.modal-button");

//defines all modals for eACH recipe
var modals = document.querySelectorAll(".recipe-modal");

//get the span element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

//open the modal upon clicking recipe button
for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute
            ("href"));
        modal.style.display = "block";
        const myTimeout = setTimeout(myGreeting, 10000);
    }
}

//when the user cvlivks on span
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//email validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // this gets form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // email check
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // message on email stuff
    const valMsg = document.getElementById('validateMsg');

    if (!firstName || !lastName || !phone || !message) {
        valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
        return;  // stop execution if invalid
    } else if (!emailPattern.test(email)) {
        valMsg.innerHTML = '<p style="color: red;">Please enter a valid email, okay?</p>';
        return;
    }

    // Clear any validation message if all good
    valMsg.innerHTML = '';

    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById('subscription').checked
    };

    // display what the user wrote
    console.log(JSON.stringify(formData));
});