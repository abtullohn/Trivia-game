To start the game there will be a start button.
The purpose of Trivia is to answers the questions correctly.
THe players will have 20 seconds for the first question
15 seconds for the second question and then 10 seconds for the last question
the questions will be randomized each time the players play.

make a function for a start button
make a function to go to the next question button
make function to show the question
make a function to shuffle the question
make an array of questions
within the array there will be the correct answer
if the answer is correct it will equal to truthy
if it is wrong it will be falsy
Add a function to end game


at the end of the game the game will show GAME OVER!





Hello everyone! Welcome to your Below Average Trivia game.
The reason why I picked this game is because it is one of my favorite games to play in a group setting! The theme for this trivia will be POTATOES. I dont know about you guys but through 3 weeks of this cohort I personally feel like a potato. 

<img src="https://i.imgur.com/zDUQF19.png">
<img src="https://i.imgur.com/ERnjN4R.png">

```js
function selectAnswer(e) {
  const selectedButton = e.target
  console.log(selectedButton)
  const correct = selectedButton.dataset.correct
  setStatusClass(e.target,correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
   
   
  }
}

```
The technologies that i've used to make this game possible is JS,HTML and CSS.
Throughout this project I am most proud of is setting a e.target for my answer buttons. Orignally when i click the answer it would color out my whole screen then i went into my function and set a target for the answer button therefore i could focus the background color into my answer buttons.

Here's the link to my game https://abtullohn.github.io/Trivia-game/

Q&A