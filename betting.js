var odds = 1.25 //document.getElementByID('odds').value;
var bet = 1 //document.getElementByID('betting_amount').value;

odds += 0.1;
function testClick() {
    console.log(odds);
    console.log(bet);
}

function logtest() {
	//var test = item.getElementsByTagName("h2");
	console.log(bet);
}

testClick();
logtest();
alert("done");



/*var Utilities = {
loadSavedGames : function () {
      var odds = document.getElementByID('odds').value,
      var bet = document.getElementByID('betting_amount').value;
          console.log(odds + ", " + betting_amount); //null, blank 
}}

document.getElementById('start_button').addEventListener('click',function() {
    Utilities.loadSavedGames();
});*/
