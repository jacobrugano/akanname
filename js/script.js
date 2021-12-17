function findAkan(){
  var date = document.getElementById('date').value;
  var gender = document.getElementById('gender').value;
  var month = document.getElementById('month').value;
  var year = document.getElementById('year').value;

if (date <=0 || date > 31) {
  alert("Please enter a valid date");
  return;
}
else if (month <= 0 || month >12) {
  alert("Please enter a valid month")
  return;
};
var dd = parseInt(date);
var y = year.slice(2, 4);
var c = year.slice(0, 2);
var yy = parseInt(y);
var mm = parseInt(month);
var cc = parseInt(c);
var d = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7

if (gender === "Female") {
  function Female(){
    var d = d.toFixed();
    var Female = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
    switch (d) {

      case "2":
        alert("Your Akan name is:" + female(0));
        break;

      case "3":
      alert("Your Akan name is: ""+ female(1));
      break;

      case "4";
      alert("Your Akan name is:"+ female(2));
      break;

      case "5";
      alert("Your Akan name is: " + female(3));
      break;

      case "6";
      alert("Your Akan name is: " + female(4));
      break;

    }
  }
  Female();
}

if (gender === "male") {
  function male(){
    var d = d.toFixed();
    var Female = ["Kwasi","Kwadwo","Kwabena","Kwahu","Yaw","Kofi","Kwame"];
    switch (d) {

      case "2":
        alert("Your Akan name is:" + male(0));
        break;

      case "3":
      alert("Your Akan name is: ""+ male(1));
      break;

      case "4";
      alert("Your Akan name is:"+ male(2));
      break;

      case "5";
      alert("Your Akan name is: " + male(3));
      break;

      case "6";
      alert("Your Akan name is: " + male(4));
      break;

    }
  }
  male();
}

if (gender === "") {
  alert("please choose a gender");
}










}
