
var questions = [
    {
      question: 'HTML is programming language ?',
      answers: [
        { text: 'No', correct: true },
        { text: 'Yes', correct: false }
      ]
    },
    {
      question: 'CSS stand for',
      answers: [
        { text: 'cascading compoun sheet', correct: false },
        { text: 'corporate sheet style', correct: false },
        { text: 'commsission social service', correct: false },
        { text: 'cascading style sheet', correct: true }
      ]
    },
    {
      question: 'Javascript is programming language ?',
      answers: [
       { text: 'No', correct: false },
        { text: 'YES', correct: true },
        { text: 'may be', correct: false },
        { text: 'sometime use as', correct: false }
      ]
    },
    {
      question: 'Are you attemping a quize ?',
      answers: [
        { text: 'No', correct: false },
        { text: 'Yes', correct: true }
      ]
    }
  ]

var startButton = document.getElementById('start-btn')
var nextButton = document.getElementById('next-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  var selectedButton = e.target
var correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
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
var score = 0;
var scoretext = document.getElementById('scoretext');
function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
    console.log(score++);
    scoretext.innerHTML=score;
    
  }
    
   
 
}


function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}
