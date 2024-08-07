//Press a button to choose your path
//See the README file for more information

/* VARIABLES */
let enterButton;
let a1Button;
let a2Button;
let b1Button;
let b2Button;
let screen = 0;

/* SETUP RUNS ONCE. */
function setup() {
  createCanvas(600, 400);
  textAlign(CENTER);
  textSize(20);
  noStroke();

  // Set up the home screen
  background("pink");
  textFont();
  text("The Enchanted Forest",
    width / 2,
    height / 2 - 150,),
  textSize(17);
  text(
    "You are Alaric, a young adventurer living in the quiet \nvillage of Eldoria. One day, you find an ancient map that \nleads to the heart of the Enchanted Forest, rumored to \nhold great treasures and untold dangers. Armed with your \ncourage and a sense of curiosity, you decide to embark \non this journey.",
    width / 2,
    height / 2 - 100
  );

  // Create buttons for all screens
  enterButton = new Sprite(width / 2, height / 2 + 100);
  a1Button = new Sprite(-200, -200);
  a2Button = new Sprite(-50, -50);
  b1Button = new Sprite(-100, -100);
  b2Button = new Sprite(-150, -150);
}

/* DRAW LOOP REPEATS */
function draw() {
  // Display enter button
  enterButton.w = 100;
  enterButton.h = 50;
  enterButton.collider = "k";
  enterButton.color = "plum";
  textSize(20);
  enterButton.text = "Enter";


  // Check enter button
  if(enterButton.mouse.presses()){
    print("Pressed");
    showScreen1();
    screen = 1;
  }

  if(screen == 1){
    if(a1Button.mouse.presses()){
      print("Display screen 2");
      showScreen2();
      screen = 2;
    }
    else if(a2Button.mouse.presses()){
      print("Display screen 5");
      showScreen5();
      screen = 5;
    }
  }
  else if(screen == 2){
    if(b1Button.mouse.presses()){
      showScreen3();
      screen = 3;
    }
    else if(b2Button.mouse.presses()){
      showScreen4();
      screen = 4;
    }
  }

}

/* FUNCTIONS TO DISPLAY SCREENS */

function showScreen1(){
  background("paleturquoise");
  textSize(18);
  text("You stand at the edge of the Enchanted Forest, \nthe map clutched in your hand. The trees tower above you, \ntheir leaves whispering secrets in the wind. You take a \ndeep breath and step into the forest, ready for whatever lies ahead.", width/2, height/2-100);
  enterButton.pos = {x: -100, y: -100};

  // Add A1 button
  a1Button.pos = {x: width/2 - 150, y: height/2 + 100};
  a1Button.w = 200;
  a1Button.h = 50;
  a1Button.collider = "k";
  a1Button.color = "plum";
  a1Button.text = "Follow the Map";

  // Add A2 button
  a2Button.pos = {x: width/2 + 150, y: height/2 + 100};
  a2Button.w = 200;
  a2Button.h = 50;
  a2Button.collider = "k";
  a2Button.color = "plum";
  textSize(20);
  a2Button.text = "Forge Your Own Path";
}

function showScreen2(){
  background("palegreen");
   text(
     "You decide to follow the map precisely. After \nhours of walking, you reach a clearing with an ancient \nstone altar. There, you see a glowing artifact.",
     width / 2,
     height / 2 - 100
   );

   // Move extra buttons off screen
   a1Button.pos = { x: -200, y: -200 };
   a2Button.pos = { x: -50, y: -50 };

   // Add b1 Button
   b1Button.pos = { x: width / 2 - 150, y: height / 2 + 100 };
   b1Button.w = 150;
   b1Button.h = 70;
   b1Button.collider = "k";
   b1Button.color = "plum";
   b1Button.text = "Pick up the \nartifact";

   // Add b2 Button
   b2Button.pos = { x: width / 2 + 150, y: height / 2 + 100 };
   b2Button.w = 150;
   b2Button.h = 70;
   b2Button.collider = "k";
   b2Button.color = "plum";
   b2Button.text = "Leave the artifact \nand set up camp";
}
function showScreen3(){
  background("lavender");
  text(
     "You pick up the artifact and follow the path it \nreveals. You arrive at a magnificent castle and \nspend the rest of your days learning its \nsecrets, becoming a legendary sorcerer. \n\nTHE END!",
     width / 2,
     height / 2 - 100
   );
   b1Button.pos = { x: -100, y: -100 };
   b2Button.pos = { x: -150, y: -150 };
}

function showScreen4(){
  background("plum");
  text(
     "You leave the artifact and set up camp. You \nhave a peaceful night under the stars, but your \nadventure ends here, as you never uncover \nthe forest's secrets. \n\nTHE END!",
     width / 2,
     height / 2 - 100
   );
   b1Button.pos = { x: -100, y: -100 };
   b2Button.pos = { x: -150, y: -150 };
}

function showScreen5(){
  background("lightgreen");
  text(
     "You forge your own path through the \nforest, but without a clear direction, you \nbecome hopelessly lost. Days turn into weeks, \nand you are never seen again. \n\nTHE END!",
     width / 2,
     height / 2 - 100
   );
  a1Button.pos = { x: -200, y: -200 };
  a2Button.pos = { x: -50, y: -50 };
}
