//TODO - parse form data and insert into localstorage for lost animals

function addLostPet() {
  let petName = document.getElementById("petName").value;
  let phoneNumber = document.getElementById("phoneNumber").value;
  let petDescription = document.getElementById("petDescription").value;

  let user = JSON.parse(localStorage.getItem("loggedUser")).username;

  let lostAnimalsLocalStorage = JSON.parse(localStorage.getItem("lostAnimals"));

  lostAnimalsLocalStorage.push({
    petName: petName,
    phone: phoneNumber,
    opis: petDescription,
    user: user,
  });

  localStorage.setItem("lostAnimals", JSON.stringify(lostAnimalsLocalStorage));
  location.href = "../webpages/index-user.html";
}
