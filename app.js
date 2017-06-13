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
  console.log(event.target.value);
  return pickMe.value = "X";
}

parent.addEventListener('click', logParent)
// not give the element an abilitity to be clicked
// pickMe.addEventListener('click', function() {
//   squareBox.textContent = "";
//   return squareBox.value = onlySolution;
// })
