const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;
var obj;
var ball;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
var x={
  isStatic : true
}

  obj=Bodies.rectangle(300,300,50,100,x);  
  World.add(world,obj);
  

  ball=Bodies.circle(200,100,5,y);
  World.add(world,ball);
  

  console.log(obj);
  console.log(obj.type);
  console.log(obj.friction);
  console.log(obj.position.x);
}

function draw() {
  background("yellow");  
  Engine.update(engine);
 rect(200,200,50,50);
 rect(obj.position.x,obj.position.y,100,50);
 circle(ball.position.x,ball.position.y,100);

}