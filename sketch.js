
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, platform;
var block1, block2, block3, block4, block5, block6, block7, block8;
var Polygon;
var slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    block1 = new Box(330, 235, 30, 40);
    block2 = new Box(360, 235, 30, 40);
    block3 = new Box(390, 235, 30, 40);
    block4 = new Box(420, 235, 30, 40);
    block5 = new Box(360, 195, 30, 40);
    block6 = new Box(390, 195, 30, 40);
    block7 = new Box(410, 195, 30, 40);
    block8 = new Box(390, 155, 30, 40);

    Polygon = Bodies.circle(50,200,20);
    World.add(world, Polygon);


    slingShot = new slingShot(this.Polygon, {x:100, y:200});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
    //gameState = "launched";
}
