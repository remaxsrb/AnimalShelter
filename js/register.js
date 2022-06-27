function registerUser() {
  let userName = document.getElementById("register-username").value;
  let email = document.getElementById("register-email").value;
  let password = document.getElementById("register-pass").value;
  let passwordConfirm = document.getElementById("register-conf-pass").value;

  checkFields(userName, email, password, passwordConfirm);
  if (!checkIfUserExists(userName)) addUser(userName, email, password);
  else
    document.getElementById("reg-username-error").innerHTML =
      "Корисничко име је заузето.";
}

function checkPassword(password, passwordConfirm) {
  let passwordRegexSet = [/^.{8,}$/, /[a-z]/, /[A-Z]/, /\d/, /[!@#\$%\^\&*._]/];

  if (passwordRegexSet[0].test(password) == false) {
    document.getElementById("reg-pass-error").innerHTML =
      "Лозинка мора да има бар 9 карактера";
  }
  if (passwordRegexSet[1].test(password) == false) {
    document.getElementById("reg-pass-error").innerHTML =
      "Лозинка мора да има бар једно мало слово";
  }
  if (passwordRegexSet[2].test(password) == false) {
    document.getElementById("reg-pass-error").innerHTML =
      "Лозинка мора да има бар једно велико слово";
  }
  if (passwordRegexSet[3].test(password) == false) {
    document.getElementById("reg-pass-error").innerHTML =
      "Лозинка мора да има бар једну цифру";
  }
  if (passwordRegexSet[4].test(password) == false) {
    document.getElementById("reg-pass-error").innerHTML =
      "Лозинка мора да садржи један од карактера:к !@#$%^&*._";
  }

  if (password != passwordConfirm) {
    document.getElementById("reg-conf-pass-error").innerHTML =
      "Лозинка и њена потврда се не поклапају!";
  }
}

function checkFields(userName, email, password, passwordConfirm) {
  checkUserName(userName);
  checkEmail(email);
  checkPassword(password, passwordConfirm);
}

function addUser(username, email, password) {
  let users = localStorage.getItem("users");
  users.push({
    username: username,
    email: email,
    password: password,
  });

  localStorage.setItem("users", JSON.stringify(users));
}

function checkUserName(username) {
  //username begins with a char
  //username can contain chars, numbers and underscores
  //username has min length and max length of 8 and 24 respectively

  let userNameRegex = /^[a-zA-Z]\w{7,24}$/;

  if (userNameRegex.test(username) == false) {
    document.getElementById("reg-username-error").innerHTML =
      "Корисничко име мора да почне словом. Корисничко име мора да садржи 8-24. Дозвољени карактери су алфанумерици и доња црта.";
  }
}

function checkEmail(email) {
  let emailRegex = /^[a-z]+\d?@[a-z]+.com/;

  if (emailRegex.test(email) == false) {
    document.getElementById("reg-email-error").innerHTML =
      "Адреса е-поште није исправно унета";
  }
}

function checkIfUserExists(username) {
  for (let i = 0; i < users.length; i++) {
    if (username == users[i].username) return true;
  }
  return false;
}
