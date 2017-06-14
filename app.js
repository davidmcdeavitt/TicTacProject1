//clic must actually give a function of X
var onlySolution = "X"

// a div must be able to be selected
// first give the div an ability to seen

var pickMe = document.querySelector('div')
//add the input square
var squareBox = document.querySelector('tile')

//need to create the parent reference
var parent = document.getElementsByClassName('parent')[0]



var logParent = function (event) {
  event.target.textContent = "X";
}

parent.addEventListener('click', logParent)
// not give the element an abilitity to be clicked
// pickMe.addEventListener('click', function() {
//   squareBox.textContent = "";
//   return squareBox.value = onlySolution;
// })

//-------------this section is for the function of letting you click a box and return a value
//now for putting an O
var logParent = function (event) {
  event.target.textContent = "O";
}

parent.addEventListener('click', logParent)

// now need a function that will switch between X and O each time

var switchPlayer

var player1

var player2
