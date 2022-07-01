$(document).ready(function() {
    let lostAnimals = JSON.parse(localStorage.getItem("lostAnimals"))


    function showAdds() {
        let currAnimal = ""
        for (let i = 0; i < lostAnimals.length; ++i) {
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



    function showComments() {
        let comments = JSON.parse(localStorage.getItem("comments"))
        let user = JSON.parse(localStorage.getItem("loggedUser"))
        let allComments = "<ul class='user-comment-list'>"

        for(let i=0; i<comments.length;i++){
            if(comments[i].author == user.username){
                allComments +=  "<li class='user-comment-item'>" +
                                "<div class='user-comment-body'>" +
                                    "<div class='user-comment-text'>" +
                                        "<h3>" + comments[i].add + "</h3>" +
                                        "<p>" + comments[i].message + "</p>" +
                                    "</div>" + 
                                "</div>" +
                            "</li>"
            }

        
        }
        
        if(allComments == "<ul class='user-comment-list'>") {
            allComments =   "<div class='row' id='empty-div'>" + 
                                "<p>" + "Niste napisali nijedan komentar" + "</p>" +
                            "</div>"
        }
        else {
            allComments += "</ul>"
        }

        $("#user-profile-things").html(allComments) 
    }
    
    $(".animals").click(function() {
        let animal = lostAnimals.find(element=>element.petName == $(this).attr('id'))
        localStorage.setItem("currLostAnimal", JSON.stringify(animal))
        window.location.href = "lost.html"
    })

    $("#user-profile-adds").click(function() {
        showAdds()
    })

    $("#user-profile-comments").click(function() {
        showComments()
    })


})