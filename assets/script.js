/*
document.addEventListener('click', event => {
        if (event.target.classList.contains('bird-wrapper')) {
            event.target.classList.add('super-fast');
        }
    },
    false
);
*/
var birdSpeed = document.getElementById("birdOne");

TweenMax.to(birdSpeed, 3, {
    x: 500
})

$(funvtion) {
    $(document).on("click", "#birdOne", function () {
        TweenMax.to(birdSpeed, 1, {
            ease: Back.easeOut,
            delay: 3
        });
    });
}
/*document.getElementById("birdOne").addEventListener("click", function () {
    console.log("Hello");
    TweenMax.to(birdSpeed, 2, {
        left: 500,

    });

    TweenMax.to(birdSpeed, 1, {
        ease: Back.easeOut,
        delay: 3
    });

});*/

/*
var birdOne = document.getElementById("birdOne")
TweenMax.to(birdOne, 2, {
    left: 200
})
TweenMax.to(birdOne, 2, {
    opacity: 0,
    delay: 1
});

TweenMax.to($("h2.feature"), 2, {
    left: 200
});
TweenMax([birdOne, thumb], 2, {
    opacity: 0
});
*/
