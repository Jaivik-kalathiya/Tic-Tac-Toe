function startNewGame() {
  if (players[0].name === "" || players[1].name === "") {
    alert("please add both player name properly");
    return;
  }
  activePlayerName.textContent = players[activePlayer].name;
  gameAreaElement.style.display = "block";
}

function switchPlayer() {
  if (activePlayer === 0) {
    activePlayer = 1;
  } else {
    activePlayer = 0;
  }
  activePlayerName.textContent = players[activePlayer].name;
}

function selectGameField(event) {
  if (event.target.tagName !== "LI") {
    // avoiding the clicks on the gap between the blocks
    return;
  }
  const selectedField = event.target;
  const selectedColumn = selectedField.dataset.col - 1; // here we don't have to write "+" bcz we do the mathematical opr so it will convert string to the number.Although we can also add "+".
  const selectedRow = selectedField.dataset.row - 1;

  if(gameData[selectedRow][selectedColumn]>0){
    alert('Please select an empty field!');
    return;
  }

  selectedField.textContent = players[activePlayer].symbol;
  selectedField.classList.add("disabled");


  gameData[selectedRow][selectedColumn] = activePlayer + 1;
console.log(gameData);
  switchPlayer();
}
 