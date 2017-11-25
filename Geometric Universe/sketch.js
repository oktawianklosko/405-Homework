//https://github.com/stavrosdidakis/DAT-GAD-405_2017
//https://p5js.org

//DAT405 / GAD405
//09_Exercise 4 - Color Coordinates

function setup() {
  createCanvas(400, 400);
frameRate(8);
}

function draw() {
  background(0); //Set your background color to black (0)

  for(let i=0; i<300; i++){
push();
translate(10,10);
fill(random(255), random(255), random(255));
noStroke();
ellipse(random(width), random(height), random(50), random(50));
pop();

  }

}
