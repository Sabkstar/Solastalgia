//Art 175 Final website -Solatagia
//sample code of modified from Polar Coordinate Spiral by natureofcode for mint mind spiral
var angle = 0;
var r = 5;
var spin = 0.09;
var grow = spin * 0.5;
//loads sound file of What is Covid
let mySound;


function preload(){
    img = loadImage('assets/brainy.png');
    soundFormats('mp3', 'ogg');
    mySound = loadSound('assets/covid_mix_down.mp3');
    myFont= loadFont('assets/SourceSansPro-SemiboldIt.otf');
    
}

function setup() {
  //font size
  fill('250');
  textFont(myFont);
  textSize(16);
  text('p5*js', 10, 50);
  let cnv = createCanvas(displayWidth, displayHeight);
  cnv.mousePressed(canvasPressed);
  // createCanvas(900, 600);
  background(0);
  //displays text regarding concept
  text('Solastalgia:                                                                                 the distress caused by environmental change', 15, 20, width - 20);
  text('What do we know', 15, 40, width - 20);
    text('What dont we know', 15, 60, width - 20);
  text('The spreading of a thought or idea. Our mindspace through knowing about a virus.', 15, 500, width - 20);
  text('Is knowing bliss?', 15, 550, width - 20);
    image(img, 0, 0);
 //image location
  image(img, 0, height / 2, img.width / 2, img.height / 2);
}

function draw() {
  //draws spiral from the middle-center of screen
  angle += spin;
  r = r + grow;
  //r = noise(angle) * 100;
  // Polar to Cartesian Transformation
  var x = cos(angle)*r;
  var y = sin(angle)*r;
  translate(460, 300);
  fill(145, 228, 150);
  ellipse(x, y, 20, 10);
}


//sound functions from p5.js libraries
function canvasPressed() {
  mySound.loop();
  //image as background
  img = loadImage('assets/brainy.png');
  
}
function mouseReleased() {
  mySound.pause();
  img = loadImage('assets/brainy.png');
  
}
