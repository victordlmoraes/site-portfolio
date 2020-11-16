$(function(){
    // Animação suave do scroll
    $('nav a').click(function(e){
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top,
            menuHeight = $('nav').innerHeight();

        $('html, body').animate({scrollTop: targetOffset - menuHeight}, 500);

        $('nav ul li').on('click', function(){
            $(this).addClass('menu-active');
            $(this).siblings().removeClass('menu-active');
        });
    });

    // Abertura e fechamento do menu mobile
    $('#nav-mobile i').click(function(){
        $('#nav-mobile ul').slideToggle();
    });
});