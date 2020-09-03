var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boxL,boxR,boxM,hidden_ground;


function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);	
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2;

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	// groundSprite=createSprite(width/2, 640, width,10);
	// groundSprite.shapeColor=color(255);
	// groundSprite.visible=false;
	
// 	// creating objects using new keyword

	


// 	
	engine = Engine.create();
	world = engine.world;
	
	boxL=new Box(300,610,20,100);
	boxM=new Box(410,650,200,20);
	boxR=new Box(520,610,20,100);
	ground=new Ground(width/2, height-35, width, 10);
	hidden_ground=new Ground(410,640,200,2);
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true,friction:0});
	World.add(world, packageBody);
	

	//Create a Ground
	// ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	 //World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
	
  rectMode(CENTER);
  Engine.update(engine);
   background(0);
  
  packageSprite.x= packageBody.position.x; 
  packageSprite.y= packageBody.position.y;
  // calling function using objects
   boxL.display();
   boxM.display();
   boxR.display();
   ground.display();
   hidden_ground.display2();
	if(keyPressed()){
		
		ellipse(packageSprite.x,packageSprite.y,5,5);
		Body.setStatic(packageBody,false);
	}
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    return true;
  }
   return false;
}



