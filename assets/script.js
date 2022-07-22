console.log("hello");
directorNamesEl = document.getElementById("directorname");
directorListEl = document.getElementById("list of directors");

getApi();

function getApi() {

    var requestUrl = 'https://ghibliapi.herokuapp.com/films'
    //console.log(requestUrl);

    fetch(requestUrl)
    .then(function(response){
        return response.json();
       })
       .then(function(data){
        console.log(data);
        //Loop over the data to generate a table, each table row will have a link to the repo url
        for(var i = 0 ; i < data.length ; i++){
            //console.log(i);
        //     var createTableRow = document.createElement('tr');
        // var tableData = document.createElement('td');
        // var link = document.createElement('a');
        var createTableRow = document.createElement('tr')
        var tableData = document.createElement('td')
        var createOption = document.createElement('a');
       // console.log(data[i].director);
        createOption.textContent = data[i].director;
        createOption.href = data[i].director;
        tableData.appendChild(createOption);
        createTableRow.appendChild(tableData);
        directorNamesEl.appendChild(createTableRow);
        
        }

       })
    

    
}




