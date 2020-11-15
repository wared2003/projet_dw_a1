$(document).ready(function(){

    //responsive navbar
    $("#responsive_nav_button").click(() => {
        $("#responsive_nav ul").fadeToggle();
        $("#responsive_nav ul").css("display" , "block");

    });
    //responsive navbar end

    //connect form open
    $("#connect_button").click(() => {
        $("#connect_popup").fadeIn(400);
        $("#connect_popup").css('display', 'block !important');
    });
    
    $("#connect_button_responsive").click(() => {
        $("#responsive_nav ul").fadeOut(400);
        $("#responsive_nav ul").css("display" , "none");
        $("#connect_popup").fadeIn(400);
        $("#connect_popup").css('display', 'block !important');
    });
    //connect form close
    $("#connect_popup_close").click(() => {
        $("#connect_popup").css('display', 'none')
    });

});
