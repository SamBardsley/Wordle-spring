package edu.bothellcs.sockets;

public class Greeting {

  private String content;
  private String other;

  public Greeting() {
  }

  public Greeting(String content) {
    System.out.println("");
    System.out.println("constructing GREETING");
    System.out.println("");
    System.out.println("This object is what is returned to the client by the GreetingController.");
    System.out.println("The HTML/JS client recieves a JSON version of this object with the properties {content:STRING, other:STRING");
    System.out.println("The recieving JS CallBack function can use both properties");
    System.out.println("");
    
    this.content = content;
    this.other  = "I am also scretely in the GREETING!";
  }

  public String getContent() {
    return content;
  }
  public String getOther(){
    return other;
  }

}