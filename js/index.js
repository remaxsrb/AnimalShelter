$(document).ready(function() {
    let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"))
    let language = sessionStorage.getItem("language")


    function showAnimals() {

        let currAnimal = ""
        for (let i = 0; i < 3; ++i) {

            currAnimal += "<div class='col-md-4 special-grid animals' id = '" + lostAnimals[i].petName + "'> <a href = '#'>"
                    + "<div class='food-item'>" + "<h2>" + lostAnimals[i].petName +"</h2>" + "<p>" + lostAnimals[i].opis +  "</p>"
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