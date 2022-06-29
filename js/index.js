$(document).ready(function() {
    let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"))
    let language = sessionStorage.getItem("language")


    function showAnimals() {

        let currAnimal = ""
        for (let i = 0; i < 3; ++i) {

            currAnimal += "<div id='" + lostAnimals[i].petName + "' class='col-lg-4 col-md-6 special-grid animals " + "'>" + 
                                "<a href='#'>" +
                                    "<p style='color: #OOFFFF;'>" + lostAnimals[i].petName + " | " + lostAnimals[i].opis + " | " + lostAnimals[i].phone + " | " + lostAnimals[i].user +  "</p>" +
                                "</a>" +
                            "</div>"
        }
        $("#pics").html(currAnimal)
    }
    showAnimals();

    $(".animals").click(function() {
        let animal = lostAnimals.find(element=>element.id == $(this).attr('petName'))
        localStorage.setItem("currLostAnimal", JSON.stringify(animal))
        window.location.href = "lost.html"
    })

    
})