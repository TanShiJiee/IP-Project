var count = 0;
const APIKEY = "61f2a3b17e5527229501717c";
function questionOne(className){
    if (className == "choice-three"){
        count+=1
        console.log(count)
        document.getElementById("question-one").style.display = "none"; 
        document.getElementById("question-two").style.display = "block"; 

    }
    else{
        count+=0
        document.getElementById("question-one").style.display = "none"; 
        document.getElementById("question-two").style.display = "block"; 
    
    }
}

function questionTwo(className){
    if (className == "choice-four"){
        count+=1
        document.getElementById("question-two").style.display = "none"; 
        document.getElementById("question-three").style.display = "block"; 
        
    }
    else{
        count+=0
        document.getElementById("question-two").style.display = "none"; 
        document.getElementById("question-three").style.display = "block"; 

    }
}

function questionThree(className){
    if (className == "choice-one"){
        count+=1
        document.getElementById("question-three").style.display = "none"; 
        document.getElementById("score").style.display = "block"; 
        $("#points").text(count + '/3');
        $("#stars-earned").text("+ "+count +" star");
        var starGet=localStorage.getItem('stars');
        localStorage.setItem('stars',parseInt(starGet)+parseInt(count))
        var starGet=localStorage.getItem('stars');
        if (count>=2){
            document.getElementById("trophy-animation").style.display = "block"; 
        }
        else{
            document.getElementById("sad-animation").style.display = "block"; 
        }
        displayScore()
    }

    else{
        count+=0
        document.getElementById("question-three").style.display = "none"; 
        document.getElementById("score").style.display = "block"; 
        $("#points").text(count + '/3');
        $("#stars-earned").text("+ "+count +" star");
        var starGet=localStorage.getItem('stars');
        localStorage.setItem('stars',parseInt(starGet)+parseInt(count))
        var starGet=localStorage.getItem('stars');
        if (count>=2){
            document.getElementById("trophy-animation").style.display = "block"; 
        }
        else{
            document.getElementById("sad-animation").style.display = "block"; 
        }
        displayScore()
    }
}

function displayScore(){
    var starGet=localStorage.getItem('stars');
    $("#score-top").text(starGet);
}

displayScore();

// hide and seek point system [for every round they can score 2 star]
var pointSystem = 0
function levelOne(){
    document.getElementById("character-place").style.display='none';
    pointSystem +=2
    console.log(pointSystem)
    document.getElementById("game-text").style.display = "block";
    var starGet=localStorage.getItem('stars');
    localStorage.setItem('stars',parseInt(starGet)+parseInt(pointSystem));
    displayScore()
    setTimeout(showLevelTwo,3000)
}

function showLevelTwo(){
    document.getElementById("seek-container-two").style.display='block';
    document.getElementById("seek-container").style.display='none';
    document.getElementById("game-text").style.display = "none";
}

function levelTwo(){
    document.getElementById("character-place-two").style.display='none';
    pointSystem=0
    pointSystem +=2
    console.log(pointSystem)
    document.getElementById("game-text-two").style.display = "block";
    var starGet=localStorage.getItem('stars');
    localStorage.setItem('stars',parseInt(starGet)+parseInt(pointSystem));
    displayScore()
    setTimeout(showLevelThree,3000)
}

function showLevelThree(){
    document.getElementById("seek-container-three").style.display='block';
    document.getElementById("seek-container-two").style.display='none';
    document.getElementById("game-text-two").style.display = "none";
}

function levelThree(){
    document.getElementById("character-place-three").style.display='none';
    pointSystem=0
    pointSystem +=2
    console.log(pointSystem)
    document.getElementById("game-text-three").style.display = "block";
    var starGet=localStorage.getItem('stars');
    localStorage.setItem('stars',parseInt(starGet)+parseInt(pointSystem));
    displayScore()
    setTimeout(finishGame,3000)
}

function finishGame(){
    document.getElementById("seek-container-three").style.display='none';
    document.getElementById("play-animation").style.display = "block";
}

//Events Section [sign up button, players earn stars when they sign up for some events]
function displayEvents(){
    document.getElementById("events-button").style.display='none';
    var starGet=localStorage.getItem('stars');
    localStorage.setItem('stars',parseInt(starGet)+parseInt(2));
    document.getElementById("competiton-details").innerHTML = "<h2>You have signed up successfully!</h2><br> Do ensure that your \
    submission meets the requirement before submitting <br> - At least 512 x 512 pixels JPG file <br> \
    - No vulgarities or explicit content  <br> \
    - Must be related to technology<br><br> \
    Submit your JPG file to <b>nplogoict@gmail.com</b>"
    displayScore()
}

//comment section [send to restdb and print on webpage]
$(document).ready(function () {
    const APIKEY = "61f2a3b17e5527229501717c";
    
    $("#comment-button").on("click", function (e) {
        e.preventDefault();
        getComment();
    })
    function getComment() {
        let commentName = $("#comment-name").val();
        let commentInput = $("#comment-comment").val();
        var jsondata = {"Name": commentName,"Comment": commentInput};
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://loginpage-35b6.restdb.io/rest/comments",
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata)
        }

        $.ajax(settings).done(function (response) {
        console.log(response);
        });

        displayComment()
    
    };
});
function displayComment(){
    $("#comment-form")[0].reset();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://loginpage-35b6.restdb.io/rest/comments",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        }
    }
      
    $.ajax(settings).done(function (response) {
        let content =''
        for (var i = 0; i < response.length; i++) {
            content += "<tr><td>" + response[i].Name +":" + "</td>" +
            "<td>" + response[i].Comment + "</td>" 
        }
        $("#comment-list tbody").html(content);
    });
}
displayComment()