const dogImageDiv = document.getElementById("dog-image")
const dogButton = document.getElementById ("dog-button")
// https://dog.ceo/api/breeds/image/random

function getNewDog () {
  fetch ("https://dog.ceo/api/breeds/image/random")
.then(response => response.json())
.then(json => {
dogImageDiv.innerHTML = `<img src = "${json.message}" height=300 width=300/>`
  
}) 
}

dogButton.onclick = () => {
    console.log ("you clicked me")
  getNewDog()
  }