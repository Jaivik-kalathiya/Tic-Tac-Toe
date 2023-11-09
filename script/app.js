const playerConfigOverlayElement=document.querySelector('#config-overlay');
const backdropElement=document.querySelector("#backdrop");

const editPlayer1Button=document.querySelector('#edit-palyer-1-btn');
const editPlayer2Button=document.querySelector('#edit-palyer-2-btn');
const cancelConfigButton=document.querySelector('#cancel-config-btn');


editPlayer1Button.addEventListener('click',openPlayerConfig);
editPlayer2Button.addEventListener('click',openPlayerConfig);


cancelConfigButton.addEventListener('click',closePlayerConfig);
backdropElement.addEventListener('click',closePlayerConfig)
