//clic must actually give a function of X
var onlySolution = "X"
var playerOneWin = 1
var playerTwoWin = 1
// a div must be able to be selected
// first give the div an ability to seen
var balanceP1 = 0
var balanceP2 = 0
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
var stepladder;
var playerOne = 'X'

var playerTwo = 'O'
var currentPlayer = playerOne
var downLadder;

var player1Input = document.querySelector('.playerOneTally');
var player2Input = document.querySelector('.playerTwoTally');

playerOneTallyTotal = function(playerOneWin) {
  balanceP1 = balanceP1 + playerOneWin;
}
playerTwoTallyTotal = function(playerTwoWin) {
  balanceP2 = balanceP2 + playerTwoWin;
}





//// var cacheTile = document.getElementsByClassName('tile')
// var dataIndex = +document.getElementsByClassName('tile')[0].getAttribute('data-index')
//
// var board[dataIndex] = "X"




var playGame = function(event) {
  //put three comments make move,
  // legal turn
  if (event.target.textContent === "") {
    event.target.textContent = currentPlayer;
    var dataIndex = +event.target.getAttribute('data-index');
    board[dataIndex] = currentPlayer
    totalTally(runWinner(event))
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo
    }else {
      currentPlayer = playerOne
    }
  }
  // var dataIndex = event.target.getElementById('textArea')



//creates the basis for stepladder


// check win,

  //switch turn

}
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

  //for all X functions
  //diagonally up
  stepLadder = board.slice(2,7).map(function(letter, index){
      if (letter === "X") {
          return letter}
  })
  if (stepLadder.length > 3) {
    trashBucket = stepLadder.splice(1,1);
    trashBucket = stepLadder.splice(2,1);
  }

  //diagonally down
  downLadder = board.slice(0,9).map(function(letter, index){
          if (letter === "X") {
            return letter
          }
  })
  if (downLadder.length > 3) {
    trashBucket = downLadder.splice(1,3);
    trashBucket = downLadder.splice(2,3);
  }



  leftColumn = board.slice(0,9).map(function(letter, index){
      if (letter === "X") {
          return letter

      }
  })
  if (leftColumn.length > 3) {
    trashBucket = leftColumn.splice(1,2);
    trashBucket = leftColumn.splice(2,2);
    trashBucket = leftColumn.splice(3,2);
  }

  centerColumn = board.slice(0,9).map(function(letter, index){
      if (letter === "X") {
          return letter

      }
  })
  if (centerColumn.length > 3) {
    trashBucket = centerColumn.splice(0,1);
    trashBucket = centerColumn.splice(1,2);
    trashBucket = centerColumn.splice(2,2);
    trashBucket = centerColumn.splice(3,1);
  }

  rightColumn = board.slice(0,9).map(function(letter, index){
      if (letter === "X") {
          return letter
      }
  })
  if (rightColumn.length > 3) {
    trashBucket = rightColumn.splice(0,2);
    trashBucket = rightColumn.splice(1,2);
    trashBucket = rightColumn.splice(2,2);
  }

  OstepLadder = board.slice(2,7).map(function(letter, index){
      if (letter === "O") {
          return letter
      }
  })
  if (OstepLadder.length > 3) {
    trashBucket = OstepLadder.splice(1,1);
    trashBucket = OstepLadder.splice(2,1);
  }

  //diagonally down
  OdownLadder = board.map(function(letter, index){
      if (letter === "O") {
          return letter
      }
  })
  if (OdownLadder.length > 3) {
    trashBucket = OdownLadder.splice(1,3);
    trashBucket = OdownLadder.splice(2,3);
  }


  OleftColumn = board.slice(0,9).map(function(letter, index){
      if (letter === "O") {
          return letter
      }
  })
  if (OleftColumn.length > 3) {
    trashBucket = OleftColumn.splice(1,2);
    trashBucket = OleftColumn.splice(2,2);
    trashBucket = OleftColumn.splice(3,2);
  }

  OcenterColumn = board.slice(0,9).map(function(letter, index){
      if (letter === "O") {
          return letter
      }
  })
  if (OcenterColumn.length > 3) {
    trashBucket = OcenterColumn.splice(0,1);
    trashBucket = OcenterColumn.splice(1,2);
    trashBucket = OcenterColumn.splice(2,2);
    trashBucket = OcenterColumn.splice(3,1);
  }

  OrightColumn = board.map(function(letter, index){
      if (letter === "O") {
          return letter
      }
  })
  if (OrightColumn.length > 3) {
    trashBucket = OrightColumn.splice(0,2);
    trashBucket = OrightColumn.splice(1,2);
    trashBucket = OrightColumn.splice(2,2);
  }


//horizontal tests
  if (board.slice(0,3).join('') === "XXX" ||
      board.slice(3,6).join('') === "XXX" ||
      board.slice(6,9).join('') === "XXX" ||
      //diagonal tests
      stepLadder.join('') === "XXX"       ||
      downLadder.join('') === "XXX"       ||
      //verticle tests
      leftColumn.join('') === "XXX"       ||
      centerColumn.join('') === "XXX"     ||
      rightColumn.join('') === "XXX"
    ) {
      return playerOne;
  }
  else if(
      board.slice(0,3).join('') === "OOO"   ||
      board.slice(3,6).join('') === "OOO"   ||
      board.slice(6,9).join('') === "OOO"   ||
      OstepLadder.join('') === "OOO"       ||
      OdownLadder.join('') === "OOO"       ||
      // verticle tests
      OleftColumn.join('') === "OOO"       ||
      OcenterColumn.join('') === "OOO"     ||
      OrightColumn.join('') === "OOO"
    ) {
    return playerTwo;
  }
  else {
      console.log("hi");
  }

};





function totalTally(result) {
if (result === playerOne) {
  playerOne === playerOneWin
  playerOneTallyTotal(playerOneWin)
  player1Input.textContent = balanceP1
}else if (result === playerTwo) {
  playerTwo === playerTwoWin
  playerTwoTallyTotal(playerTwoWin)
  player2Input.textContent = balanceP2
}else {
  return
}
  //reset game
}

var resetButton = document.querySelector('button');
resetButton.addEventListener("click", function () {
    var tiles = document.squareBox;
    for(var i = 0; i < 9; i++) {
        tiles[i].pickme = '';
    }
});
var cleanUp = function() {
  player1Input.textContent = "";
  player2Input.textContent = "";
  return pickme.textContent = "";
}
//
//   else if(document.querySelector('.index0').value === 'X' &&
//       document.querySelector('.index3').value === 'X' &&
//       document.querySelector('.index6').value === 'X') {
//       console.log("Player One Wins!");
//   }else if(document.querySelector('.index2').value === 'X' &&
//       document.querySelector('.index4').value === 'X' &&
//       document.querySelector('.index6').value === 'X') {
//       console.log("Player One Wins!");
//   }else if(document.querySelector('.index3').value === 'X' &&
//       document.querySelector('.index4').value === 'X' &&
//       document.querySelector('.index5').value === 'X') {
//       console.log("Player One Wins!");
//   }else if(document.querySelector('.index6').value === 'X' &&
//       document.querySelector('.index7').value === 'X' &&
//       document.querySelector('.index8').value === 'X') {
//       console.log("Player One Wins!");
//   }else if(document.querySelector('.index2').value === 'X' &&
//       document.querySelector('.index4').value === 'X' &&
//       document.querySelector('.index6').value === 'X') {
//       console.log("Player One Wins!");
//   }
//
// }

//
// parent.addEventListener('click', runWinner);

//-------way to switch players
