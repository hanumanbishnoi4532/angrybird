const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
function setup(){
    var canvas = createCanvas(800,600);
    engine = Engine.create();
    world = engine.world;
    
    box1 = new Box(150,150,5,50);
    box2 = new Box(240,100,50,50);
    console.log(box1);
    ground=new Ground(400,height,800,20);

}

function draw(){
    background(200);
    Engine.update(engine);
        
    
    box1.display();
    box2.display();
    ground.display();
}
