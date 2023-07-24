let startBtn=document.getElementById("start-btn");
let nextBtn=document.getElementById("next-btn");
let container=document.getElementById("questionContainer");
let question_c=document.getElementById("questions");
let choice_list=document.getElementById("choice_list_content");

const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

const questions = [
    {
      questionText: "Commonly used data types DO NOT include:",
      options: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
      answer: "3. alerts",
    },
    {
      questionText: "Arrays in JavaScript can be used to store ______.",
      options: [
        "1. numbers and strings",
        "2. other arrays",
        "3. booleans",
        "4. all of the above",
      ],
      answer: "4. all of the above",
    },
    {
      questionText:
        "String values must be enclosed within _____ when being assigned to variables.",
      options: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
      answer: "3. quotes",
    },
    {
      questionText:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      options: [
        "1. JavaScript",
        "2. terminal/bash",
        "3. for loops",
        "4. console.log",
      ],
      answer: "4. console.log",
    },
    {
      questionText:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      options: ["1. break", "2. stop", "3. halt", "4. exit"],
      answer: "1. break",
    },
  ];
  

startBtn.addEventListener("click",startGame);

function startGame(){
    
    startBtn.classList.add("hide");
    displayQuestion(questions);

}

function displayQuestion(questions){
    var randomIndex = Math.floor(Math.random() * questions.length);
    var questObject=questions[randomIndex];
    var quesContent=questObject.questionText;
    question_c.innerHTML=quesContent;
    
    

    
       
}