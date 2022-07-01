$(document).ready(function () {
    let birdsLocalStorage = localStorage.getItem("birds");
    birds = JSON.parse(birdsLocalStorage);
    let bird="";  
    let imgIndex = 0;
    for (let i = 0; i < birds.length; i++) 
    {
      imgIndex=i+1;  
      bird = '<div class="col-sm-12 col-md-6 col-lg-4">'+
      '<div class="blog-item">'+'<div class="blog-img">'+
      '<img src="../img/bird'+imgIndex+'.jpg" alt="Blog">'+'</div>'+
      '<div class="blog-content">'+'<h2 class="blog-title">'+birds[i].description+'</h2>'+ ' <div class="blog-meta">'+'<p><i class="far fa-user"></i>&nbsp'+birds[i].author+'</p>'+'<p><i class="far fa-calendar-alt"></i>&nbsp'+birds[i].date+'</p></div>'+'<div class="blog-text">'+'<p>'+birds[i].description+'</p></div></div></div>';
  
      $("#birds").append(bird);
    }
  });