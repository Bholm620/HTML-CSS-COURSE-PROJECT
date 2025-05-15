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
document.getElementById('contactForm').addEventListener('submit',
    function (event) {
        event.preventDefault();
        //variables to validate each field is filled out
        const firstName = document.getElemenetById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        //email check
        const emailPattern = /^[a-aZ-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2, 4}$/;

        //message on email stuff

        const valMsg = document.getElementById('validateMsg');

        if (!firstName || !lastName || !phone || !message) {
            //checks if fields have been filled out
            valMsg.innerHTML = '<p style="color: red;">please fill out all empty fields</p>';
        } else if (!emailPattern.test(email)) {
            //checks valid email
            valMsg.innerHTML = '<p style = "color: red;">Please enter a valid email, okay?</p>'
            valMsg.innerHTML = '<p style = "color: red;">gracious por submission</p>'
        }
        const formData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            message: message,
            subscribe: document.getElementById('subscription').checked
        };
    }

    //displays what the user wrote
    console.log(JSON.stringify(formData))

)