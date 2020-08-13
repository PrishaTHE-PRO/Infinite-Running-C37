const Engine = Matter.Engine;
 const World = Matter.World;
const Events = Matter.Events;
 const Bodies = Matter.Bodies;

var backImage,BG;
var player_running;
var ground;
var monkey;

function preload(){
  backImage=loadImage("runningtrack.jpg");
  player_running=loadImage("boy.png");
}


function setup() {
  createCanvas(600,300);
  engine = Engine.create();
  world = engine.world;
 // BG=createSprite(10,10,600,300);
 // BG.addImage(backImage);
 // BG.x = BG.width/2;
 // BG.velocityX = -3;

  ground = new Ground(50,270,600,10);
  
  monkey=createSprite(70,200,10,10);
  monkey.addImage("running",player_running);
  monkey.scale=0.2;

}


function draw(){
 background(backImage);
 Engine.update(engine);
  ground.visible=true;
 
  ground.display();
  stroke("white");
  textSize(20);
  fill("white");
  
  //if (BG.x < 100){
  //  BG.x = BG.width/2;
 // }
  
 // monkey.collide(ground);
  drawSprites();

}






