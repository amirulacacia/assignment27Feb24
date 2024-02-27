package com.javaclass.feb24.websocket.websocketapi.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

import com.javaclass.feb24.websocket.websocketapi.handlers.MyHandler;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Configuration
@EnableWebSocket
public class WebSocketConfig implements WebSocketConfigurer{
    @Override
	public void registerWebSocketHandlers(final WebSocketHandlerRegistry registry) {
		registry.addHandler(myHandler(), "/hello")
        .withSockJS();
	}

    @Bean
    public WebSocketHandler myHandler() {
        log.info("Create MyHandler");
        return new MyHandler();
    }
}
