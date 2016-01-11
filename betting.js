/*var odds = document.getElementByID('odds').value;
var bet = document.getElementByID('betting_amount').value;

odds += odds + 0.1;
function testClick() {
    document.getElementById('start_button').addEventListener('click', function()) = console.log(odds, bet);
}

alert("done");*/

function myFunction() {
    document.getElementById("demo").style.color = "red";
}


var Utilities = {
loadSavedGames : function () {
      var odds = document.getElementByID('odds').value,
      var bet = document.getElementByID('betting_amount').value;
          console.log(odds + ", " + betting_amount); //null, blank 
}}

document.getElementById('start_button').addEventListener('click',function() {
    Utilities.loadSavedGames();
});