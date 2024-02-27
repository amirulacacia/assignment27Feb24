
var ws;

function connect(){
    var username = document.getElementById("username").value;
    var host = document.location.host;
    console.log("username","ws://" + host + "/chat/" + username)
    ws = new WebSocket("ws://localhost:8080/websocket-server/chat");
    
    ws.onmessage = function(event){
        console.log(event);
        var message = JSON.parse(event.data);
        log.innerHTML += message.from + " : " + message.content + "\n";
    }
}

function send() {
    var content = document.getElementById("msg").value;
    var json = JSON.stringify({
        "content":content
    });

    ws.send(json);
}

