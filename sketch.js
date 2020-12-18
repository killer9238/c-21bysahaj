var fixedRect, movingRect;
var rect,rect2;
function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 100, 80, 30);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(400,400,50,80);
  fixedRect.shapeColor="yellow";
  // fixedRect.velocityY=-3;
  //movingRect.velocityY=4;
  rect=createSprite(600,200,50,80);
  rect.shapeColor="blue";
  rect.velocityY=5;
  rect2=createSprite(600,500,50,80);
  rect2.shapeColor="green";
  rect2.velocityY=-4;
}

function draw() {
  background(0,0,0);
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
 if(checkcolide(movingRect,rect)||checkcolide(movingRect,rect2)||checkcolide(movingRect,fixedRect)){
  movingRect.shapeColor="red";
 }
  else{
    movingRect.shapeColor="blue"; 
  }
  checkbounce(rect,rect2)
  drawSprites();
}
