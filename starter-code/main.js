var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */

var x = document.getElementById('game-board');

var createBoard = function () {
	for(var i = 0; i < 4; i++) {
	var newElement = document.createElement('div');
	newElement.className = 'board';
	x.appendChild(newElement);
  }
}

createBoard();
