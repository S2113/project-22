var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);

	star = createSprite(starBody.position.x,starBody.position.y,20,20);
  star.addImage(starImg);
  star.scale = 0.2;
	
	

	console.log(starBody);


}


function draw() {

  background(bgImg);

  star.x=starBody.position.x;
  star.y=starBody.position.y;
  
  drawSprites();

  Engine.update(engine);
  keyPressed();


  
}

function keyPressed() {

	if(keyDown("RIGHT_ARROW"))
   {
     fairy.x=fairy.x+5;
   }

   if(keyDown("LEFT_ARROW"))
   {
     fairy.x=fairy.x-5;
   }

   if(keyDown("DOWN_ARROW"))
   {


   if(starBody.position.y<470)
   {
     for( var x=0; x<450; x=x+0.01)
     {
    starBody.position.y=starBody.position.y+0.005;
     }
    }
   }

   

	//write code here
}

