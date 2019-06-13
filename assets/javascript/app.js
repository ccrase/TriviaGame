//questions object
let questions = [{
    question: "What does HTML stand for?",
    picture: "../assets/images/HTML.jpg",
    choiceA: "Help Todd Make Lasagna",
    choiceB: "Hyper Text Markup Language",
    choiceC: "wrong",
    choiceD: "wrong",
    correctAnswer: "B"
},{
    question: "What does CSS stand for?",
    picture: "../assets/images/HTML.jpg",
    choiceA: "right",
    choiceB: "wrong",
    choiceC: "wrong",
    choiceD: "wrong",
    correctAnswer: "A"
},{
    question: "What does AJAX stand for?",
    picture: "../assets/images/HTML.jpg",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "wrong",
    choiceD: "right",
    correctAnswer: "D"
},{
    question: "What does  stand for?",
    picture: "../assets/images/HTML.jpg",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "right",
    choiceD: "wrong",
    correctAnswer: "C"
},{
    question: "What does  stand for?",
    picture: "../assets/images/HTML.jpg",
    choiceA: "wrong",
    choiceB: "right",
    choiceC: "wrong",
    choiceD: "wrong",
    correctAnswer: "B"
},{
    question: "What does  stand for?",
    picture: "../assets/images/HTML.jpg",
    choiceA: "wrong",
    choiceB: "wrong",
    choiceC: "wrong",
    choiceD: "right",
    correctAnswer: "D"
}];
//declare variables
let hasGamestarted = false;
const lastQuestion = questions.length-1;

//used for gauge unit
let questionTime = 10;
let gaugeWidth = 150;
let gaugeUnit = gaugeWidth / questionTime;


let qIndex = 0;
let counter = 0;
let score = 0;
let TIMER;


function startGame(){
    //hide the start button
    $('#start').hide();
    //change hasGamestarted to TRUE
    if(!hasGamestarted){
        hasGamestarted = true;
    };
    displayQuestion();
    showProgress();
    startCounter();
    TIMER = setInterval(startCounter, 1000);
};

function displayQuestion(){
    $(".quiz-div").show();
    let q = questions[qIndex];
    //display question
    $("#question").html(q.question);

    //display options in their respective divs
    $("#A").html(q.choiceA);
    $("#B").html(q.choiceB);
    $("#C").html(q.choiceC);
    $("#D").html(q.choiceD);

    //display picture. We want this to appear when time is up or user makes a guess
    $("#imgQ").attr("src", q.picture);
    $('#imgQ').show();
};

//function to create placeholders to mark the progress of the game 
function showProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        $("#progress").append("<div class= 'progressMark'  id=" + qIndex + "></div>");
    };
};

function startCounter(){
    if(counter <= questionTime){
        $("#count").html(counter);
        
        //counter gauge that increases in size
        $('#counter-gauge').width((counter * gaugeUnit) + "px");
        counter++
     }else{
         counter = 0;
         wrongAnswer();

         if(qIndex < lastQuestion){
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
         console.log(score);
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
    $("#" + qIndex).css("background-color", "red");
};

function rightAnswer(){
    $("#" + qIndex).css("background-color", "blue");
};

function printScore(){
    //show score div on page
    $("#score").show();

    //hide the counter and gauge
    $("#count").hide();
    $("#counter-gauge").hide();

    //calculate percentage
    let scorePercent = Math.round(100 * score/ questions.length);
    $("#score").html(scorePercent);
};