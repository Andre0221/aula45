var backgroundImg, backgroound;
var shooter, shooterImg, shooterImg_2;

function preload(){
  backgroundImg = loadImage("assets/bg.jpeg");
  shooterImg = loadImage("assets/shooter_2.png");
  shooterImg_2 = loadImage("assets/shooter_3.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  backgroound = createSprite(displayWidth / 2 +160, displayHeight / 2 +75, 20,20);
  backgroound.addImage(backgroundImg);
  backgroound.scale = 1.25;

  shooter = createSprite(displayWidth -1150, displayHeight -300, 50, 50);
  shooter.addImage(shooterImg);
  shooter.scale = 0.7;
  shooter.setCollider("rectangle",0 ,0 ,250,400);
  shooter.debug = false;
  
  edges = createEdgeSprites();
}

function draw() {
  background(0); 

  if (keyDown(UP_ARROW) || touches.length > 0){
    shooter.y = shooter.y -10;
  }

  if (keyDown(DOWN_ARROW) || touches.length > 0){
    shooter.y = shooter.y +10;
  }

  if (keyWentDown("space") || touches.length > 0){
    shooter.addImage(shooterImg_2);
  }
  else if (keyWentUp("space") || touches.length > 0){
    shooter.addImage(shooterImg);
  }

  shooter.collide(edges[3]);
  shooter.collide(edges[2]);

drawSprites();

}

