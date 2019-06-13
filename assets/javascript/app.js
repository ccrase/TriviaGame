$(document).ready(function(){

    const questions = [{
        question: "How many toes does a human have?",
        choices: ["10", "3", "8,", "5"],
        answer: 0,
        gif: ""
    },
    {
        question: "What color is a strawberry?",
        choices: ["yellow", "green", "red", "pink"],
        answer: 2,
        gif: ""
    },
    {
        question: "How fast do fingernails grow?",
        choices: ["1/2in week", "1 mm day", "1 foot per year", "2 in a month"],
        answer: 1,
        gif: ""
    }];

    let rightCount;
    let wrongCount;
    let unanswerCount;
    let timer;
    let intervalId;
    let userGuess;
    let gamePlaying = false;
    const questionCount = questions.length;
    let pick;
    let index;
    let newArray = [];
    let holder = [];

    //click the start button to run the game
    $('#start').on("click", function(){
        $('#start').hide();
        displayQuestion();
        runTimer();
        //store question objects in the holder array
        for(var i = 0; i < questions.length; i++){
            holder.push(questions[i]);
        }
        console.log(holder);
    });

    function runTimer(){
        if(!gamePlaying){
            gamePlaying = true;
            intervalId = setInterval(countDown, 1000);
        }
    };

    function countDown(){
        $('#count-down').html("<h3>Time left: " + timer + "</h3>");
        timer--;

            if (timer === 0) {
                unanswerCount++;
                stop();
                $("#answer-block").html("<p>Time is up! The correct answer was: " + pick.choice[pick.answer] + "</p>");
                hidepicture();
        };  

    };

    function stop(){
        gamePlaying = false;
        clearInterval(intervalId);
    };

    function displayQuestion(){
        index = Math.floor(Math.random()* questions.length);
        pick = questions[index];

        $('#question-div').html("<h2>" + pick.question + "</h2>");
        for(var i = 0; i < pick.choices.length; i++){
            var userChoice = $('div');
            userChoice.addClass('answer-choice');
            userChoice.html(pick, choice[i]);

            userChoice.attrib("guess-value", i);
            $('#answer-block').append(userChoice);
        };
    };

    $('.answer-choice').on("click", function(){
        userGuess = parseInt($(this)).attr("guess-value");

        if(userGuess === pick.answer){
            stop();
            correctCount++;
            userGuess="";
            $("#answer-block").html("<p>Correct!</p>");
            hidepicture();
        }else{
            stop();
            wrongCount++;
            userGuess="";
            $("#answer-block").html("<p>Wrong! The correct answer is " + pick.choice[pick.answer] + "</p>");
            hidepicture();            
        }
    });







});