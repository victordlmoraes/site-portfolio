$(function(){
    var links = $('nav ul li a');
    var navHeight = $('nav').height()
    $(window).scroll(function(){
        var topScroll = $(window).scrollTop();
        links.each(function(){
            var href = $(this).attr('href');
            var el = $(href);
            var posSection = el.offset().top;
            var hSection = el.height();

            if((posSection - navHeight) <= topScroll && (posSection + hSection) > topScroll){
                links.removeClass('menu-active');
                $(this).addClass('menu-active');
            }else{
                $(this).removeClass('menu-active');
            }
        })
    })
});