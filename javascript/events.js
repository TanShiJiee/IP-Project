var count = 0;

function questionOne(className){
    console.log(className)
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
    console.log(className)
    if (className == "choice-four"){
        count+=1
        console.log(count)
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
    console.log(className)
    if (className == "choice-one"){
        count+=1
        console.log(count)
        document.getElementById("question-three").style.display = "none"; 
        document.getElementById("score").style.display = "block"; 
        $("#points").text(count + '/3');
        $("#stars-earned").text("+ "+count +" star");
        var starGet=localStorage.getItem('stars');
        localStorage.setItem('stars',parseInt(starGet)+parseInt(count))
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
        displayScore()
    }
}


function displayScore(){
    var starGet=localStorage.getItem('stars');
    $("#score-top").text(starGet);

}
displayScore()
