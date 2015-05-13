$(document).ready(function(){
    new app.Views.App();
    
    $("#save-btn").on("click", function() {      
        $("#1stdibs-form").submit(function(e) {
            e.preventDefault();

            $.post(
                "/save", 
                $("#1stdibs-form").serialize()
            )
            .success(function(response, status, xhr) {
                 alert("Success: Item information updated.");
                 console.log( response, status, xhr.getResponseHeader('Link') );
            })
            .fail(function(response) {
                 alert("Error: please open your browser console.");
                 console.log(JSON.parse(response));
            });
        });
    
        $("#1stdibs-form").submit();
    });

})