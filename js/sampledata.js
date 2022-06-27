//TODO - add sample users to localstorage
//TODO - add sample animals to localstorage
let users = [
  {
    username: "lazar",
    email: "lazar@gmail.com",
    password: "lazar",
  },
  {
    username: "marko",
    email: "marko@gmail.com",
    password: "marko",
  },
  {
    username: "andrijana",
    email: "andrijana@hotmail.com",
    password: "andrijana",
  },
];

let lostAnimals = [
    {
      petName: "name1",
      phone: "+381651234567",
      opis: "opis",
      user: "korisnik1",
    },
    {
        petName: "name2",
        phone: "+381651234568",
        opis: "animal desc",
        user: "korisnik2",
    },
    {
        petName: "name3",
        phone: "+381651234569",
        opis: "opis zivotinje",
        user: "korisnik3",
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
