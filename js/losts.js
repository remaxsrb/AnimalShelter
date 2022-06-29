$(document).ready(function() {
    let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"))

    function showRecipes() {

        let currAnimal = ""
        for (let i = 0; i < 4; ++i) {

            currAnimal += "<div id='" + lostAnimals[i].petName + "' class='col-lg-4 col-md-6 special-grid animals " + "'>" + 
                                "<a href='#'>" +
                                    "<p style='color: #OOFFFF;'>" + lostAnimals[i].petName + " | " + lostAnimals[i].opis + " | " + lostAnimals[i].phone + " | " + lostAnimals[i].user +  "</p>" +
                                "</a>" +
                            "</div>"
        }
        $("#pics").html(currAnimal)
    }
    showRecipes();
})