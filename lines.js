function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  
}
var Origin = {
  x:0,
  y:0,
  
}
var Final = {
  x:0,
  y:0,
  
}  
var a = 0;
function mouseClicked(){
  a = 0
}
function mouseDragged(){
  if( a == 0){
    Origin.x = mouseX;
    Origin.y = mouseY;
  }
  a ++;
  fill(255,0,0);
  noStroke();
  ellipse(mouseX,mouseY,1,1); 

}
function mouseReleased(){
  Final.x = mouseX;
  Final.y = mouseY;
  
  
  fill(255,0,0);
  noStroke();
  ellipse(mouseX,mouseY,1,1); 
  print("Orignin X : ", Origin.x);
  print("Origin Y : ", Origin.y);
  print("Final X : ", Final.x);
  print("Final Y : ", Final.y);
  //background(220);
  stroke(255, 204, 0);
  strokeWeight(10);
  line(Origin.x, Origin.y, Final.x, Final.y);
  
}
