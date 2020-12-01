const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var manImg,man,drops;
var maxDrops=100;

function preload(){
    manImg=loadImage("walking_1.png")

}

function setup(){
   createCanvas(500,600)
   engine = Engine.create();
    world = engine.world;

    man=createSprite(200,450,20,20)
    man.addImage(manImg)
    man.scale=0.4

    
}

function draw(){
    background("black")
    Engine.update(engine);
    

    drawSprites();
    
}   

