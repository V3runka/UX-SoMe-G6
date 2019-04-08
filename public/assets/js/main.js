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

document.addEventListener('click', function (event) {
    // I used Event Bubbling. See for more: https://gomakethings.com/attaching-multiple-elements-to-a-single-event-listener-in-vanilla-js/
    if (event.target.classList.contains('cloud')) {
        event.target.parentElement.style.display = "none";
        setTimeout(function () {
            event.target.parentElement.style.display = "block";
        }, 5000);
    }

    if (event.target.classList.contains('change-color-a')) {
        event.target.classList.toggle("bird-color-blue");
    }

    if (event.target.classList.contains('change-color-b')) {
        event.target.classList.toggle("bird-color-red");
    }

    if (event.target.classList.contains('change-color-c')) {
        event.target.classList.toggle("bird-color-yellow");
    }
}, false);


// Script for Dragon and Lift animation

// Animation layers
// Layer 1: Frame
const frame = {
    container: document.getElementById('dragon-frame'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'assets/data/dragon-animation/frame.json'
};

// Layer 2: Wheel
const wheel = {
    container: document.getElementById('dragon-wheel'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data/dragon-animation/wheel.json'
};


// Layer 3: Tail
const tail = {
    container: document.getElementById('dragon-tail'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data/dragon-animation/tail.json'
};

// Layer 4: Wing
const wing = {
    container: document.getElementById('dragon-wing'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data/dragon-animation/wing.json'
};

// Layer 5: Body, left arm and leg
const body = {
    container: document.getElementById('dragon-body'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data/dragon-animation/body.json'
};


// Layer 6: Right leg
const leg = {
    container: document.getElementById('dragon-leg'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data/dragon-animation/leg.json'
};

// Layer 7: Right arm
const arm = {
    container: document.getElementById('dragon-arm'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data/dragon-animation/arm.json'
};

// Layer 8: Head, facial expressions and fire
const head = {
    container: document.getElementById('dragon-head'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'assets/data/dragon-animation/face.json'
};

lottie.loadAnimation(frame);
lottie.loadAnimation(wheel);
lottie.loadAnimation(tail);
lottie.loadAnimation(wing);
lottie.loadAnimation(body);
lottie.loadAnimation(leg);
lottie.loadAnimation(arm);
lottie.loadAnimation(head);

// Plays animations
lottie.play();
