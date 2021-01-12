const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;

var ground1;
var ball;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var bg = "bg.png";
var M1;


var blocks = [];

function setup(){
createCanvas(1500,750);
engine = Engine.create();
world = engine.world;
fill("red");
b1 = new Block(850,200,50,50);
b2 = new Block(850,200,50,50);
b3 = new Block(850,200,50,50);
b4 = new Block(850,200,50,50);
b5 = new Block(850,200,50,50);
b6 = new Block(850,200,50,50);
b20 = new Block(850,200,50,50);
b19 = new Block(800,200,50,50);
b8 = new Block(800,200,50,50);
b10 = new Block(800,200,50,50);
b12 = new Block(800,200,50,50);
 fill("black");
b11 = new Block(800,200,50,50);
b9 = new Block(800,200,50,50);
b7 = new Block(800,200,50,50);
fill("red");
b13 = new Block(750,200,50,50);
b14 = new Block(750,200,50,50);
b15 = new Block(750,200,50,50);
b16 = new Block(750,200,50,50);
b17 = new Block(750,200,50,50);
b18 = new Block(750,200,50,50);
b21 = new Block(750,200,50,50);
fill("blue");

ground1 = new ground(600,600,1200,20);

ball = new Ball(200,200,200,160);

M1 = new Monster(990,520,200,200);

}
function draw(){
background("black");
Engine.update(engine);
ground1.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
b16.display();
b17.display();
b18.display();
b19.display();
b20.display();
b21.display();

M1.display();

ball.display();
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}