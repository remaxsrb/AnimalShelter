//TODO - add sample users to localstorage
//TODO - add sample animals to localstorage
let users = [
  {
    username: "lazar",
    email: "lazar@gmail.com",
    password: "Lazar_1",
  },
  {
    username: "marko",
    email: "marko@gmail.com",
    password: "Marko_1",
  },
  {
    username: "andrijana",
    email: "andrijana@hotmail.com",
    password: "Andrijana_1",
  },
];

let lostAnimals = [
    {
      petName: "name1",
      phone: "+381651234567",
      opis: "opis",
      user: "lazar",
    },
    {
        petName: "name2",
        phone: "+381651234568",
        opis: "animal desc",
        user: "marko",
    },
    {
        petName: "name3",
        phone: "+381651234569",
        opis: "opis zivotinje",
        user: "andrijana",
    },
  ];

function initializeData() {
  initializeUsers();
  initializeLostAnimals();
}

function initializeUsers() {

  let usersLocalStorage = localStorage.getItem("users");
  if (usersLocalStorage != null) users = JSON.parse(usersLocalStorage);
  else localStorage.setItem("users", JSON.stringify(users));
}

function initializeLostAnimals() {
let lostAnimalsLocalStorage = localStorage.getItem("lostAnimals");
  if (lostAnimalsLocalStorage != null) users = JSON.parse(lostAnimalsLocalStorage);
  else localStorage.setItem("lostAnimals", JSON.stringify(lostAnimals));
}
