// Scroll to the bottom of the page.
window.scrollTo(0, document.body.scrollHeight);

// Apply parallax effect on the SVGs which has the '.layer' class (hill1, hill2, castle). Code is taken from https://www.youtube.com/watch?v=itg8hiG3jFU and modify for our needs.
$(window).scroll(function () {
    const height = $(document).height();
    const top = $(window).scrollTop() + $(window).height();

    var scrollTop = height - top;
    $('.layer').each(function () {
        // 'this' reffers to one '.layer' element
        var layer = $(this);
        var dataSpeed = layer.data('speed');
        // offsetY is the number of pixels by which the elemet should move
        var offsetY = -(scrollTop * dataSpeed);
        var translate = 'translate3d(0, ' + offsetY + 'px, 0)';
        layer.css('transform', translate);
    });
});

// I used Event Bubbling. See for more: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
document.addEventListener('click', function (event) {
    if (event.target.classList.contains('cloud')) {
        event.target.parentElement.style.display = "none";
        setTimeout(function () {
            event.target.parentElement.style.display = "block";
        }, 5000);
    }
}, false);

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('change-color-a')) {
        event.target.classList.toggle("bird-color-blue");
    }
}, false);

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('change-color-b')) {
        event.target.classList.toggle("bird-color-red");
    }
}, false);

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('change-color-c')) {
        event.target.classList.toggle("bird-color-yellow");
    }
}, false);
