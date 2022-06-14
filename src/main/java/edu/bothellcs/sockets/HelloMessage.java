package edu.bothellcs.sockets;

public class HelloMessage {

  private String name;

  public HelloMessage() {
    System.out.println("");
    System.out.println("constructing HELLOMessage");
    System.out.println("");
  }

  public HelloMessage(String name) {
    this.name = name;
    
    System.out.println("constructing HELLOMessage with name");
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }
}