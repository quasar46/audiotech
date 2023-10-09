document.addEventListener('DOMContentLoaded', function () {

    const email = document.getElementById("inputEmail");

    const validForm = function () {
        email.addEventListener("input", function (event) {
            if (email.validity.typeMismatch) {
                email.style.borderColor = "#FF0000";
                email.previousElementSibling.classList.add('error');
            } else {
                email.style.borderColor = "#0BBC61";
                email.previousElementSibling.classList.remove('error');
            }
        });
    }

    validForm();
})

