
package com.javaclass.feb24.websocket.javaxwebsocket.endpoints;

import java.io.IOException;

import org.springframework.stereotype.Component;

import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;
import jakarta.websocket.Session;
import jakarta.websocket.server.PathParam;
import jakarta.websocket.server.ServerEndpoint;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.experimental.FieldDefaults;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@FieldDefaults(level = AccessLevel.PRIVATE)
@Getter(AccessLevel.PROTECTED)
@Component
@ServerEndpoint(value = "/chat/{username}")
public class WebSocketServerEndpoint {
    @OnOpen
    public void onOpen(Session session, @PathParam("username") String username){
        log.info("Client connected: " + username);
    }

    @OnMessage
    public void onMessage(String message, Session session, @PathParam("username") String username){
        log.info("Message from " + username + ": " + message);

        try {
            session.getBasicRemote().sendText(username + ": " + message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @OnClose
    public void onClose(Session session, @PathParam("username") String username){
        log.info("Connection closed: " + username);
    }

    @OnError
    public void onError(Throwable throwable){
        throwable.printStackTrace();
    }

}
