//calling engine, world, bodies
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//creating variables
var engine,world,object;
var ball;

function setup() {
  createCanvas(800,400);
//craeting the Engine
  engine = Engine.create();
  world = engine.world;

//makes the object fixed
  var fixed ={
    isStatic:true}

//creating rect with bodies
  object = Bodies.rectangle(400,390,800,20,fixed);

//adding object to world
  World.add(world,object);

//makes it bounce
  var bounceT={
  restitution:1.0}

//creating circle with bodies and adding to world
  ball=Bodies.circle(400,200,10,bounceT);
  World.add(world,ball);

  console.log(object.position.x);
  console.log(object.position.y);
}

function draw() {
  background("lightBlue"); 

//updating the engine  
  Engine.update(engine);
//making rect in center
  rectMode(CENTER);
//create rect
  rect(object.position.x,object.position.y,800,20);

//modify the ellipse and creating it
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10);

  drawSprites();
}