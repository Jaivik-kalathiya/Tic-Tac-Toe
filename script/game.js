function startNewGame(){
    if(players[0].name==='' || players[1].name===''){
        alert('please add both player name properly');
        return;
    }
    activePlayerName.textContent=players[activePlayer].name;
    gameAreaElement.style.display='block';
}

function switchPlayer(){
    if(activePlayer===0){
        activePlayer=1;
    }else{
        activePlayer=0;
    }
    activePlayerName.textContent=players[activePlayer].name;
}

function selectGameField (event){
  if(event.target.tagName!=='LI'){ // avoiding the clicks on the gap between the blocks  
    return;
  }

    event.target.textContent=players[activePlayer].symbol;
    event.target.classList.add('disabled');
    switchPlayer();

}