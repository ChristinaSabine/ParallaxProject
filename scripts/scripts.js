$(document).ready(function() {
    
    $("#theImage").hide();

    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition);
        
        if(scrollPosition > 250) {
        $("#theImage").fadeIn();
            
        if(scrollPosition < 250) {
        $("#theImage").fadeIn();
    });
    
    
});
