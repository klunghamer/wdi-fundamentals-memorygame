

var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

/*if (cardTwo === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
} */

var x = document.getElementById('game-board');

var createBoard = function () {
	for(var i = 0; i < cards.length; i++) {
	var newElement = document.createElement('div');
	newElement.className = 'board';
	x.appendChild(newElement);
  }
  for (var i = 0; i < cards.length; i++) {
  	cardElement.setAttribute('data-card', cards[i]);
  }
  for (var i = 0; i < cards.length; i++) {
  	cardElement.addEventListener('click', isTwoCards);
  	cardElement.innerHTML = '<img scr = "king.png" alt = "King" />';
  }
}

var isMatch = function () {

}

var isTwoCards = function () {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}
