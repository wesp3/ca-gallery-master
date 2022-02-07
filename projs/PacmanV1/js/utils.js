function printMat(mat, selector) {
  var strHTML = '<table border="0"><tbody>';
  for (var i = 0; i < mat.length; i++) {
    strHTML += '<tr>';
    for (var j = 0; j < mat[0].length; j++) {
      var cell = mat[i][j];
      var className = 'cell cell-' + i + '-' + j;
      strHTML += '<td class="' + className + '">' + cell + '</td>'
    }
    strHTML += '</tr>'
  }
  strHTML += '</tbody></table>';
  var elContainer = document.querySelector(selector);
  elContainer.innerHTML = strHTML;
}

// location such as: {i: 2, j: 7}
function renderCell(location, value) {
  // Select the elCell and set the value
  var elCell = document.querySelector(`.cell-${location.i}-${location.j}`);
  elCell.innerHTML = value;
}

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function printGameOver(state, selector){
  var overHTML = '';
  if(state == 'win'){
    overHTML = '<div class="gameover"><p class="title">You Win!</p><button onclick="playAgain()" class="play-again">Play Again</button></div>';
  } else {
    overHTML = '<div class="gameover"><p class="title">Game Over</p><button onclick="playAgain()" class="play-again">Play Again</button></div>';
  }
  var overContainer = document.querySelector(selector);
  overContainer.innerHTML = overHTML;
}