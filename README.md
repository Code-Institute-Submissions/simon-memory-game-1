Write a README.md file for your project that explains what the project does and the need that it fulfills.
It should also describe the functionality of the project, as well as the technologies used.
Detail how the project was deployed and tested and if some of the work was based on other code, 
explain what was kept and how it was changed to fit your need. 
A project submitted without a README.md file will FAIL.

Marcus Hornby Memory Game

This is my 2nd Milestone project while studying under the Code Institute.

The brief of the project was to create a responsive game based on the simon memory game.

The basic structure and style was completed using html5 and css3 and the functionality was created using Jquery functions and events.

I was unsure how to generate a random pattern and originally wrote code for each individual sequence which would always stay the same on each loading of the webpage.

I spoke with my Mentor and he offered me some advice and told me to do some research

to find the function that allowed me to generate things randomly '(Math.random() * num) + 1' or '[Math.floor(Math.random()*4)];'


I researched other peoples projects on github and on user forums and youtube videos how to create a random pattern which added a color:


function getColor(num) {
  /* Generate a random number between 1 and 4
  Green: 1   Red: 2   Blue: 3   Yellow: 4
  */
  return Math.floor(Math.random() * num) + 1;
}

and  then to input a sequence:

function getSequence(){
    let buttons = ["red","green","yellow","blue"];
    let retArr = [];
    while(retArr.length<20){
        let button = buttons[Math.floor(Math.random()*4)];
        retArr.push(button);
    }

    return retArr;
}

I also found out how to add sound effects to my game via the two github accounts above 
and used a free website to add their sounds to my : https://www.soundjay.com/

The testing was completed by adding incorrect code and running the app to see how it functioned
and then considering ways that the code may fail if different options were selected for running the function.

The way that I would improve this further is to implement a scoring system and a number of
attempts system which I would load and store users and their score using JSON
