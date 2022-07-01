$(document).ready(function () {
  let dogsLocalStorage = localStorage.getItem("dogs");
  dogs = JSON.parse(dogsLocalStorage);
  let dog="";  
  for (let i = 0; i < dogs.length; i++) 
  {
    dog = '<div class="col-sm-12 col-md-6 col-lg-4">'+
    '<div class="blog-item">'+'<div class="blog-img">'+
    '<img src="../img/'+dogs[i].species+'.jpg" alt="Blog">'+'</div>'+
    '<div class="blog-content">'+'<h2 class="blog-title">'+dogs[i].description+'</h2>'+ ' <div class="blog-meta">'+'<p><i class="far fa-user"></i>&nbsp'+dogs[i].author+'</p>'+'<p><i class="far fa-calendar-alt"></i>&nbsp'+dogs[i].date+'</p></div>'+'<div class="blog-text">'+'<p>'+dogs[i].description+'</p></div></div></div>';

    $("#dogs").append(dog);
  }
});
