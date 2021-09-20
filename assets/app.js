let startButton = document.getElementById('start-btn')
let nextbutton = document.getElementById('next-btn')
let questionContainerElement = document.getElementById('question-container')
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click" , startGame)
nextbutton.addEventListener('click' , () => {
  currentQuestionIndex++
  setNextQuestion()
})

 function startGame() {
   startButton.classList.add('hide') 
   shuffledQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   questionContainerElement.classList.remove('hide') 
   setNextQuestion()
    console.log(remove);
 }

 

 function setNextQuestion(event) {
   showQuestion(shuffledQuestions[currentQuestionIndex])
 }

 function showQuestion(question) {
   questionElement.innerText = question.question
   questions.answer.forEach(answer => {
     let button = document.createElement('button')
     button.innertext = answer.text
     button.classList.add('btn')
     if (answer.correct) {
       button.dataset.correct = answer.correct
     }
     button.addEventListener('click' , selectAnswer )
     answerButtonsElement.appendChild(button)
   })
 }

 function resetState() {
    clearStatusClass(document.body)
    nextbutton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
 }

 function selectAnswer(e) {
   let selectedButton = e.target
   let correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonElement.children).forEach(button => {
       setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
     nextbutton.classList.remove('hide')
   } else{
       startButton.innerText = 'restart'
       startButton.classList.remove('hide')
   }
 }

 function setStatusClass(element, correct) {
   clearStatusClass(element)
   if (correct) {
     element.classList.add('correct')
   } else {
       element.classList.add('wrong')
   }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
 
let questions = [
  {
         question: 'Commonly used data types DO Not include:',
         answers: [
             { text: 'strings', correct: false },
             { text: 'booleans', correct: true },
             { text: 'alerts', correct: false },
             { text: 'numbers', correct: false }
         ]

      },
      {
         question: 'The condition in an if/else statement is enclosed with____.',
         answers: [
             { text: 'quotes', correct: false },
             { text: 'curly brackets', correct: false },
             { text: 'parenthesis', correct: true },
             { text: 'square brackets', correct: false }
         ]
     },
     {
         question: 'Arrays in JavaScript can be used to store______.',
         answers: [
             { text: 'numbers and strings', correct: false },
             { text: 'other arrays', correct: false },
             { text: 'booleans', correct: false },
             { text: 'all of the above', correct: true }
         ]
     },
     {
         question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
         answers: [
             { text: 'JavaScript', correct: false },
             { text: 'for loops', correct: true },
             { text: 'terminal/bash', correct: false },
             { text: 'console.log', correct: false }
         ]
     },
     {
        question: 'String values must be enclosed within _____ when being assigned to variables',
        answers: [
            { text: 'commas', correct: false },
            { text: 'quotes', correct: false },
            { text: 'curly brackets', correct: true },
            { text: 'parenthesis', correct: false }
        ]
    }
]

