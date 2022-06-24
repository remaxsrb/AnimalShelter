let loggedUser = {
  username: "_",
  email: "_",
  password: "_",
};

function login() {
  let username = document.getElementById("login-username").value;
  let password = document.getElementById("login-pass").value;

  if (checkIfValid(username, password) != null) {
    loggedUser = checkIfValid(username, password);
    localStorage.setItem("loggedUser", JSON.stringify(loggedUser));
    location.href = "../webpages/index-user.html";
  }
}

//If verification is successful function returns user to be logged in
function checkIfValid(username, password) {
  let users = localStorage.getItem("users");

  if (users != null) {
    users = JSON.parse(users);
    let usernames = [];
    for (let i = 0; i < users.length; i++) {
      usernames.push(users[i].username);
    }

    if (!usernames.includes(username)) {
      document.getElementById("log-error").innerHTML = "Корисник не постоји";
      return null;
    }

    for (let i = 0; i < users.length; i++) {
      if (username == users[i].username) {
        if (password != users[i].password) {
          document.getElementById("log-error").innerHTML = "Погрешна лозинка";
          return null;
        }

        return users[i];
      }
    }
  }
}

function logout() {
  user = JSON.parse(localStorage.getItem("loggedUser"));
  if (user != null) {
    localStorage.removeItem("loggedUser");
    location.href = "../webpages/index.html";
  }
}
