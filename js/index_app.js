$(document).ready(function(){
    var scroll = 0    
    //sondage banière index.html

    $('#sondage_yes').click(function(){
        $('#home_header').css({'display' : 'none' });
        $('.banner_yes').css({'display' : 'block'});
        $('.banner_yes button').css({'display' : 'inline-block'});
    });

    $('#sondage_no').click(function(){
        $('#home_header').css({'display' : 'none'});
        $('.banner_no').css({'display' : 'block'});
        $('.banner_no button').css({'display' : 'inline-block'});
    });
     //sondage banière index.html end

    //carte index.html
    var mymap = L.map('mapid').setView([48.8566969, 2.3514616], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoid2FyZWQyMDAzIiwiYSI6ImNqeWQxNWFkdDBueWUzY3A4dTdlZTI3OG0ifQ.loi4SD_6Y0LrRSa04zryXg'
    }).addTo(mymap);

    var map_top = $('#mapid').offset().top
    console.log("fff" + map_top)
    $("#chauve").css("top", map_top),
    $(window).scroll( () => {
        scroll = $(window).scrollTop();
        console.log(scroll)
        if(scroll < 270){
            var top = map_top - scroll;
            $('#chauve').css("top", top)
        }   
    });
    scroll = $(window)

    //carte index.html end
   
});
