package edu.bothellcs.sockets;

public class GuessingGame{
  String input;
  int answer = (int) Math.floor(Math.random() * 100);
  int count = 1;
  
  public GuessingGame(){
    
  }
  public String guess(String guess){
    System.out.println();
    System.out.println("Playing GuessingGame.java");
    System.out.println("NOTE: this is out of place, really it should be started from its own Controller...");
    System.out.println();
    try{
      int g = Integer.parseInt(guess); 
      if(g < answer) return guess + " was too low! Tries:" + (count++);
      if(g > answer) return guess + " was too High! Tries:" + (count++);
      return "YOU GOT IT! It was " + answer+ ". It took you " + (count++);
    }
    catch(Exception e){
      return "Hello, " + guess + "! Can you find the secret game!";
    }

  }
}