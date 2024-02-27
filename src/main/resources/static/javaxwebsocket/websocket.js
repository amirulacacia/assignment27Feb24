
var ws, ws2;

function connect() {
    var username = document.getElementById("username").value;
    var host = document.location.host;
    ws = new WebSocket("ws://" + host + "/chat/" + username);

    // ws.onmessage = function(event){
    //     console.log(event);
    //     var message = JSON.parse(event.data);
    //     log.innerHTML += message.from + " : " + message.content + "\n";
    // }

    ws.onmessage = function (event) {
        console.log(event);
        var message = event.data;
        log.innerHTML += message + "\n";
        log2.innerHTML += message + "\n";
    }
}

function send() {
    var content = document.getElementById("msg").value;
    // var json = JSON.stringify({
    //     "content":content
    // });
    ws.send(content);
}

function connect2() {
    var username = document.getElementById("username2").value;
    var host = document.location.host;
    ws2 = new WebSocket("ws://" + host + "/chat/" + username);

    // ws.onmessage = function(event){
    //     console.log(event);
    //     var message = JSON.parse(event.data);
    //     log.innerHTML += message.from + " : " + message.content + "\n";
    // }

    ws2.onmessage = function (event) {
        console.log(event);
        var message = event.data;
        log.innerHTML += message + "\n";
        log2.innerHTML += message + "\n";
    }
}

function send2() {
    var content = document.getElementById("msg2").value;
    // var json = JSON.stringify({
    //     "content":content
    // });
    ws2.send(content);
}

