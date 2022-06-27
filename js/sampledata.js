//TODO - add sample users to localstorage
//TODO - add sample animals to localstorage
let users = [
  {
    username: "korisnik1",
    email: "address1@domain.com",
    password: "Password_1",
  },
  {
    username: "korisnik2",
    email: "address2@domain.com",
    password: "Password_2",
  },
  {
    username: "korisnik3",
    email: "address3@domain.com",
    password: "Password_3",
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
        petName: "name1",
        phone: "+381651234568",
        opis: "animal desc",
        user: "korisnik2",
    },
    {
        petName: "name1",
        phone: "+381651234569",
        opis: "opis zivotinje",
        user: "korisnik2",
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
  else lostAnimals.setItem("lostAnimals", JSON.stringify(lostAnimals));
}
