
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;

var vedge;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  rectMode(CENTER)
  var options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,400,20,options)
  World.add(world,ground)
  var balloptions = {
    restitution:0.95,
    frictionAir:0.01
  }
ball = Bodies.circle (100,10,20,balloptions)
World.add(world,ball)
ellipseMode(RADIUS)
var vedgeoptions = {
isStatic:true 
}
vedge = Bodies.rectangle(100,100,100,20,vedgeoptions)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  fill ("brown")
  rect(ground.position.x,ground.position.y,400,20)
 ellipse(ball.position.x,ball.position.y,20,20)
 rect(vedge.position.x,vedge.position.y,100,20)
}

