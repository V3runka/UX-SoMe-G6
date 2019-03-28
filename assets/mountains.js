// https://www.youtube.com/watch?v=itg8hiG3jFU
window.scrollTo(0, document.body.scrollHeight);

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

//  http://scrollmagic.io/examples/advanced/parallax_sections.html

/*
var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: "onEnter",
        duration: "500%"
    }
});

new ScrollMagic.Scene({
    triggerElement: "#parallax1"
}).setTween("#parallax1 > .layer", {
    y: "200%",
    ease: Linear.easeNone
}).addIndicators().addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#parallax2"
}).setTween("#parallax2 > .layer", {
    y: "10%",
    ease: Linear.easeNone
}).addIndicators().addTo(controller);

new ScrollMagic.Scene({
    triggerElement: "#parallax3"
}).setTween("#parallax3 > .layer", {
    y: "120%",
    ease: Linear.easeNone
}).addIndicators().addTo(controller);
*/
