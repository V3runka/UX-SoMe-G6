// Scroll to the bottom of the page.
window.scrollTo(0, document.body.scrollHeight);

// Apply parallax effect on the SVGs which has the '.layer' class (hill1, hill2, castle). Code is taken from https://www.youtube.com/watch?v=itg8hiG3jFU
$(window).scroll(function () {
    const height = $(document).height();
    const top = $(window).scrollTop() + $(window).height();

    var scrollTop = height - top;
    $('.layer').each(function () {
        var layer = $(this);
        var dataSpeed = layer.data('speed');
        var offsetY = -(scrollTop * dataSpeed);
        var translate = 'translate3d(0, ' + offsetY + 'px, 0)';
        layer.css('transform', translate);
    });
});
