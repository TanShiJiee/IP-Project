var starGet=localStorage.getItem('stars');
$("#score-top").text(starGet);

function item1(){
    if (starGet>=25){
        starGet-=25
        console.log(starGet)
        localStorage.setItem('stars',parseInt(starGet))
        $("#score-top").text(starGet);
        document.getElementById("item-collect1").style.display = "block"
        document.getElementById("item-warning1").style.display = "none"
    }
    else{
        document.getElementById("item-warning1").style.display = "block"
        document.getElementById("item-collect1").style.display = "none"
    }
}

function item2(){
    if (starGet>=25){
        starGet-=25
        console.log(starGet)
        localStorage.setItem('stars',parseInt(starGet))
        $("#score-top").text(starGet);
        document.getElementById("item-collect2").style.display = "block"
        document.getElementById("item-warning2").style.display = "none"
    }
    else{
        document.getElementById("item-warning2").style.display = "block"
        document.getElementById("item-collect2").style.display = "none"
    }
}

function item3(){
    if (starGet>=35){
        starGet-=35
        console.log(starGet)
        localStorage.setItem('stars',parseInt(starGet))
        $("#score-top").text(starGet);
        document.getElementById("item-collect3").style.display = "block"
        document.getElementById("item-warning3").style.display = "none"
    }
    else{
        document.getElementById("item-warning3").style.display = "block"
        document.getElementById("item-collect3").style.display = "none"
    }
}

function item4(){
    if (starGet>=35){
        starGet-=35
        console.log(starGet)
        localStorage.setItem('stars',parseInt(starGet))
        $("#score-top").text(starGet);
        document.getElementById("item-collect4").style.display = "block"
        document.getElementById("item-warning4").style.display = "none"
    }
    else{
        document.getElementById("item-warning4").style.display = "block"
        document.getElementById("item-collect4").style.display = "none"
    }
}

function item5(){
    if (starGet>=45){
        starGet-=45
        console.log(starGet)
        localStorage.setItem('stars',parseInt(starGet))
        $("#score-top").text(starGet);
        document.getElementById("item-collect5").style.display = "block"
        document.getElementById("item-warning5").style.display = "none"
    }
    else{
        document.getElementById("item-warning5").style.display = "block"
        document.getElementById("item-collect5").style.display = "none"
    }
}

function item6(){
    if (starGet>=45){
        starGet-=45
        console.log(starGet)
        localStorage.setItem('stars',parseInt(starGet))
        $("#score-top").text(starGet);
        document.getElementById("item-collect6").style.display = "block"
        document.getElementById("item-warning6").style.display = "none"
    }
    else{
        document.getElementById("item-warning6").style.display = "block"
        document.getElementById("item-collect6").style.display = "none"
    }
}