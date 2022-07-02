$(document).ready(function () {
  let birdsLocalStorage = localStorage.getItem("birds");
  birds = JSON.parse(birdsLocalStorage);
  let sortPrev = null

  showBirds()  



    function showBirds(){
      sort()
      let bird="";  

      $("#birds").text("")

      let regex = $("#search-query-input").val() == "" ? null : new RegExp("[...]*" + $("#search-query-input").val() + "[...]*", "i")
    
      for (let i = 0; i < birds.length; i++) {
        if(regex==null || regex.test(birds[i].name)){
          bird = '<div class="col-sm-12 col-md-6 col-lg-4 animals" id= "' + birds[i].name + '"> <a href="#">' +
              '<div class="blog-item">'+'<div class="blog-img">'+
              '<img src="../img/'+ birds[i].img1+'" alt="Blog">'+'</div>'+
              '<div class="blog-content">'+'<h2 class="blog-title">'+birds[i].name +
              '</h2>'+ ' <div class="blog-meta">'+'<div class="blog-text">'+'<p>'+birds[i].description+'</p></div></div></a></div>';

              $("#birds").append(bird)
        }
      }
    }

    function sort(){
      let sort = $("select").val()
      if (sort != null && sort != sortPrev) {
          for (let i = 0; i < birds.length - 1; ++i) {
              for (let ii = i + 1; ii < birds.length; ++ii) {
                  let condition
                  switch (sort) {
                      case "sort-name-asc":   condition = birds[i].name > birds[ii].name
                          break
                      case "sort-name-desc":  condition = birds[i].name < birds[ii].name
                          break 
                      case "sort-years-asc":    condition = birds[i].years > birds[ii].years
                          break
                      case "sort-years-desc":   condition = birds[i].years < birds[ii].years
                          break
                  }

                  if (condition == true) {
                      let tmp = birds[i]
                      birds[i] = birds[ii]
                      birds[ii] = tmp
                  }
              }
          }
          sortPrev = sort
      }
    }


    $("select").change(function() {
      showBirds()
    })

    $("#search-query-submit").click(function() {
      showBirds()
    })


    $(".animals").click(function() {
      let animal = birds.find(element=>element.name == $(this).attr('id'))
      localStorage.setItem("currPet", JSON.stringify(animal))
      window.location.href = "bird.html"
  })

});
