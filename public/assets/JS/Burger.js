$(window).scroll(function () {
    
        if ($(this).scrollTop() > 80) {
            $('.Fixed-burger').css('top', '10px');
            $('.Fixed-burger-li').css('height', '0px');
            setTimeout(function() {
                $('.Fixed-burger').css('position', 'fixed');
            }, 395);
        } else {
            $('.Fixed-burger').css('top', '80px');
            $('.Fixed-burger-li').css('height', '80px');
            setTimeout(function() {
                $('.Fixed-burger').css('position', 'absolute');
            }, 395);
        }
});
