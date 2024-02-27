
package com.javaclass.feb24.websocket;

import java.io.IOException;
import javax.websocket.Session;
import jakarta.websocket.OnClose;
import jakarta.websocket.OnError;
import jakarta.websocket.OnMessage;
import jakarta.websocket.OnOpen;

public class WebSocketServer {
    @OnOpen
    public void onOpen(Session session) {
        System.out.println("Client connected: " + session.getId());
    }


    @OnMessage
    public void onMessage(String message, Session session) {
        System.out.println("Message from " + session.getId() + ": " + message);
        try {
            session.getBasicRemote().sendText("Echo: " + message);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    @OnClose
    public void onClose(Session session) {
        System.out.println("Connection closed: " + session.getId());
    }


    @OnError
    public void onError(Throwable throwable) {
        throwable.printStackTrace();
    }

}
