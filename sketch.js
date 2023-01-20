var Slime;

function setup() {
  Slime = createSprite(200,200,10,10);
  Slime.shapeColor = "black";
  Slime.scale = 3;
  createCanvas(400,400);
  
}

function draw() 
{
  background("yellow");
  if(keyDown(RIGHT_ARROW)){
    Slime.x += 5;
  }if(keyDown(LEFT_ARROW)){
    Slime.x -= 5;
  }if(keyDown(UP_ARROW)){
    Slime.y -= 5;
  }if(keyDown(DOWN_ARROW)){
    Slime.y += 5;
  }if(keyDown(RIGHT_ARROW)){
   background("red");
  }if(keyDown(LEFT_ARROW)){
    background("green");
  }if(keyDown(UP_ARROW)){
    background("purple");
  }if(keyDown(DOWN_ARROW)){
    background("blue");
  }
  


  drawSprites();

}




