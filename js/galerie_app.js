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
});
