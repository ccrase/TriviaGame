//questions object
let questions = [{
    question: "What is Chandlers middle name?",
    picture: "https://giphy.com/embed/12hdeiFVeNm0Ug",
    choiceA: "Joe",
    choiceB: "Jeff",
    choiceC: "Robert",
    choiceD: "Ethan",
    correctAnswer: "B",
    correctAnswerText: "Robert!"
},{
    question: "What kind of car did Pheobe have?",
    picture: "https://giphy.com/embed/8T2CMRKs6wKic",
    choiceA: "Taxi",
    choiceB: "School Bus",
    choiceC: "Limo",
    choiceD: "Honda Accord",
    correctAnswer: "A",
    correctAnswerText: "Taxi!"
},{
    question: "What is the name of the famous cafe?",
    picture: "https://giphy.com/embed/Gf3fU0qPtI6uk",
    choiceA: "Central Park Cafe",
    choiceB: "Perk Cafe",
    choiceC: "Central Coffee",
    choiceD: "Central Perk",
    correctAnswer: "D",
    correctAnswerText: "Central Perk!"
},{
    question: "Who was Ross's 1st wife?",
    picture: "https://giphy.com/embed/UHEKI6FICUSIw",
    choiceA: "Linda",
    choiceB: "Josephine",
    choiceC: "Carol",
    choiceD: "Catherine",
    correctAnswer: "C",
    correctAnswerText: "Carol!"
},{
    question: "What was joey's career?",
    picture: "https://giphy.com/embed/xThuWp2hJABbmc20Ew",
    choiceA: "Musician",
    choiceB: "Actor",
    choiceC: "Statistical Analyist",
    choiceD: "Singer",
    correctAnswer: "B",
    correctAnswerText: "Actor!"
},{
    question: "What was Monica's childhood dog's name?",
    picture: "https://giphy.com/embed/T1Brve7Wp6gg",
    choiceA: "Co-Co",
    choiceB: "Boo-Boo",
    choiceC: "Ci-Ci",
    choiceD: "Chi-Chi",
    correctAnswer: "D",
    correctAnswerText: "Chi-Chi!"
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
    $("#message").html("<h5> Wrong. The correct answer is: </h5><h2>" + questions[qIndex].correctAnswerText + "</h2>");//give time limit then disappear
};

function rightAnswer(){
    $("#message").html("<h5>Nice! You pick is correct!</h5>")//give time limit then disappear
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