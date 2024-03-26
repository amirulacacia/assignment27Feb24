
var ws, ws2;

function setConnected(connected) {
    document.getElementById('connect').disabled = connected;
    document.getElementById('disconnect').disabled = !connected;
    document.getElementById('send').disabled = !connected;
}

// When connect button click
function connect() {
    var username = document.getElementById("username").value;
    var host = document.location.host;
    ws = new WebSocket("ws://" + host + "/chat/" + username); // connecting to WebSocket

    ws.onopen = function () {   // Will be triggered when the websocket connection is open. Basically ws.onopen works like handler.
        setConnected(true);
        log.innerHTML += "You are online" + "\n";
        log2.innerHTML += username + " is online" + "\n";
        autoScroll();
    };
    ws.onmessage = function (event) {   // Will be triggered when there is message event
        console.log(event);
        var message = event.data;
        log.innerHTML += message + "\n";
        log2.innerHTML += message + "\n";
        autoScroll();
    }
    ws.onclose = function () { // Will be triggered when the websocket connection is closed.
        setConnected(false);
        log.innerHTML += "You are offline" + "\n";
        log2.innerHTML += username + " is offline" + "\n";
        autoScroll();
    };
}

function disconnect() {
    if (ws != null) {
        ws.close();
        ws = null;
    }
    setConnected(false);
}

function send() {
    if (ws != null) {
        var content = document.getElementById("msg").value;
        ws.send(content);
    } else {
        alert('WebSocket connection not established, please connect.');
    }
}

function setConnected2(connected) {
    document.getElementById('connect2').disabled = connected;
    document.getElementById('disconnect2').disabled = !connected;
    document.getElementById('send2').disabled = !connected;
}

function connect2() {
    var username = document.getElementById("username2").value;
    var host = document.location.host;
    ws2 = new WebSocket("ws://" + host + "/chat/" + username);

    ws2.onopen = function () {
        setConnected2(true);
        log2.innerHTML += "You are online" + "\n";
        log.innerHTML += username + " is online" + "\n";
        autoScroll();
    };
    ws2.onmessage = function (event) {
        console.log(event);
        var message = event.data;
        log.innerHTML += message + "\n";
        log2.innerHTML += message + "\n";
        autoScroll();
    }
    ws2.onclose = function () {
        setConnected2(false);
        log2.innerHTML += "You are offline" + "\n";
        log.innerHTML += username + " is offline" + "\n";
        autoScroll();
    };
}

function disconnect2() {
    if (ws2 != null) {
        ws2.close();
        ws2 = null;
    }
    setConnected2(false);
}

function send2() {
    if (ws2 != null) {
        var content = document.getElementById("msg2").value;
        ws2.send(content);
    } else {
        alert('WebSocket connection not established, please connect.');
    }
}

// Get the textarea element
var textarea = document.getElementById('log');
var textarea2 = document.getElementById('log2');

// Function to auto-scroll the textarea
function autoScroll() {
  // Set the scrollTop property to the maximum height to auto-scroll
  textarea.scrollTop = textarea.scrollHeight;
  textarea2.scrollTop = textarea2.scrollHeight;
}

