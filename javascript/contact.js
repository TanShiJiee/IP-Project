var starGet=localStorage.getItem('stars');
$("#score-top").text(starGet);
//Checking for document if it is working
$(document).ready(function () {
    const APIKEY = "61d3dccbccd0211b32089696";
    getContacts();
    $("#update-contact-container").hide();
    $("#add-update-msg").hide();
  
    //Create Submit form listener
    $("#contact-submit").on("click", function (e) {
      //prevent default action of the button 
      e.preventDefault();
  
      //Retrieve form data
      //Check for validation
      let contactName = $("#contact-name").val();
      //let contactMentor = $("#contact-mentor").val();
      //let contactClass = $("#contact-class").val();
      let contactEmail = $("#contact-email").val();
      let contactMessage = $("#contact-msg").val();
  
      let jsondata = {
        "name": contactName,
        //"mentor": contactMentor,
        //"class": contactClass,
        "email": contactEmail,
        "message": contactMessage
      };
  
      //API Key
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-9d87.restdb.io/rest/contact",
        "method": "POST", //[cher] we will use post to send info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
        "processData": false,
        "data": JSON.stringify(jsondata),
        "beforeSend": function(){
          //@TODO use loading bar instead
          //disable our button or show loading bar
          $("#contact-submit").prop( "disabled", true);
          //clear our form using the form id and triggering it's reset feature
          $("#add-contact-form").trigger("reset");
        }
      }
  
      //Send request to databade and print response
      $.ajax(settings).done(function (response) {
        console.log(response);
        
        $("#contact-submit").prop( "disabled", false);
        
        //@TODO update frontend UI 
        $("#add-update-msg").show().fadeOut(3000);
  
        //update our table 
        getContacts();
      });
    });//end of click 
  
    //Function to retrieve all the information
    function getContacts(limit = 10, all = true) {
  
      //[STEP 7]: Create our AJAX settings
      let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://interactivedev-9d87.restdb.io/rest/contact",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": APIKEY,
          "cache-control": "no-cache"
        },
      }
  
      $.ajax(settings).done(function (response) {
        
        let content = "";
  
        for (var i = 0; i < response.length && i < limit; i++) {
  
          content = `${content}<tr id='${response[i]._id}'><td>${response[i].name}</td>
          <td>${response[i].email}</td>
          <td>${response[i].message}</td>
          <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-msg='${response[i].message}' data-name='${response[i].name}' data-email='${response[i].email}'>Update</a></td></tr>`;
  
        }
      });
  
  
    }
  
  
  })
  