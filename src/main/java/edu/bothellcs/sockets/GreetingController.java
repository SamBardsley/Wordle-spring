package edu.bothellcs.sockets;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class GreetingController {

  GuessingGame game = new GuessingGame();
  
  @MessageMapping("/hello")
  @SendTo("/topic/greetings")
  public Greeting greeting(HelloMessage message) throws Exception {
    Thread.sleep(1000); // simulated delay
    String out = game.guess(message.getName());
    System.out.println(out);
    return new Greeting(HtmlUtils.htmlEscape(out));
  }

}