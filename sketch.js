const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world, engine;
var dustbin1, dustbin2, dustbin3;
var paper;
var ground;
var bg;	

function preload() {
	bg = loadImage("cbRoom.png");
}

function setup() {
	createCanvas(windowWidth, 700);


	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);

	//Create the Bodies Here.
	dustbin1 = new Dustbin(610, 463, 50, 200);
	dustbin2 = new Dustbin(400, 463, 50, 200);
	dustbin3 = new Dustbin(505.5, 543, 260, 50);
	ground = new Ground(200, 580, 1000, 50);
	paper = new Paper(65, 540, 20);

}


function draw() {
	Engine.update(engine);
	rectMode(CENTER);
	background(bg);
	push();
	textFont("algerian")
	fill("red");
	stroke(0);
	strokeWeight(4);
	textSize(35);
	textStyle("bold");
	text("Press the UP arrow key to throw the trash", 250, 100);
	pop();
	push();
	textStyle("bold");
	textFont("algerian")
	stroke(0);
	strokeWeight(3);
	fill("red");
	textSize(27);
	text(" You must throw it in the  dustbin and keep this house clean",220, 135)
	pop();
	textFont("algerian")
	stroke(0);
	strokeWeight(3);
	textStyle("bold");
	fill("red");
	textSize(29.5);
	text("And dont forget Cleanliness is next to Godliness",260,170);
	dustbin1.display();
	dustbin2.display()
	dustbin3.display()
	ground.display();
	paper.display();
	push ();
	textFont("algerian")
	fill("lightblue");
	text("USE ME",550,645);
	pop ();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 49, y: -80 });
	}
}

