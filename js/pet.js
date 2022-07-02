$(document).ready(function () {

    let currPet = JSON.parse(localStorage.getItem("currPet"));
  
    $(".pet-name").text(currPet.name);
    $(".add-name").text("Име љубимца: " + currPet.name);
    $(".add-desc").text("Опис: " + currPet.description);
    $(".add-year").text("Година: " + currPet.years);
    $(".add-weight").text("Тежина: " + currPet.weight);


    $(".images-and-videos")
    .html("<a href='#'>" + "<img src='../img/" + currPet.img1 + "' alt='Image'></a>"+
    "<a href='#'>" + "<img src='../img/" + currPet.img2 + "' alt='Image'></a> "+ 
    "<a href='#'>" + "<img src='../img/" + currPet.img3 + "' alt='Image'></a>")

    if(currPet.video!=null){
        $(".pet-video").html('<video controls autoplay width="480px" height="320px"> <source src="../img/lab1.mp4" type="video/mp4"> + <source src="movie.ogg" type="video/ogg"> Your browser does not support the video tag.+ </video>')
    }

})