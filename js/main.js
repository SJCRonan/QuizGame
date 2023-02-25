let submitButton = document.querySelector('#submitButton');
let submitButton2 = document.querySelector('#submitButton2');
let resultBox = document.querySelector("#resultsbox");
let nextQuestion = document.querySelector("#nextQuestion")
let Questions = document.querySelector("#Question");
let labels = document.querySelectorAll("label")
let currentTurn = 0;
let countertext = document.querySelector("#countertext")
let timerbox = document.querySelector("#timerbox")
let quizScore = document.querySelector("h3")
let score = 0;

class Question{
    constructor(prompt, option1, option2, option3,option4, answer){
        this.prompt = prompt
        this.option1 = option1
        this.option2 = option2
        this.option3 = option3
        this.option4 = option4
        this.answer = answer
    }
}

questions = [
    new Question("Which planet has the most moons?", "Earth","Neptune", "Jupiter", "Saturn", "Jupiter"),
    new Question("Which of these D&D classes are not real?", "Wizard","Cleric", "Sorcerer", "Mage", "Mage"),
    new Question("What was the 75th quarter quells hunger game's arena environment?", "Tropics","Ruins", "Tundra", "Desert","Tropics")
]


function answerCheck(){
    let radio = document.querySelector('input[type="radio"]:checked');
    let guess = radio.nextElementSibling.innerHTML;
    console.log(guess)
    console.log(questions[currentTurn].answer)
    if(guess === questions[currentTurn].answer)
    {
        resultBox.innerHTML = "Correct!"
        resultBox.style.backgroundColor = "green"
        resultBox.style.color = "white"
        score += 1;
        quizScore.innerHTML = "Score:" + score;
        
    }


    else{
        resultBox.style.backgroundColor = "red"
        resultBox.innerHTML = "Wrong!"
        resultBox.style.color = "white"
        score -= 1;
        quizScore.innerHTML = "Score:" + score;
    }  
}
submitButton.onclick = answerCheck

function showNextQuestion(){
    
    if(resultBox.innerHTML === "Correct!")
    {
    currentTurn += 1;
    Questions.innerHTML = questions[currentTurn].prompt
    labels[0].innerHTML = questions[currentTurn].option1
    labels[1].innerHTML = questions[currentTurn].option2
    labels[2].innerHTML = questions[currentTurn].option3
    labels[3].innerHTML = questions[currentTurn].option4

    }
}

nextQuestion.onclick = showNextQuestion

let Counter = 15;

function tick(){
    
    Counter -=1;
    countertext.innerHTML = Counter;
    if(Counter === 9)
    {
       timerbox.style.backgroundColor = "orange"
       countertext.style.color = "orange"
    }

    else if(Counter === 5)
    {
       timerbox.style.backgroundColor = "red"
       countertext.style.color = "red"
    }

    if(Counter === 0){
        clearInterval(clock)
        OutOfTime();
    }
}

let clock = setInterval(tick, 1200)

function OutOfTime(){

        resultBox.innerHTML = "Times Up!"
        resultBox.style.backgroundColor = "orange"
        resultBox.style.color = "black"
    
}



