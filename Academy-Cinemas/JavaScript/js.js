//initialize popovers

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')

popoverTriggerList.forEach(function (element) {
    var imgSrc = element.getAttribute('data-bs-img');
    var content = "<img class='star-rating' src='" + imgSrc + "'>";
    new bootstrap.Popover(element, {
        content: content,
        html: true,
        trigger: 'hover',

    });
});

var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
})

function displaySelectedMovieOptions() {
    var movie = document.getElementById("movieSelect").options[document.getElementById('movieSelect').selectedIndex].text;
    var time = document.getElementById("timeSelect").options[document.getElementById('timeSelect').selectedIndex].text;
    var quantity = document.getElementById("quantity").value;

    var message = "Purchase Confirmed for: " + movie + "\nTime: " + time + "\nTickets: " + quantity;

    var toastBody = document.getElementById('ToastBody');
    toastBody.textContent = message;
    var toast = new bootstrap.Toast(document.getElementById('toastDisplay'));
    toast.show();
}

function buyTickets() {
    displaySelectedMovieOptions();
}

$(document).on("scroll", function () {
    if ($(document).scrollTop() > 50) {
        $("nav").addClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "-6px");
    } else {
        $("nav").removeClass("nav-shrink");
        $("div.navbar-collapse").css("margin-top", "14px");
    }
}

);

$(document).ready(function () {
    $(".nav-bar").on('click', '.nav-link:not(".dropdown-toggle"), .dropdown-item', function () {
        $(".navbar-collapse").collapse('hide');
    });
});
