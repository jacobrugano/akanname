
// Declaring variables from the userinput and assigning values to them
function findName(){
  var date = document.getElementById('date').value;
  var gender = document.getElementById('gender').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;

//Declaring variables from the formulae.
  var cc = parseInt(c);
  var c = year.slice(0, 2);
  var yy = parseInt(y);
  var y = year.slice(2, 4);
  var dd = parseInt(date);
  var mm = parseInt(month);
  var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7 //d representing the day of the week.

if (year <= 0 || year >2021) {
    alert("Please provide a valid year of birth! eg 2019")
    return false;
  };

  else if (month <= 0 || month >12) {
    alert("Please provide your month of birth! between 1 and 12"")
    return false;
  };

 else if (date <=0 || date > 31) {
  alert("Please provide a valid date that you were born in!");
  return false;
}


//Declaring the Akannames
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw", "Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];

if (gender === "male") {
  function male(){
    var d = d.toFixed();
    switch (d) {

      case "b":
        alert("Your Akan name is:" + male(0));
        break;
 // block of code to be executed if the condition is true
      case "c":
      alert("Your Akan name is: ""+ male(1));
      break;
 // block of code to be executed if the condition is true
      case "d";
      alert("Your Akan name is:"+ male(2));
      break;
 // block of code to be executed if the condition is true
      case "e";
      alert("Your Akan name is: " + male(3));
      break;
 // block of code to be executed if the condition is true
      case "f";
      alert("Your Akan name is: " + male(4));
      break;
 // block of code to be executed if the condition is true
    }
  }
  male();
}

if (gender === "Female") {
  function Female(){
    var d = d.toFixed();
    switch (d) {
      case "b":
        alert("Your Akan name is:" + female(0));
        break;
 // block of code to be executed if the condition is true
      case "c":
      alert("Your Akan name is: ""+ female(1));
      break;
 // block of code to be executed if the condition is true
      case "d";
      alert("Your Akan name is:"+ female(2));
      break;
 // block of code to be executed if the condition is true
      case "e";
      alert("Your Akan name is: " + female(3));
      break;
 // block of code to be executed if the condition is true
      case "f";
      alert("Your Akan name is: " + female(4));
      break;
 // block of code to be executed if the condition is true
    }
  }
  Female();
}

if (gender === "") {
  alert("You must select male or female");
}
return false;
}
else{
return true ;
}










}
