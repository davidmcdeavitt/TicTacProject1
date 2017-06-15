//clic must actually give a function of X
var onlySolution = "X"

// a div must be able to be selected
// first give the div an ability to seen

var pickMe = document.querySelector('div')
//add the input square
var squareBox = document.querySelector('tile')

//need to create the parent reference
var parent = document.getElementsByClassName('parent')[0]
var dataArray = document.getElementsByClassName('className')
//how to make a quick array
var board = '         '.split('')


//this returns the data into the array!!!!


//
// move to the function below
// var logParent = function (event) {
//   event.target.textContent = "X";
// }
//
// parent.addEventListener('click', logParent)
// not give the element an abilitity to be clicked
// pickMe.addEventListener('click', function() {
//   squareBox.textContent = "";
//   return squareBox.value = onlySolution;
// })

//-------------this section is for the function of letting you click a box and return a value
//now for putting an O
// var logParent = function (event) {
//   event.target.textContent = "O";
//
// }
//
// parent.addEventListener('click', logParent)

// now need a function that will switch between X and O each time

//board[0] = x
// if board[0, 4, 9] === 'x' then winner
var switchPlayer

var playerOne = 'X'

var playerTwo = 'O'
var currentPlayer = playerOne








//// var cacheTile = document.getElementsByClassName('tile')
// var dataIndex = +document.getElementsByClassName('tile')[0].getAttribute('data-index')
//
// var board[dataIndex] = "X"




var playGame = function(event) {
  //put three comments make move,
  event.target.textContent = currentPlayer;
  board [] = event.target.getAttribute('data-index');
//board [] =
//check win,
  // runWinner()

  //switch turn
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo
  }else {
    currentPlayer = playerOne
  }


}

//   var playersTurn = function (event) {
//     event.target.textContent
// }

  parent.addEventListener('click', playGame);



//function for winner- this needs to be a simplified function
//main board can be an array... possibly 3 arrays in an array
//board is an empty array and you would propagate it to
//when you click a box return information into the array
//if index 0, 4, 8 all x you need to have a winner


//what to use to refer an item to a dataset when you click
// document.querySelector('div').dataset.index
// var list = querySelector('parent');
// document.querySelector('parent').addEventListener('click', function{
//   console.log('shshshsj');
// })




var runWinner = function(event) {
  if (board[0] === 'X' &&
      board[1] === 'X' &&
      board[2] === 'X') {
      console.log("Player One Wins!");
  }


  else if(document.querySelector('.index0').value === 'X' &&
      document.querySelector('.index3').value === 'X' &&
      document.querySelector('.index6').value === 'X') {
      console.log("Player One Wins!");
  }else if(document.querySelector('.index2').value === 'X' &&
      document.querySelector('.index4').value === 'X' &&
      document.querySelector('.index6').value === 'X') {
      console.log("Player One Wins!");
  }else if(document.querySelector('.index3').value === 'X' &&
      document.querySelector('.index4').value === 'X' &&
      document.querySelector('.index5').value === 'X') {
      console.log("Player One Wins!");
  }else if(document.querySelector('.index6').value === 'X' &&
      document.querySelector('.index7').value === 'X' &&
      document.querySelector('.index8').value === 'X') {
      console.log("Player One Wins!");
  }else if(document.querySelector('.index2').value === 'X' &&
      document.querySelector('.index4').value === 'X' &&
      document.querySelector('.index6').value === 'X') {
      console.log("Player One Wins!");
  }

}

//
// parent.addEventListener('click', runWinner);

//-------way to switch players
