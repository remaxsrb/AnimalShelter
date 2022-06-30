$(document).ready(function() {
    let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"))
    let loggedUser = JSON.parse(sessionStorage.getItem("loggedUser"))


    function showAdds() {
        let currAnimal = ""
        for (let i = 0; i < 3; ++i) {
            if (lostAnimals[i].user == JSON.parse(localStorage.getItem("loggedUser")).username) {
                currAnimal += "<div class='col-md-4 special-grid animals' id = '" + lostAnimals[i].petName + "'> <a href = '#'>"
                    + "<div class='food-item'>" + "<h2 class = 'text-center'>" + lostAnimals[i].petName +"</h2>" + "<p class = 'text-center'>" + lostAnimals[i].opis +  "</p>"
                    +"</div></a></div>";
            }            
        }
        
        if(currAnimal == "") {
            currAnimal =    "<div class='row' id='empty-div'>" + 
                                "<p>Нисте поставили ниједан оглас</p>" +
                            "</div>"
        }

        $("#user-profile-things").html(currAnimal) 
    }

    showAdds()
    
    $(".animals").click(function() {
        let animal = lostAnimals.find(element=>element.petName == $(this).attr('id'))
        localStorage.setItem("currLostAnimal", JSON.stringify(animal))
        window.location.href = "lost.html"
    })

    $("#user-profile-adds").click(function() {
        showAdds()
    })


})