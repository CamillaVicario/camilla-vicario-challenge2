function setup() {
  createCanvas(400, 400);
  frameRate(10);
}

function draw() {
  background("#67A569");
  fill(255, 60, 100);
  text("(" + mouseX + ", " + mouseY + ")", mouseX, mouseY);
  noStroke()
  fill("rgb(100,55,55)");
  rect(0,380,400,85);
  fill("rgb(232,232,232)");
  stroke("grey");
  strokeWeight(1);
  rect(50,300,45,80,0,5,5,5);
  fill("rgb(218,214,214)");
  stroke("grey");
  circle(85,310,7);
  fill("rgb(182,173,173)");
  rect(50,215,7,85);
  noFill();
  stroke("grey")
  strokeWeight(2,5);
  arc(193,214,280,280,PI,-PI/8,OPEN)
  fill("rgb(245,245,114)")
  stroke("yellow")
  quad(304,199,341,199,375,380,275,380)
  fill("rgb(182,173,173)")
  stroke("grey")
  strokeWeight(1)
  arc(322, 189, 50, 55, PI-PI/8, 0+PI/8,CHORD);


}
