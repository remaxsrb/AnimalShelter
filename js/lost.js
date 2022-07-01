$(document).ready(function () {
  let currLostAnimal = JSON.parse(localStorage.getItem("currLostAnimal"));
  let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"));

  if (currLostAnimal == null) {
    window.location.href = "losts.html";
  }

  $(".lost-name").text(currLostAnimal.petName);
  $(".add-name").text("Име љубимца: " + currLostAnimal.petName);
  $(".add-user").text("Име корисника: " + currLostAnimal.user);
  $(".add-desc").text("Опис: " + currLostAnimal.opis);
  $(".add-phone").text("Контакт телефон: " + currLostAnimal.phone);
  let currUser = null;
  if (
    localStorage.getItem("loggedUser") != "" &&
    localStorage.getItem("loggedUser") != null
  ) {
    currUser = JSON.parse(localStorage.getItem("loggedUser"));
    let myAdd = false;

    if (currLostAnimal.user == currUser.username) {
      myAdd = true;
    }

    if (myAdd) {
      $("#delete-button").show();
    } else {
      $("#delete-button").hide();
    }
  } else {
    $("#delete-button").hide();
    $(".comment-form").hide();
  }

  showComments();

  $("#comment-submit").click(function () {
    $("#msg-empty-error").text("");

    let msg = $("#message").val();

    if (msg == "") {
      $("#msg-empty-error").text("Niste uneli tekst komentara");
      return false;
    } else {
      let user = JSON.parse(localStorage.getItem("loggedUser"));

      let comment = {
        author: user.username,
        message: msg,
        add: currLostAnimal.petName,
      };

      let comments = JSON.parse(localStorage.getItem("comments"));

      comments.push(comment);
      localStorage.setItem("comments", JSON.stringify(comments));
      sessionStorage.setItem("loggedUser", JSON.stringify(user));

      let num = 0;

      comments = JSON.parse(localStorage.getItem("comments"));

      for (let i = 0; i < comments.length; i++) {
        if (comments[i].add == currLostAnimal.petName) num++;
      }

      $("#message").val("");
      $("#recipe-comments").text(num + " коментара");

      showComments();
    }
  });

  function showComments() {
    let comments = JSON.parse(localStorage.getItem("comments"));
    let commentSection = "";
    for (let i = 0; i < comments.length; i++) {
      if (comments[i].add == currLostAnimal.petName) {
        commentSection +=
          "<li class='comment-item'>" +
          "<div class='comment-body'>" +
          "</div>" +
          "<div class='comment-text'>" +
          "<h3>" +
          comments[i].author +
          "</h3>" +
          "<p>" +
          comments[i].message +
          "</p>" +
          "</div>" +
          "</div>" +
          "</li>";
      }
    }
    $(".comment-list").html(commentSection);

    let num = 0;

    comments = JSON.parse(localStorage.getItem("comments"));

    for (let i = 0; i < comments.length; i++) {
      if (comments[i].add == currLostAnimal.petName) num++;
    }

    $("#message").val("");
    $("#recipe-comments").text(num + " коментара");
  }
  $("#delete-button").click(deleteLostPet);
  function deleteLostPet() {
    //ime ljubimca se koristi kao primarni kljuc za brisanje
    let petToDelete = 0;
    for (let i = 0; i < lostAnimals.length; i++) {
      if (lostAnimals[i].petName == $(".lost-name").text()) petToDelete = i;
      break;
    }
    lostAnimals.splice(petToDelete, 1);
    localStorage.setItem("lostAnimals", JSON.stringify(lostAnimals));
    location.href= "../webpages/losts.html";
  }
});

function addChar(word, char) {
  if (char == "č" || char == "ć") {
    word += "c";
  } else if (char == "Č" || char == "Ć") {
    word += "C";
  } else if (char == "đ") {
    word += "dj";
  } else if (char == "Đ") {
    word += "Dj";
  } else if (char == "š") {
    word += "s";
  } else if (char == "Š") {
    word += "S";
  } else if (char == "ž") {
    word += "z";
  } else if (char == "Ž") {
    word += "Z";
  } else {
    word += char;
  }

  return word;
}

function generatePDF() {
  var doc = new jsPDF();
  let text = "";
  let allPages = [];
  let add = JSON.parse(localStorage.getItem("currLostAnimal"));

  let lineCnt = 1;
  let pageCnt = 1;

  let addName = "";
  for (let i = 0; i < add.petName.length; ++i) {
    addName = addChar(addName, add.petName[i]);
  }

  for (let i = 0; i < add.opis.length; ++i) {
    if (i > 70 * lineCnt && i < 90 * lineCnt && add.opis[i] == " ") {
      text = text + "\n";
      ++lineCnt;
      if (
        (i > 1950 * pageCnt && i < 2050 * pageCnt && pageCnt == 1) ||
        (i > 2350 * pageCnt && i < 2450 * pageCnt && pageCnt != 1)
      ) {
        allPages.push(text);
        text = "";
        ++pageCnt;
      }
    } else {
      text = addChar(text, add.opis[i]);
    }
  }

  doc.text(addName, 80, 10);
  doc.text("Име корисника " + add.user, 5, 20);
  doc.text("Контакт телефон " + add.phone, 5, 20);
  allPages.push(text);
  for (let i = 0; i < allPages.length; ++i) {
    if (i == 0) {
      doc.text(allPages[i], 5, 50);
    } else {
      doc.addPage().text(allPages[i], 5, 25);
    }
  }
  doc.save(add.name);
}
