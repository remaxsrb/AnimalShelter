$(document).ready(function () {

    let currPet = JSON.parse(localStorage.getItem("currPet"));
  
    $(".pet-name").text(currPet.name);
    $(".add-name").append(currPet.name);
    $(".add-desc").append(currPet.description);
    $(".add-year").append(currPet.years);
    $(".add-weight").append(currPet.weight);


    $(".images-and-videos")
    .html("<a href='#'>" + "<img src='../img/" + currPet.img1 + "' alt='Image'></a>"+
    "<a href='#'>" + "<img src='../img/" + currPet.img2 + "' alt='Image'></a> "+ 
    "<a href='#'>" + "<img src='../img/" + currPet.img3 + "' alt='Image'></a>")

    if(currPet.video!=null){
        $(".pet-video").html('<video controls autoplay width="480px" height="320px"> <source src="../img/lab1.mp4" type="video/mp4"> + <source src="movie.ogg" type="video/ogg"> Your browser does not support the video tag.+ </video>')
    }

})