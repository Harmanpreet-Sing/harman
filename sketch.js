var movingRect,fixedRect;

function setup(){
createCanvas(1300,1000);
movingRect = createSprite(800,500,50,50);
movingRect.debug = true;

fixedRect = createSprite(500,200,50,80);
fixedRect.debug = true;

} 

function draw(){
  background("white")
  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

if ( movingRect.x - fixedRect.x < fixedRect.width/2+movingRect.width/2 
  && fixedRect.x - movingRect.x < fixedRect.width/2+movingRect.width/2 
  && movingRect.y - fixedRect.y < fixedRect.height/2+movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2+movingRect.height/2){

    //movingRect.visible = "false"
    fixedRect.shapeColor = "yellow";
  }
  else {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "black";
  }
  drawSprites();
}