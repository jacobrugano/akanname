
function findAkanName() {
// Collecting/capturing users data.
  var date = document.getElementById("date").value;
  var month = document.getElementById("month").value;
  var year = document.getElementById("year").value;

//Declaring variables from the formulae.
  var DD = parseInt(date);
  var MM = parseInt(month);
  var Y = year.slice(2, 4);  //we can also do this by var Y = parseInt(year.toString().slice(2, 4));
  var YY = parseInt(Y);
  var CC = Math.ceil(year / 100) //to round the number UPWARDS to the nearest integer, and return the result.
  var outputtedDate = parseInt(((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;
  var calculatedDate = Math.floor(outputtedDate); //run Math.floor() to get the largest integer less than or equal to the provided number
  var intergeredDate = Math.round(outputtedDate); //to return the value of a number rounded to the nearest integer

//Declaring the days variables
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



  if (document.getElementById("gender").checked) {     //to return the selected property in the select box
    var gender = 'male';
  }
  else {
    var gender = 'female';
  }

  //validation of the user data provided above
 //control flow

  if (DD <= 0 || DD > 31) {
    alert("invalid date");
  }
  else if (YY <= 0 || YY >99) {
    alert("Please provide a valid year of birth! eg 2019");
  }
  else if (MM <= 0 || MM > 12) {
    alert("invalid month");
  }
  else if (MM == 2 && DD > 29) {
    alert("invalid day of month");
  }
  else if (calculatedDate == 0 && gender === 'male') {
  alert(document.getElementById("display").innerHTML = ("You were born on " + days[0] + " your Akan Name is " + maleNames[0]));
  }
  else if (calculatedDate == 1 || intergeredDate == -1 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on " + days[1] + "your Akan Name is " + maleNames[1]));
  }
  else if (calculatedDate == 2 || intergeredDate == -2 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[2] + "your Akan Name is " + maleNames[2]));
  }
  else if (calculatedDate == 3 || intergeredDate == -3 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[3] + "your Akan Name is " + maleNames[3]));
  }
  else if (calculatedDate == 4 || intergeredDate == -4 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[4] + "your Akan Name is " + maleNames[4]));
  }
  else if (calculatedDate == 5 || intergeredDate == -5 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[5] + "your Akan Name is " + maleNames[5]));
  }
  else if (calculatedDate == 6 || intergeredDate == -6 && gender === 'male') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[6] + "your Akan Name is " + maleNames[6]));
  }
  else if (calculatedDate == 0 && gender === 'female') {
  alert(document.getElementById("display").innerHTML = ("You were born on" + days[0] + "your Akan name is " + femaleNames[0]));
  }
  else if (calculatedDate == 1 || intergeredDate == -1 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[1] + "your Akan Name is " + femaleNames[1]));
  }
  else if (calculatedDate == 2 || intergeredDate == -2 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[2] + "your Akan Name is " + femaleNames[2]));
  }
  else if (calculatedDate == 3 || intergeredDate == -3 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[3] + "your Akan Name is " + femaleNames[3]));
  }
  else if (calculatedDate == 4 || intergeredDate == -4 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[4] + "your Akan Name is " + femaleNames[4]));
  }
  else if (calculatedDate == 5 || intergeredDate == -5 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[5] + "your Akan Name is " + femaleNames[5]));
  }
  else if (calculatedDate == 6 || intergeredDate == -6 && gender === 'female') {
    alert(document.getElementById("display").innerHTML = ("You were born on" + days[6] + "your Akan Name is " + femaleNames[6]));
  }
  else {
    alert("Check if you inputted the correct data!");
  }
}
