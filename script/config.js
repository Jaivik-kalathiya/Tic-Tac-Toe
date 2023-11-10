function openPlayerConfig() {
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
  }
  
  function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutput.textContent='';
  }
  
  function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();
    
    if(!enteredPlayername){
        event.target.firstElementChild.classList.add('error');
        errorsOutput.textContent='Please Enter the Name!';
        return;
    }
    //console.log(enteredPlayername);
  }