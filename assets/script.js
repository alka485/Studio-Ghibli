console.log("hello");
directorNamesEl = document.getElementById("directorname");
directorListEl = document.getElementById("list of directors");

function getApi(){
    //fetch request gets a list of all the films by studioGhibli
    var requestUrl = 'https://ghibliapi.herokuapp.com';
    console.log(requestUrl);
    fetch(requestUrl)
    .then(function (response){
        return response.json()
    })
    .then (function(data){
        console.log(data);
    })
   

}

