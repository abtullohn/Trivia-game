console.log('js loaded')

const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#score');


let currentQuestion = {}
let acceptAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: 'which state is known for potatoes?',
        choice1: 'Alabama',
        choice2: 'Idaho',
        choice3: 'Alaska',
        choice4: 'Oregon',
        answer: 2,
    },
    {
        question: 'when did the Lays company start?',
        choice1: 'Sept 1961',
        choice2: 'Sept 1951',
        choice3: 'July 1961',
        choice4: 'Feb 1981',
        answer: 1,
    },
    {
        question: 'who is the most powerful potato? ',
        choice1: 'Darth tater',
        choice2: 'mash',
        choice3: 'yams',
        choice4: 'sweet',
        answer: 1,
    },
    {
        question: 'which food has potatoes in them?',
        choice1: 'lasagna',
        choice2: 'tater tots',
        choice3: 'burgers',
        choice4: 'oreos',
        answer: 2,
    },
    {
        question: 'what are potatoes consists of?',
        choice1: '80% water 20% solid',
        choice2: '20% water 80% solid',
        choice3: 'just eat it',
        choice4: 'French fries',
        answer: 1,
    }
]

const score_points = 100
const max_questions = 4

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [... questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > max_questions) {
        localStorage.setItem('mostRecent')
    }
}