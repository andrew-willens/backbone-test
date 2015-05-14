$(document).ready(function(){
    app.start();           
    
    // save form content to server
    // $("#save-btn").on("click", function() {      
    //     $("#1stdibs-form").submit(function(e) {
    //         e.preventDefault();

    //         $.post(
    //             "/save", 
    //             $("#1stdibs-form").serialize()
    //         )
    //         .success(function(response, status, xhr) {
    //              alert("Success: Item information updated.");
    //              var formatted = {
    //                 "httpCode" : xhr.status,
    //                 "message"  : xhr.statusText,
    //                 "response" : response
    //              };
    //              console.log(formatted);
    //         })
    //         .fail(function(response) {
    //              alert("Error: please open your browser console.");
    //              console.log(JSON.parse(response));
    //         });
    //     });
    
    //     $("#1stdibs-form").submit();
    // });

});