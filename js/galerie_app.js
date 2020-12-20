$(document).ready(function(){

    var galerie = $('#galerie');
    galerie.masonry({
        isAnimated: true,
        columnWidth: 10,
        itemSelector: '.galerie_bloc:not(.hidden)',});

    $('#all').click( () => {
        $('.galerie_bloc').removeClass('hidden').fadeIn();
        galerie.masonry('layout');
    });

    $('#ab').click( () => {
        $('.galerie_bloc').removeClass('hidden').fadeIn();
        $('.ab').addClass('hidden').fadeOut();
        galerie.masonry('layout');
    });

    $('#cd').click( () => {
        $('.galerie_bloc').removeClass('hidden').fadeIn();
        $('.cd').addClass('hidden').fadeOut();
        galerie.masonry('layout');
    });

    galerie.find('.galerie_img').click(function(){
        element = this;
        com_slider_position = 0
        $('.galerie_bloc').not(element).parent().removeClass('big');
        $('.galerie_bloc').not(element).parent().children().removeClass('visible');
        $(element).parent().toggleClass('big');
        $(element).parent().children().toggleClass('visible');
        galerie.masonry('layout');
    })

    //caroussel affichage des commetaires

    //element suivant
    $('.next').click(function(){
        var coms = $(element).parent().find('.img_com')
        var curent = $('.active');
        var next = curent.next()
        console.log(coms.length);

        if(com_slider_position < (coms.length - 1)){
            curent.removeClass('active').css('z-index', -10);
            next.addClass('active').css('z-index', 10);
            next.length = 0;
            com_slider_position ++ ;
        };
    });

    //element précédent
    $('.previous').click(function(){
        var curent = $('.active');
        var prev = curent.prev();

        if(com_slider_position > 0){
            curent.removeClass('active').css('z-index', -10);
            prev.addClass('active').css('z-index', 10);
            com_slider_position -- ;
        };
    });





});
