const buttons = document.querySelectorAll("button")

buttons.forEach(button => {
  button.addEventListener("click", () => play(button.innerText.toLowerCase()))
})

let playerScore = 0
let IAScore = 0
displayScore()

const choices = ["pierre", "feuille", "sciseaux"]

function play(playerChoice){
  const iaChoice = choices[Math.floor(Math.random() * choices.length)]
  whoWin(playerChoice, iaChoice)
  displayScore()
}


function whoWin(playerChoice, IAChoice){
  if(playerChoice === "feuille" && IAChoice === "pierre" ||
    playerChoice === "pierre" && IAChoice === "sciseaux" ||
    playerChoice === "sciseaux" && IAChoice === "feuille"
  ){
    playerScore++
  }else if(IAChoice === "feuille" && playerChoice === "pierre" ||
    IAChoice === "pierre" && playerChoice === "sciseaux" ||
    IAChoice === "sciseaux" && playerChoice === "feuille"
  ){
    IAScore++
  }

  document.querySelector(".result").innerText= `L'IA a fait ${IAChoice}, et le player a fait ${playerChoice}`
}

function displayScore(){
  document.querySelector(".playerScore").innerText = playerScore
  document.querySelector(".IAScore").innerText = IAScore
}