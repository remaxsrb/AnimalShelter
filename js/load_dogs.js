$(document).ready(function () {
  let dogsLocalStorage = localStorage.getItem("dogs");
  dogs = JSON.parse(dogsLocalStorage);
  let sortPrev = null

  showDogs()  



    function showDogs(){
      sort()
      let dog="";  

      $("#dogs").text("")

      let regex = $("#search-query-input").val() == "" ? null : new RegExp("[...]*" + $("#search-query-input").val() + "[...]*", "i")
    
      for (let i = 0; i < dogs.length; i++) {
        if(regex==null || regex.test(dogs[i].name)){
          dog = '<div class="col-sm-12 col-md-6 col-lg-4 animals" id= "' + dogs[i].name + '"> <a href="#">' +
              '<div class="blog-item">'+'<div class="blog-img">'+
              '<img src="../img/'+ dogs[i].img1+'" alt="Blog">'+'</div>'+
              '<div class="blog-content">'+'<h2 class="blog-title">'+dogs[i].name +
              '</h2>'+ ' <div class="blog-meta">'+'<div class="blog-text">'+'<p>'+dogs[i].description+'</p></div></div></a></div>';

              $("#dogs").append(dog)
        }
      }
    }

    function sort(){
      let sort = $("select").val()
      if (sort != null && sort != sortPrev) {
          for (let i = 0; i < dogs.length - 1; ++i) {
              for (let ii = i + 1; ii < dogs.length; ++ii) {
                  let condition
                  switch (sort) {
                      case "sort-name-asc":   condition = dogs[i].name > dogs[ii].name
                          break
                      case "sort-name-desc":  condition = dogs[i].name < dogs[ii].name
                          break 
                      case "sort-years-asc":    condition = dogs[i].years > dogs[ii].years
                          break
                      case "sort-years-desc":   condition = dogs[i].years < dogs[ii].years
                          break
                  }

                  if (condition == true) {
                      let tmp = dogs[i]
                      dogs[i] = dogs[ii]
                      dogs[ii] = tmp
                  }
              }
          }
          sortPrev = sort
      }
    }


    $("select").change(function() {
      showDogs()
    })

    $("#search-query-submit").click(function() {
      showDogs()
    })


    $(".animals").click(function() {
      let animal = dogs.find(element=>element.name == $(this).attr('id'))
      localStorage.setItem("currPet", JSON.stringify(animal))
      window.location.href = "dog.html"
  })

});
