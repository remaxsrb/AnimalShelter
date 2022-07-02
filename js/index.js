$(document).ready(function() {
    let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"))

    function showAnimals() {

        let currAnimal = ""
        for (let i = 0; i < 3; ++i) {

            currAnimal += "<div class='col-md-4 special-grid animals' id = '" + lostAnimals[i].petName + "'> <a href = '#'>"
                    + "<div class='food-item'>" + "<h2 class = 'text-center'>" + lostAnimals[i].petName +"</h2>" + "<p class = 'text-center'>" + lostAnimals[i].opis +  "</p>"
                    +"</div></a></div>";
        }

        $("#pics").html(currAnimal)

 
    }
    showAnimals();

    $(".animals").click(function() {
        let animal = lostAnimals.find(element=>element.petName == $(this).attr('id'))
        localStorage.setItem("currLostAnimal", JSON.stringify(animal))
        window.location.href = "lost.html"
    })

    
})