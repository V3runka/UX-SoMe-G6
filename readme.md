# Elevator & remote control demo

## Installation

1. Install node https://nodejs.org/en/ (check if you already have node by running `node -v` in the command line)
2. Use cmd to navigate to the project directory (e.g "cd projects/UX-SoMe-G6")
3. Run `npm install` to install dependencies (packages such as the express server https://expressjs.com/ and socket.io)
4. Run `node server.js` to start the express server
5. Open `localhost:3000` in your browser
6. Open `localhost:3000/remote-control` in another tab (or device, in this case use your ip address, e.g. `192.168.10.105:3000/remote-control`)

## About

This demo uses GSAP to animate scrolling and websockets to control scrolling from another device. If you'd like to share the project with someone, delete the `node_modules` directory first (it is generated automatically when you run `npm install`)
