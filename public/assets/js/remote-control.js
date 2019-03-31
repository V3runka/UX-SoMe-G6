// Initialize socket.io
const socket = io();

// Handle button click
document.addEventListener(
    'click',
    event => {
        if (event.target.classList.contains('control')) {
            // Send message to the server to start scrolling
            socket.emit('buttonPress', event.target.dataset.floorId);
        }
    },
    false
);
