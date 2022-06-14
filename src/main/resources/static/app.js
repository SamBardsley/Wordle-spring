const btn         = document.getElementById('toggle_btn');

btn.addEventListener('click', function handleClick() {
  if (document.body.className == "dark") {
    document.body.className = "light";
    btn.querySelector('ion-icon').setAttribute('name', 'moon-outline');
  } else {
    document.body.className = "dark";
    btn.querySelector('ion-icon').setAttribute('name', 'sunny-outline');
  }
});

function jump001(field, autoMove) {
  if(field.value.length >= field.maxLength) {
    console.log(this);
    field.nextElementSibling.focus();
    //document.getElementById("").focus();
  }
}

// rest of code
var myInputs = document.querySelectorAll(".grid");
var wordleWord = "smart";
var myGuess = "";
var letterCount = 0;

console.log(myInputs);

for (var i=0; i<myInputs.length; i++) {
  myInputs[i].addEventListener("change", checkLetter);
}

function checkLetter(e) {
  letterCount++;
  if(letterCount == 5) console.log();
  else console.log();

  // check to see if all input boxes in row have a letter value
  // we will need to get each input box in the row
  // loop over, see if they are all filled, get word

  // splitting up the guess into individual letters, answer too
  // each guess letter against each answer letter 
  // will be two for loops
}


var stompClient = null;

function setConnected(connected) {
    $("#connect").prop("disabled", connected);
    $("#disconnect").prop("disabled", !connected);
    if (connected) {
        $("#conversation").show();
    }
    else {
        $("#conversation").hide();
    }
    $("#greetings").html("");
}

function connect() {
    var socket = new SockJS('/gs-guide-websocket');
    stompClient = Stomp.over(socket);
    stompClient.connect({}, function (frame) {
      
        setConnected(true);
        console.log('Connected: ' + frame);
        stompClient.subscribe('/topic/greetings', function (greeting) {
          console.log("?????????"); 
          console.log(greeting); showGreeting(JSON.parse(greeting.body).content);
        });
      
    });
}

function disconnect() {
    if (stompClient !== null) {
        stompClient.disconnect();
    }
    setConnected(false);
    console.log("Disconnected");
}

function sendName() {
  
    stompClient.send("/app/hello", {}, JSON.stringify(
      
      {
        'name': $("#name").val()
      }
      
    ));


}

function showGreeting(message) {
    $("#greetings").append("<tr><td>" + message + "</td></tr>");
}

$(function () {


  
    $("form").on('submit', function (e) {
        e.preventDefault();
    });
    $( "#connect" ).click(function() { connect(); });
    $( "#disconnect" ).click(function() { disconnect(); });
    $( "#send" ).click(function() { sendName(); });
});
