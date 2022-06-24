$(document).ready(function(){
    let language = sessionStorage.getItem("language");
    if(language==null){
        language = "srb"
        sessionStorage.setItem("language",language);
    }
    
})