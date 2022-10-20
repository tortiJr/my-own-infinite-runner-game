var pinla ,pinla_img, cucumber_img, cucumber, cucumberGroup;

function preload(){
    pinla_img=loadImage("pinla.jpeg");
    cucumber_img=loadImage("cucumber.jpeg");

}

function setup() {
    createCanvas(windowWidth, windowHeight)
    pinla=createSprite(200, 200);
    pinla.addImage("player",pinla_img);
    pinla.scale=0.1
    cucumberGroup=new Group()
}

function draw() {
    background("white")
    spawnVegies()
    pinla.x=World.mouseX;
    pinla.y=World.mouseY;
    drawSprites()
    if(pinla.isTouching(cucumberGroup)){
        cucumberGroup.destroyEach();
        pinla.destroyEach();
    }

}

function spawnVegies(){
    if(frameCount%100===0){
        cucumber=createSprite(random(50, windowWidth-100),10);
        cucumber.addImage("green scary snake",cucumber_img);
        cucumber.velocityY=2;
        cucumberGroup.add(cucumber);
        cucumber.scale=0.2;
        pinla.depth=cucumber.depth;
        pinla.depth+=1
    }
}