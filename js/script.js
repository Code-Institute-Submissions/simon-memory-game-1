// Game Vars
var game = {
  count: 0,
  colors: ["#green", "#red", "#yellow", "#blue"],
  completePattern: [],
  randomisePattern: [],
  sound: {
    green: new Audio('https://www.soundjay.com/button/sounds/beep-07.mp3'),
    red: new Audio('https://www.soundjay.com/button/sounds/beep-08b.mp3'),
    blue: new Audio('https://www.soundjay.com/button/sounds/beep-10.mp3'),
    yellow: new Audio('https://www.soundjay.com/button/sounds/beep-03.mp3')
  },
  difficult: false,

}


// Color and Sound Functions
  function sound(color) {
    switch (color) {
      case "#green":
        game.sound.green.play();
        break;
      case "#red":
        game.sound.red.play();
        break;
      case "#yellow":
        game.sound.yellow.play();
        break;
      case "#blue":
        game.sound.blue.play();
        break;
    }
  }
  
  
    // Start the game button function
  $("#start").on("click",function() {
    difficultySelect();
    resetGame();
    $("#count-num").html("--");
    generateNext();
  });

  // Reset the game function
  function resetGame() {
    game.completePattern = [];
    game.randomisePattern = [];
    game.count = 0;
  }
  
    // difficulty selector
  function difficultySelect() {
    if ($("#difficult").is(":checked")){
      game.difficult = true;
    } else {
      game.difficult = false;
    }
  }

  function animation(color) {
    $(color).addClass("animate");
    sound(color);
    setTimeout(function() {
      $(color).removeClass("animate");
    }, 250)
  }


  // add next random color
  function generateNext() {
    game.count++;
    if (game.count < 10) {
      $("#count-num").html("0" + game.count);
    } else {
      $("#count-num").html(game.count);
    }
    game.completePattern.push(game.colors[(Math.floor(Math.random() * 4))]);
    randomisePattern();
  }

  // Play the entire sequence of colors
  function randomisePattern() {
    var i = 0;
    var seq = setInterval(function() {
      animation(game.completePattern[i]);
      i++;
      if (i >= game.completePattern.length) {
        clearInterval(seq);
      }
    }, 700)
    game.randomisePattern = [];
  }

  // Add whichever color the player clicked on onto the player's sequence
  function rememberAndAddToSequence(id) {
    var color = "#" + id;
    console.log(color);
    game.randomisePattern.push(color);
    wasTheMoveCorrect(color);
  }

  // Check if the player move matched the last color
  // If no, either re-play the sequence (normal mode) or end the game (strict mode)
  // If yes, move on
  // When count equals 20, the player wins!
  function wasTheMoveCorrect(color) {
    if (game.randomisePattern[game.randomisePattern.length - 1] !== game.completePattern[game.randomisePattern.length - 1]) {
      sound(color);
      if (game.difficult === true) {
        $("#msg").text("You lost!");
        $("#board").fadeOut("slow");
        $("#final-screen").fadeTo("slow",1);
      } else {
        //warning message -------------------!!!!!!!!!!!!!!!
        setTimeout(function() {
            alert("Wrong move! Try again.");
          }, 500);
        setTimeout(function() {
            randomisePattern();
          }, 250);
      }
    } else {
      sound(color);
      var checkCorrect = game.randomisePattern.length === game.completePattern.length;
      if (checkCorrect) {
        if (game.count === 20) {
          $("#msg").text("You won!");
          $("#board").fadeOut("slow");
          $("#completeGame").fadeTo("slow",1);
        } else {
          setTimeout(function() {
            generateNext();
          }, 850)
        }
      }
    }
  }

 