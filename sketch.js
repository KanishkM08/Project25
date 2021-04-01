
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	paperBall = new Paper(200, 550, 60);
	dustbinWall1 = new Dustbin(100, 100, 200, 200);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  paperBall.display();  
  dustbinWall1.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperBall.body, paperBall.body.position, {x:60, y:-12});
	}
}

