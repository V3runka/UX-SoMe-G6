class App {
    // Defines the scrolling speed
    pixelsPerSecond = 400;

    // Initialize socket.io (https://socket.io/get-started/chat/)
    socket = io();

    constructor() {
        this.attachListeners();
    }

    /**
     * Scroll to floor
     *
     * @param {string} floorId - ID of the floor to scroll to (e.g. "floor-1")
     * @memberof App
     */
    scrollTo(floorId) {
        let distance = 0;

        if (floorId === "bottom") {
            distance = $(document).height() - $(window).height();
        }

        // Use TweenMax to animate window scroll
        TweenMax.to(window, 10, {
            ease: Power0.easeInOut, // Animation easing (https://greensock.com/docs/Easing see code below the chart)
            scrollTo: distance
        });
    }

    /**
     * Add UI event listeners
     */
    attachListeners() {
        const button = document.getElementById('button');

        // Handle controll click (on the /index page)
        document.addEventListener(
            'click',
            event => {
                // Check if the clicked element has a ".control" class
                if (event.target.classList.contains('control')) {
                    // Get floor id from data attribute
                    const floorId = event.target.dataset.floorId;

                    this.scrollTo(floorId);
                }
            },
            false
        );

        // Websockets event handler, this runs when you click the control on the /remote-control page
        this.socket.on('scrollToFloor', floorId => {
            console.log(
                `Received event from remote control, scrolling to floor: ${floorId}`
            );
            this.scrollTo(floorId);
        });
    }
}

// Instantiate the App class, runs code in constructor()
const app = new App();
