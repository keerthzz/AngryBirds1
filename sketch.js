const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2, box3, box4, box5;
var ground1;
var log1;
var pig1, log2, pig2, log3, log4;
var bird;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(690,320,50,50);
    box2 = new Box(810,320,50,50);
    ground1 = new Ground(600,390,1200,20);
    log1 = new Log(750,300,170,PI/2);
    pig1 = new Pig(750,320);
    bird = new Bird(200,200);
    box3 = new Box(690,250,50,50);
    box4 = new Box(810,250,50,50);
    log2 = new Log(750,230,170,PI/2);
    pig2 = new Pig(750,250);
    box5 = new Box(750,190,50,50);
    log3 = new Log(730,150,100,PI/7);
    log4 = new Log(770,150,100,PI/-7);
}

function draw(){
    background(250);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground1.display();
    log1.display();
    pig1.display();
    bird.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();   
    log4.display();
}