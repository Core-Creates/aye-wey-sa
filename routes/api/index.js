const router = require("express").Router();
document.getElementById("search").onclick = function() {myFunction()};
var saveTodo = localStorage.getItem('todo');
console.log(saveTodo);



function myFunction() {
    var todo = document.getElementById("card-input").value
    var url = ``


fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json()
    }).then(function (response) {
        console.log(response)

     localStorage.setItem("todo",document.getElementById("card-input").value);

    var todoEl = response.CommonName
    // $("#keyword").html(todoEl);   Can JSON not be used? 
    })

}