var laser1,laser2;
var chick2,chick2Img;
var chick3,chick3Img;
var chick4,chick4Img;
var hen,henImg;
var topEdge,bottomEdge;
var reset,resetImg;
var PLAY,END;
var gameState=PLAY;


function preload(){
  resetImg=loadImage("rest img/reset1.jpg");
  chickImg= loadImage("chiks img/images (2).png");
  chick2Img= loadImage("chiks img/images (2).png");
  chick3Img= loadImage("chiks img/images (2).png");
  chick4Img= loadImage("chiks img/images (2).png");
  henImg=loadImage("hen img/hen1.gif");

}
function setup() {
  createCanvas(800,730);
 reset= createSprite(425,430,100,10);
 reset.addImage(resetImg);
 reset.visible=false;
 reset.scale=0.5;
  chick2= createSprite(750,650,10,10);
  chick2.addImage(chick2Img);
  chick2.scale=0.3;

  chick3=createSprite(670,590,10,10);
  chick3.addImage(chick3Img);
  chick3.scale=0.3;

  chick4=createSprite(600,650,10,10);
  chick4.addImage(chick4Img);
  chick4.scale=0.3;

  laser1=createSprite(185,230,315,10)
  laser1.shapeColor="red";
  laser1.velocityY=5;
 
  laser2=createSprite(610,480,315,10)
  laser2.shapeColor="red";
  laser2.velocityY=-5;

  hen=createSprite(100,100,10,10);
  hen.addImage(henImg);
  hen.scale=0.3;

topEdge=createSprite(400,20,800,10);
topEdge.shapeColor="blue";
bottomEdge=createSprite(400,700,800,10);
bottomEdge.shapeColor="blue";
  

}

function draw() {
  background(0);  
if(gameState===PLAY){
  laser1.bounceOff(bottomEdge);
  laser1.bounceOff(topEdge);

  laser2.bounceOff(bottomEdge);
  laser2.bounceOff(topEdge);

 

  if(keyDown("UP_ARROW")){
    hen.velocityY=-5;
  }
  if(keyDown("DOWN_ARROW")){
    hen.velocityY=5;
  }
  if(keyDown("RIGHT_ARROW")){
    hen.velocityX=5;
  }
  if(keyDown("LEFT_ARROW")){
    hen.velocityX=-5;
  }
  if(hen.isTouching(laser1)||hen.isTouching(laser2)){
    gameState=END;
    reset.visible=true;
    laser1.velocityY=0;
    laser2.velocityY=0;
    stroke("blue");
    fill("red");
    textSize(50)
    text("you lose",330,370)
    
    hen.velocityY=0;
    hen.velocityX=0;
  }
  
  if(hen.isTouching(chick2)||hen.isTouching(chick3)||hen.isTouching(chick4)){
    laser1.velocityY=0;

    laser2.velocityY=0;
    

    hen.velocityX=0;
    hen.velocityY=0;

    stroke("blue");
    fill("yellow");
    textSize(50)
    text("you win",330,370);
   
    

  }
}
if(gameState===END){
 if (mousePressedOver(reset)){
    gameState=PLAY;
    reset.visible=false;
 }
}
  drawSprites();
}