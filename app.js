//clic must actually give a function of X
var onlySolution = "X"

// a div must be able to be selected
// first give the div an ability to seen

var pickMe = document.querySelector('div')

// not give the element an abilitity to be clicked
pickMe.addEventListener('click', function() {

  console.log(onlySolution);;
})
