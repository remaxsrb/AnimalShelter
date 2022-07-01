$(document).ready(function () {
    let catsLocalStorage = localStorage.getItem("cats");
    cats = JSON.parse(catsLocalStorage);
    let cat="";  
    let imgIndex = 0;
    for (let i = 0; i < cats.length; i++) 
    {
      imgIndex=i+1;  
      cat = '<div class="col-sm-12 col-md-6 col-lg-4">'+
      '<div class="blog-item">'+'<div class="blog-img">'+
      '<img src="../img/cat'+imgIndex+'.jpg" alt="Blog">'+'</div>'+
      '<div class="blog-content">'+'<h2 class="blog-title">'+cats[i].description+'</h2>'+ ' <div class="blog-meta">'+'<p><i class="far fa-user"></i>&nbsp'+cats[i].author+'</p>'+'<p><i class="far fa-calendar-alt"></i>&nbsp'+cats[i].date+'</p></div>'+'<div class="blog-text">'+'<p>'+cats[i].description+'</p></div></div></div>';
  
      $("#cats").append(cat);
    }
  });