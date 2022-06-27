
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var backgroundImg
var ship,ship1;
var alienImg;
var aliens;

var score = 0;

var cannonBall;
var cannonBalls;
var cannonBallImg

var alienGroup;

var alien;

var player = [];



function preload(){
  
  backgroundImg = loadImage("./pics/outer-space-surface-landscape-with-planet-free-vector.jpg");
  alienImg = loadImage("pics/ufo-4778062__340.webp");
  cannonBallImg = loadImage("pics/Karbonatom.png");

}

function setup()
{
  createCanvas(800,700);

  
  ship = new Ship(400,20,100,20);
  ship1 = new Ship(400,40,20,20);
  player.push(ship);
  player.push(ship1);
 
  aliens = new Group();


  createAlienRow(130);
createAlienRow(130+70);
createAlienRow(130+70+70);
  
  cannonBalls = new Group();
  

  


  imageMode(CENTER);
}

function draw() 
{
  background(50);
  
  push();
  fill("white");
  textSize(30);
  text("Score: "+ score,70,50);
  pop();

  aliens.setVelocityYEach(0.4)
  
  cannonBalls.bounceOff(aliens,alienHit);


  ship.show();
  ship1.show();
  ship.move();
  ship1.move();
  ship.collide();
  ship1.collide();

  
 if(!aliens[0])
 {
   console.log("Won");
   fill("white");
   textSize(50)
   text("Well Done!!",width/2-120,height/2);
 }
  
  if(keyDown("space")){
    cannonBall = createSprite(ship1.x,ship1.y-50,15,15);
    cannonBall.addImage(cannonBallImg);
    cannonBall.scale = 0.05
    cannonBall.velocityY = -10
    cannonBalls.add(cannonBall);
  }


 
 drawSprites();
}

function createAlienRow(y) {
  for(c=0; c<4; c++)
  {alien = createSprite(c*150+155,y,50, 25);
    alien.addImage(alienImg);
    alien.scale = 0.15;
    aliens.add(alien)
  }
}

function alienHit(cannonBall, alien) {
  
  alien.remove();
  cannonBall.remove();
  score = score+5;
 }

 function shipHit(ship1,alien){
  ship1.remove();
  ship.remove();
  aliens.remove();
  fill("white");
  textSize(50);
  text("Game Over!!", width/2-120,height/2);
  score = 0

 }





