function registerUser () {

    let userName = document.getElementById("register-username").nodeValue;
    let email = document.getElementById("register-email").nodeValue;
    let password = document.getElementById("register-pass").nodeValue;
    let passwordConfirm = document.getElementById("register-conf-pass").nodeValue;

    //username begins with a char
    //username can contain chars, numbers and underscores
    //username has min length and max length of 8 and 24 respectively

    let userNameRegex = /^[a-zA-Z]\w{7,24}$/;

    if(!userNameRegex.test(userName)) 
    {
        document.getElementById("reg-username-error").innerHTML= "Корисничко име мора да почне словом. Корисничко име мора да садржи 8-24. Дозвољени карактери су алфанумерици и доња црта </p>";
    }

}