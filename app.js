var signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var formData = new FormData(signupForm);
    var name = formData.get('name');
    var email = formData.get('email');
    var password = formData.get('password');


    if (!localStorage.getItem('userData')) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",

        });
    } else {

        var userData = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem('userData', JSON.stringify(userData));
    }
});

function submit(){
    window.open("home.html");

}
