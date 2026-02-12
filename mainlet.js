$(document).ready(function () {
    $('.valentines-day').click(function () {
        // 1. Fade out the envelope
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            
            // 2. Hide envelope details
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // 3. Reveal the Card
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'translate(-50%, -50%) scale(0.1)' });
            
            // 4. Simple Grow Animation (Clean for mobile)
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000,
                step: function (now, fx) {
                    // Smooth growing effect
                    var scale = 0.1 + (now * 0.9);
                    $(this).css('transform', 'translate(-50%, -50%) scale(' + scale + ')');
                },
                complete: function() {
                    // Final state ensures it stays centered and correct size
                    $(this).css('transform', 'translate(-50%, -50%) scale(1)');
                    
                    // Enable scrolling on body if needed for very small screens
                    $('body').css('overflow-y', 'auto');
                }
            });
        });
    });
});
