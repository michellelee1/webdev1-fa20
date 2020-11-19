//global variables 
let xPos = 0;
let yPos = 0;
let size = 40;
let myColor;



//setup() only runs one time
function setup() {
  let cnv = createCanvas(innerWidth, innerHeight);
  cnv.parent("#sketch-parent");
  background(255, 100, 255);
  myColor = color(0, 255, 0)
  
  //frameRate(10);
}

// draw() runs 60 times a second - or whatever you set the framerate to
function draw() {
  background(255, 220, 255);
  
  fill(myColor);
  stroke(255, 0, 0);
  strokeWeight(2);
  //noStroke();
  //elipse (x positive # moves left negative moves right, y positive # moves down negative # moves up, radius width, radius height) You can put width/4 and height/4 to say 25% of the width and height of window size.
  ellipse(xPos, height/2, size, size);
  
  //xPos = xPos +1
  xPos+=10;
  print(xPos);
  
  if(xPos > width + size/2) {
    xPos = -size/2;
    yPos = random(height);
    myColor = color(random(255), random(255), random(255));
  }
  
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
    background(255, 100, 255);
}