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
var pointsystem = 0
function level1(){
  document.getElementById("character-place").style.display='none';
  pointsystem +=2
  console.log(pointsystem)
}

function level2(){
    document.getElementById("character-place2").style.display='none';
    pointsystem +=2
    console.log(pointsystem)
  }

  function level3(){
    document.getElementById("character-place3").style.display='none';
    pointsystem +=2
    console.log(pointsystem)
  }
