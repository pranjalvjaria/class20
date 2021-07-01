
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var rock;
var ground;

var vedge;

var wall


var angle=60

var angle=60

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
var rockoptions = {
  restitution:0,
  frictionAir:0
}
rock = Bodies.circle (270,10,20,rockoptions)
World.add(world,rock)
ellipseMode(RADIUS)

var vedgeoptions = {
isStatic:true 
}
vedge = Bodies.rectangle(100,100,100,20,vedgeoptions)
var walloptions = {
isStatic:true
}
wall = Bodies.rectangle(270,270,100,20,walloptions)
}


function draw() 
{
  background(51);
  Engine.update(engine);
  Matter.Body.rotate(vedge,angle)
  fill ("brown")
  rect(ground.position.x,ground.position.y,400,20)
 ellipse(ball.position.x,ball.position.y,20,20)

 ellipse(rock.position.x,rock.position.y,20,20)

 push ()
 translate (vedge.position.x,vedge.position.y)
 rotate(angle)
 rect(0,0,100,20)
 pop ()
 angle=angle+0.1
 

 Matter.Body.rotate(wall,angle)
 fill("brown")
 push()
 translate (wall.position.x,wall.position.y)
 rotate (angle)
 rect(0,0,100,20)
 pop()
 angle=angle+0.1
}

