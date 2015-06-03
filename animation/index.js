$(function() {
    function adjustWindow() {
        var s = skrollr.init({forceHeight: false});
        winH = $window.height();
        if(winH <= 550) {
            winH = 550;
        }
        $slide.height(winH*0.3);
        $slideTall.height(winH*2);
        $slideTall2.height(winH*3);
        s.refresh($('.homeSlide'));
    }

    $window = $(window);
    $slide = $('.homeSlide');
    $slideTall = $('.homeSlideTall');
    $slideTall2 = $('.homeSlideTall2');
    $body = $('body');
    adjustWindow();
});
