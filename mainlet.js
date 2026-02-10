$(document).ready(function () {
    // When the page loads, we hide the curtains
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {
        // Fading animation of the envelope elements
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // Hide items within .valentines-day
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Make the card visible with a wavy animation
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1; // We calculate the scale based on the sine function
                    $(this).css('transform', 'scale(' + scale + ')');
                }
            }); // Ripple animation
        });
    });
});