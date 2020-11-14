$(document).ready(function(){

    //scrollSpy histoire.html
    var sections = []
    var id = false;
    var old_id = false;
    var $section_navbar = $('#nav_histoire');

    $('a', $section_navbar).each(function(){
        sections.push($($(this).attr('href')));
    });

    $(window).scroll(function(){
        var scrollTop = $(this).scrollTop() + ($(window).height()) / 2;
        for(var i in sections){
            var section = sections[i];
            if (scrollTop > section.offset().top){
                old_id = section.attr('id');
            }
        }
        if (old_id !== id){
            id = old_id;
            $('a', $section_navbar).removeClass('grey');
            $('a[href="#' + id + '"]', $section_navbar).addClass('grey');
            $('.'+'span_' + id + '').addClass('bcg_grey_2');
        };
    });



    //scrolSpy hitoire.html end

});
