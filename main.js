// change input field label display
const inputLists = document.querySelectorAll('input');
Array.from(inputLists).forEach(changeLabelDisplay);

function changeLabelDisplay(input) {
    input.addEventListener('input', function (e) {
        e.preventDefault;
        if (e.target.value.length > 0) {
            e.target.previousElementSibling.style.display = "initial";
        } else {
            e.target.previousElementSibling.style.display = "none";
        }
    });
}


// check input validation
const submitButton = document.querySelector('#submit-button');
var validList = [0,0,0,0];
submitButton.addEventListener('click', function (e) {
    e.preventDefault;
    Array.from(inputLists).forEach(checkInput);    

    const selection = document.querySelector('#selection');
    if(selection.value.length < 1){
        selection.style.borderColor = "red";
        selection.nextElementSibling.nextElementSibling.style.display = "block";
        validList[2] = 0;
    }else{
        selection.style.borderColor = "lightgray";
        selection.nextElementSibling.style.display = "none";
        validList[2] = selection.value;
    }

    if(validList.indexOf(0) == -1){
        alert("name: " + validList[0]
        + "\n\nemail: " + validList[1]
        + "\n\nselection: " + validList[2]
        + "\n\npassword: " + validList[3]);
    }
});

function checkInput(list) {
    switch (list.id) {
        case "name":
            if(list.value.length < 1){
                list.style.borderColor = "red";
                list.previousElementSibling.style.color = "red";
                list.nextElementSibling.style.display = "block";
                validList[0] = 0;
            }else{
                list.style.borderColor = "lightgray";
                list.previousElementSibling.style.color = "lightgray";
                list.nextElementSibling.style.display = "none";
                validList[0] = list.value;
            }
            break;

        case "email":
            const emailValid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
            if(!list.value.match(emailValid)){
                list.style.borderColor = "red";
                list.previousElementSibling.style.color = "red";
                list.nextElementSibling.style.display = "block";
                validList[1] = 0;
            }else{
                list.style.borderColor = "lightgray";
                list.previousElementSibling.style.color = "lightgray";
                list.nextElementSibling.style.display = "none";
                validList[1] = list.value;
            }
            break;

        case "password":
            if(list.value.length < 8){
                list.style.borderColor = "red";
                list.previousElementSibling.style.color = "red";
                list.nextElementSibling.nextElementSibling.style.color = "red";
                list.nextElementSibling.style.display = "block";
                validList[3] = 0;
            }else{
                list.style.borderColor = "lightgray";
                list.previousElementSibling.style.color = "lightgray";
                list.nextElementSibling.nextElementSibling.style.color = "lightgray";
                validList[3] = list.value;
            }
            break;
    }

}


// toggle password visibility
const togglePassword = document.querySelector('#eye-icon');
const password = document.querySelector('#password');

togglePassword.addEventListener('click', function (e) {

    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
});
