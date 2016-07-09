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
     // Event listner with inline anonymous event handler function
        contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        formInputOnConsole();
        contactForm.reset();
        })
         // formInputOnConsole function 
    function formInputOnConsole() {

        function User(UserName, password)
        {
            this.userName = UserName;
            this.Password = password;
        }

        var user = new User(UserName.value, password.value)
        console.log(user);
 
    }
})();

    