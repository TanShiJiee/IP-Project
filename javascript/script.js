//Login Page
/*If users enter the correct password and email, when they click on the login button,
the page will automatically go to the home page. If not it stays at the login page*/
/*check from database whether email and password match*/
$(document).ready(function () {
    const APIKEY = "61f2a3b17e5527229501717c";

    $("#login-button").on("click", function (e) {
        e.preventDefault();
        compareData();

    })
    
    function compareData() {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://loginpage-35b6.restdb.io/rest/login-users",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
          }
          
          $.ajax(settings).done(function (response) {
            loginEmail = $(".email").val();
            let loginPassword = $(".password").val();
            for (var i = 0; i < response.length; i++) {
                if (response[i].Password==loginPassword && response[i].Email==loginEmail){
                    starPoints = response[i].stars
                    document.getElementById("login-field").style.display = "none";
                    document.getElementById("signup-link").style.display = "none";
                    document.getElementById("login-button").style.display = "none";
                    document.getElementById("enter-logo").style.display = "none";
                    localStorage.setItem('stars',starPoints)
                    timeSeconds()
                }
                else{
                    continue
                };
            };
          });
        };
});
/*function to play when password and email match with database*/
//loading screen appears for 3 seconds before redirecting to home page
function timeSeconds(){
    document.getElementById("loading-animation").style.display = "flex";
    setTimeout(function(){goToHome()},4000)
}
function goToHome(){
    window.location = "index.html"

}
//Sign Up Page
//Users cannot have the same email if not a warning will appear
// Users has to type the same password twice to confirm it if not a warning will appear
$(document).ready(function () {
    const APIKEY = "61f2a3b17e5527229501717c";
    
    $("#signup-button").on("click", function (e) {
        e.preventDefault();
        inputData();
    })
    function inputData() {
        let signUpEmail = $("#email").val();
        let signUpPassword = $("#password").val();
        let signUpConfirm = $("#confirm-password").val();
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://loginpage-35b6.restdb.io/rest/login-users",
            "method": "GET",
            "headers": {
              "content-type": "application/json",
              "x-apikey": APIKEY,
              "cache-control": "no-cache"
            }
        }
          
          $.ajax(settings).done(function (response) {
            console.log(response);
            //check whether is in use for another 
            var verify=0;
            for (var i = 0; i < response.length; i++) {
                if (response[i].Email == signUpEmail){
                    document.getElementById("email-warning").style.display = "block";
                    verify+=1
                    break
                }

                else{
                    document.getElementById("email-warning").style.display = "none";
                    continue
                };
            };
            
            if (signUpPassword == signUpConfirm ){
                document.getElementById("password-warning").style.display = "none";    
            }
            else{
                document.getElementById("password-warning").style.display = "block";
                verify+=1
            }
            if (verify<1){
                var jsondata = {"Email": signUpEmail,"Password": signUpPassword, "stars":0};
                var settings = {
                    "async": true,
                    "crossDomain": true,
                    "url": "https://loginpage-35b6.restdb.io/rest/login-users",
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
                    window.location = "login.html"

                    });
            }
        
        });
      };
});




