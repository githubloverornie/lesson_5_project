$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).next('.about-text').slideToggle(300);
})

$('.about_icons > div').on('click', function(){
    $(this).children('.about_icon-djq').toggleClass('about_rotate_icons');
    $(this).parent('.about_icons').toggleClass('change_colors');
    $(this).next('.about_text-djq').slideToggle(300);
})