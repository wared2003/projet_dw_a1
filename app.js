$(document).ready(function(){

    $('#sondage_yes').click(function(){
        $('#home_banner').css({'display' : 'none' });
        $('.banner_yes').css({'display' : 'block'});
        $('.banner_yes button').css({'display' : 'inline-block'});
    });

    $('#sondage_no').click(function(){
        $('#home_banner').css({'display' : 'none'});
        $('.banner_no').css({'display' : 'block'});
        $('.banner_no button').css({'display' : 'inline-block'});
    });

});
