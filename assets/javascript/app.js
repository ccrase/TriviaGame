//questions object
let questions = [{
    question: "What does HTML stand for?",
    picture: "https://giphy.com/embed/12hdeiFVeNm0Ug",
    choiceA: "Help Todd Make Lasagna",
    choiceB: "Hyper Text Markup Language",
    choiceC: "wrong",
    choiceD: "wrong",
    correctAnswer: "B"
},{
    question: "What does CSS stand for?",
    picture: "https://giphy.com/embed/8T2CMRKs6wKic",
    choiceA: "right",
    choiceB: "wrong",
    choiceC: "wrong",
    choiceD: "wrong",
    correctAnswer: "A"
},{
    question: "What does AJAX stand for?",
    picture: "https://giphy.com/embed/Gf3fU0qPtI6uk",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "wrong",
    choiceD: "right",
    correctAnswer: "D"
},{
    question: "What does  stand for?",
    picture: "https://giphy.com/embed/UHEKI6FICUSIw",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "right",
    choiceD: "wrong",
    correctAnswer: "C"
},{
    question: "What does  stand for?",
    picture: "https://giphy.com/embed/xThuWp2hJABbmc20Ew",
    choiceA: "wrong",
    choiceB: "right",
    choiceC: "wrong",
    choiceD: "wrong",
    correctAnswer: "B"
},{
    question: "What does  stand for?",
    picture: "https://giphy.com/embed/T1Brve7Wp6gg",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "wrong",
    choiceD: "right",
    correctAnswer: "D"
}];
//declare variables
let hasGamestarted = false;
const lastQuestion = questions.length-1;
let questionTime = 10;

let qIndex = 0;
let counter = 0;
let score = 0;
let TIMER;


function startGame(){
    //change hasGamestarted to TRUE
    if(!hasGamestarted){
        hasGamestarted = true;
    };
    //hide the start button
    $('#start').hide();
    displayQuestion();
    startCounter();
    TIMER = setInterval(startCounter, 1000);
    
    //display picture. We want this to appear when time is up or user makes a guess
};

function displayQuestion(){
    $(".quiz-div").show();
    $('#imgQ').show();
    console.log(questions[qIndex].picture);
    $("#imgQ").attr("src = '" + questions[qIndex].picture + "'");
    //$('#imgQ').attr("src=", questions[qIndex].picture);
    let q = questions[qIndex];
    //display question
    $("#question").html(q.question);

    //display options in their respective divs
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    $("#D").html(q.choiceD);

};

// function to create placeholders to mark the progress of the game 
// function showGif(){
//     for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         $("#progress").append("<div class= 'progressMark'  id=" + qIndex + "></div>");
//     };
// };

function startCounter(){
    if(counter <= questionTime){
        $("#count").html(counter);
         counter++
         
     }else{
         counter = 0;
         wrongAnswer();

         if(qIndex < lastQuestion){
            questionTime = 0;
             qIndex++;
             displayQuestion();
         }else{
             clearInterval(TIMER);
             printScore();
         };
     };
};

function checkAnswer(answer){
    if(answer == questions[qIndex].correctAnswer){
        console.log("right on")
         score++;
         rightAnswer();

     }else{
         wrongAnswer();
     }
     counter = 0;
     if(qIndex < lastQuestion){
        qIndex++;
        displayQuestion();
     }
     else{
         clearInterval(TIMER);
         printScore();
     }
};

function wrongAnswer(){

    //print in the message div
    $("#message").text("Nope! The correct answer is: ")//give time limit then disappear
};

function rightAnswer(){
    $("#message").text("Nice! You pick is correct!")//give time limit then disappear
};

function printScore(){
    //show score div on page
    $("#score").show();

    //hide the counter and gauge
    $("#count").hide();

    //calculate percentage
    let scorePercent = Math.round(100 * score/ questions.length);
    $("#score").html(scorePercent + "%");
    //endGame();
};
// function endGame(){
//     qIndex = 0;
//     counter = 0;
//     score = 0;
//     hasGamestarted = false;
//     playAgain();
// };

// function playAgain(){

//     $("#clear").show();
//     $("#message").empty();

// };