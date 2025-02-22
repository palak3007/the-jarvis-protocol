let loader = document.querySelector(".loader")
setInterval(function(){
        loader.style.top = "-100%"
},4800)

const questions = [
 {
     question: 'Name a language used for web development?',
     choices: ['JavaScript', 'Swift', ' Kotlin', 'Ruby'],
     answer: 'JavaScript'
 },
 {
     question: 'Which language is used for Android apps?',
     choices: ['Swift', 'PHP', 'Python', 'Java'],
     answer: 'Java'
 },
 {
     question: 'What is a class in OOP?"?',
     choices: ['An array', 'A variable', 'A function', 'A blueprint for objects'],
     answer: 'A blueprint for objects'
 },
 {
     question: 'What does the async keyword do in JavaScript?',
     choices: ['It stops the execution of a function', 'It synchronizes multiple functions', 'It makes a function return a promise', 'It pauses the execution of a function'],
     answer: 'It makes a function return a promise'
 },
 {
     question: 'What will be the output of the following code: console.log(typeof([]));?',
     choices: ['array', 'object','list','undefined'],
     answer: 'object'
 },
 {
     question: 'Which of the following is NOT a reserved word in JavaScript?',
     choices: ['program', 'throws','interface','short'],
     answer: 'program'
 }

];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');

function loadQuestion() {
 const currentQuestion = questions[currentQuestionIndex];
 questionElement.textContent = currentQuestion.question;
 choicesElement.innerHTML = '';

 currentQuestion.choices.forEach(choice => {
     const button = document.createElement('button');
     button.textContent = choice;
     button.addEventListener('click', () => selectAnswer(choice));
     const li = document.createElement('li');
     li.appendChild(button);
     choicesElement.appendChild(li);
 });
}

function selectAnswer(choice) {
 const currentQuestion = questions[currentQuestionIndex];
 if (choice === currentQuestion.answer) {
     score++;
 }
 currentQuestionIndex++;
 if (currentQuestionIndex < questions.length) {
     loadQuestion();
 } else {
     showScore();
 }
}

function showScore() {
 questionElement.textContent = 'Quiz Over!';
 choicesElement.innerHTML = '';
 scoreElement.textContent = `Your score: ${score} / ${questions.length}`;
}

loadQuestion();