// Using let
let name = "Zakary";
let age = "20";
let isStudent = true;

document.getElementById("demo1").innerHTML = 
 "Name: " + name + "<br>Age: " + age + "<br>Student: " + isStudent;

var city = "Albany";   //Function-scoped
let state = "NY";      //Block-scoped
const country = "USA"; //Cannot be reassigned

document.getElementById("demo2").innerHTML =
  "Location: " + city + ", " + state + ", " + country;