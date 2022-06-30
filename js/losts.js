$(document).ready(function() {
    let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"))

    function showRecipes() {

        let currAnimal = ""
        for (let i = 0; i < lostAnimals.length; ++i) {

            currAnimal += "<div class='col-md-4 special-grid animals' id = '" + lostAnimals[i].petName + "'> <a href = '#'>"
                    + "<div class='food-item'>" + "<h2 class = 'text-center'>" + lostAnimals[i].petName +"</h2>" + "<p class = 'text-center'>" + lostAnimals[i].opis +  "</p>"
                    +"</div></a></div>";
        }
        $("#pics").html(currAnimal)
    }
    showRecipes();

    $(".animals").click(function() {
        let animal = lostAnimals.find(element=>element.petName == $(this).attr('id'))
        localStorage.setItem("currLostAnimal", JSON.stringify(animal))
        window.location.href = "lost.html"
    })


})
