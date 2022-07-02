$(document).ready(function () {
  let catsLocalStorage = localStorage.getItem("cats");
  cats = JSON.parse(catsLocalStorage);
  let sortPrev = null

  showCats()  



    function showCats(){
      sort()
      let cat="";  

      $("#cats").text("")

      let regex = $("#search-query-input").val() == "" ? null : new RegExp("[...]*" + $("#search-query-input").val() + "[...]*", "i")
    
      for (let i = 0; i < cats.length; i++) {
        if(regex==null || regex.test(cats[i].name)){
          cat = '<div class="col-sm-12 col-md-6 col-lg-4 animals" id= "' + cats[i].name + '"> <a href="#">' +
              '<div class="blog-item">'+'<div class="blog-img">'+
              '<img src="../img/'+ cats[i].img1+'" alt="Blog">'+'</div>'+
              '<div class="blog-content">'+'<h2 class="blog-title">'+cats[i].name +
              '</h2>'+ ' <div class="blog-meta">'+'<div class="blog-text">'+'<p>'+cats[i].description+'</p></div></div></a></div>';

              $("#cats").append(cat)
        }
      }
    }

    function sort(){
      let sort = $("select").val()
      if (sort != null && sort != sortPrev) {
          for (let i = 0; i < cats.length - 1; ++i) {
              for (let ii = i + 1; ii < cats.length; ++ii) {
                  let condition
                  switch (sort) {
                      case "sort-name-asc":   condition = cats[i].name > cats[ii].name
                          break
                      case "sort-name-desc":  condition = cats[i].name < cats[ii].name
                          break 
                      case "sort-years-asc":    condition = cats[i].years > cats[ii].years
                          break
                      case "sort-years-desc":   condition = cats[i].years < cats[ii].years
                          break
                  }

                  if (condition == true) {
                      let tmp = cats[i]
                      cats[i] = cats[ii]
                      cats[ii] = tmp
                  }
              }
          }
          sortPrev = sort
      }
    }


    $("select").change(function() {
      showCats()
    })

    $("#search-query-submit").click(function() {
      showCats()
    })


    $(".animals").click(function() {
      let animal = cats.find(element=>element.name == $(this).attr('id'))
      localStorage.setItem("currPet", JSON.stringify(animal))
      window.location.href = "cat.html"
  })

});
