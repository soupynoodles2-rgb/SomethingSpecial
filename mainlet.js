$(document).ready(function () {
    $('.valentines-day').click(function () {
        // 1. Fade out the envelope
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            
            // 2. Hide envelope details
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // 3. Prepare the card state
            // We use transform: translate(-50%, -50%) to keep it centered
            $('#card').css({ 
                'visibility': 'visible', 
                'opacity': 0, 
                'transform': 'translate(-50%, -50%) scale(0.1)' 
            });
            
            // 4. Smooth Open Animation
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000,
                step: function (now, fx) {
                    if (fx.prop === "opacity") {
                        // Grow scale from 0.1 to 1 based on opacity progress
                        var scale = 0.1 + (now * 0.9); 
                        $(this).css('transform', 'translate(-50%, -50%) scale(' + scale + ')');
                    }
                },
                complete: function() {
                    // Lock the final scale to 1
                    $(this).css('transform', 'translate(-50%, -50%) scale(1)');
                }
            });
        });
    });
});
