/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
/**
*filename: app.js
*
@author Nidhi Thakkar
@date 10/06/2016
*
*student id:300872151
*website  :http://assignment2comp125.azurewebsites.net/
@description This is the main java script file for the website.
*/
(function(){
    "use strict";
    
   

    
    
    var User={
      UserName=document.getElementById("UserName");
      Password  
    }

    if (contactForm){
    //event listener with inline anonymous event handler function
    contactForm.addEventListener("submit",function(event){
        event.preventDefault();
        showFormInput();
        contactForm.reset();
    });
    }

    function showFormInput() {
        console.log("------------------------------");
        console.log("User Name: "+UserName.value);
        console.log("------------------------------");
        console.log("Password: "+Password.value);
    }
    
    
    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if(paragraphElements[index]) {
         paragraphElements[index].textContent = paragraphs[index];
        }
    }
    
    
})();