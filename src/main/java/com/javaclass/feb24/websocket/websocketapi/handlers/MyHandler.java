package com.javaclass.feb24.websocket.websocketapi.handlers;

import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class MyHandler extends TextWebSocketHandler{
    @Override
	public void afterConnectionEstablished(WebSocketSession session) {
		log.info("Opened new session in instance " + this);
	}

	@Override
	public void handleTextMessage(WebSocketSession session, TextMessage message) throws Exception {

		String echoMessage = message.getPayload();
		log.info("Processing message...");
		Thread.sleep(1000);
		log.info("Echo message: {}", echoMessage);
		session.sendMessage(new TextMessage(echoMessage));
	}

	@Override
	public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {

		log.error("WebSocket transport error: {}", exception.getMessage());
		session.close(CloseStatus.SERVER_ERROR);
	}
}
