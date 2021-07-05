var pathImg, knightImg, zombieImg
var collided = 0
var playerHealth = 10;
var zombieHealth = 4;
var gameState = 0;
var timer = 60;
function preload(){
 pathImg = loadImage("Images/path.jpg");
 knightImg = loadAnimation("Images/tile012.png","Images/tile013.png","Images/tile014.png");
 knightImg2 = loadAnimation("Images/tile013.png");
 knightImg3 = loadAnimation("Images/tile014.png");
 zombieImg = loadImage("Images/zombie.png");
 knifeImg = loadImage("Images/knife.png");
 heartImg = loadImage("Images/health.png");
 ZombieHealth = loadImage("Images/ZombieHealth.png");
 knockbacked = loadImage("Images/Knockbacked.jpg")
}



function setup() {
  createCanvas(displayWidth,displayHeight-200);
  path = createSprite(width/2,height/2);
  path.addImage(pathImg);
  path.scale = 2.5;

  knight = createSprite(width-100,height-100);
  knight.addAnimation("standing",knightImg2);
  knight.addAnimation("walking",knightImg);
  knight.addAnimation("jumping",knightImg3);

  ground = createSprite(width-750,height-60,1500,10);
  ground.visible = false;

  zombie = createSprite(random(100,width-100),0)
  zombie.addImage(zombieImg);
  zombie.velocityY = 10;
  zombie.scale = 0.25;
  
  knife = createSprite(800,height-80);
  knife.addImage(knifeImg);
  knife.scale = 0.07;
  knife.mirrorX(-1);


}

function draw() {
  background(255,255,255);  

  console.log(zombieHealth);

  knight.velocityX = 0
  knight.changeAnimation("standing",knightImg2);

  if(keyDown("a")){
    knight.velocityX = -3;
    knight.changeAnimation("walking",knightImg);
    knight.mirrorX(1);
  }

  if(keyDown("d")){
    knight.velocityX = 3;
    knight.changeAnimation("walking",knightImg);
    knight.mirrorX(-1);

  }

  if(keyDown("w")&&knight.y>height-130){
    knight.velocityY = -5;
    knight.changeAnimation("jumping",knightImg3);
  }
  
  if(knight.isTouching(knife)){
   gameState = 1;
   knife.scale = 0.1;
   knife.y = knight.y;
   if(keyDown("a")){
    knife.x = knight.x-17;
    knife.mirrorX(-1)
   }
   if(keyDown("d")){
    knife.x = knight.x+15;
    knife.mirrorX(1)
   }
  }

  knight.debug = true;
  zombie.debug = true;
  knight.setCollider("rectangle",-10,0,40,80);
  zombie.setCollider("rectangle",-5,-10,200,300);

  if(gameState === 1 &&zombie.isTouching(knife)&& mouseWentDown("leftButton")){
    zombie.x = zombie.x*1.15
    zombieHealth = zombieHealth-2;
  }

  if(gameState === 1 &&knight.isTouching(zombie) && timer === 60){
    knight.x = knight.x*1.15
    playerHealth = playerHealth-2;
    if(knight.velocityX<0){
      knife.x = knight.x-17;
    knife.mirrorX(-1)
    }
    if(knight.velocityX>0){
      knife.x = knight.x+15;
    knife.mirrorX(1)
    }
  }
  if(gameState ===1){
    timer--
  }
 if(timer<=0){
   timer = 60
 }
 console.log(timer)

  zombie.depth = knife.depth+1;

  knight.velocityY+=0.2;

  knight.collide(ground);
  
  if(zombie.collide(ground)){
    collided = 1
  }
  
  if(collided ===1 && knight.x>zombie.x){
    zombie.velocityX = 2
} else {
  zombie.velocityX =- 2
}


drawSprites();

if(playerHealth===10){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  image(heartImg,110,50,20,20)
  image(heartImg,130,50,20,20)
  image(heartImg,150,50,20,20)
  image(heartImg,170,50,20,20)
  image(heartImg,190,50,20,20)
  image(heartImg,210,50,20,20)
}
if(playerHealth===9){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  image(heartImg,110,50,20,20)
  image(heartImg,130,50,20,20)
  image(heartImg,150,50,20,20)
  image(heartImg,170,50,20,20)
  image(heartImg,190,50,20,20)
}
if(playerHealth===8){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  image(heartImg,110,50,20,20)
  image(heartImg,130,50,20,20)
  image(heartImg,150,50,20,20)
  image(heartImg,170,50,20,20)
}

if(playerHealth===7){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  image(heartImg,110,50,20,20)
  image(heartImg,130,50,20,20)
  image(heartImg,150,50,20,20)
  
}

if(playerHealth===6){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  image(heartImg,110,50,20,20)
  image(heartImg,130,50,20,20)
  image(heartImg,150,50,20,20)
  
}

if(playerHealth===5){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  image(heartImg,110,50,20,20)
  image(heartImg,130,50,20,20)
  
  
}

if(playerHealth===4){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  image(heartImg,110,50,20,20)
  
}

if(playerHealth===3){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)
  image(heartImg,90,50,20,20)
  
}
if(playerHealth===2){
  image(heartImg,50,50,20,20)
  image(heartImg,70,50,20,20)

}

if(playerHealth===1){
  image(heartImg,50,50,20,20)

}

if(playerHealth===0){
  
}

if(zombieHealth===4){
  image(ZombieHealth,width-150,50,30,20)
  image(ZombieHealth,width-170,50,30,20)
  image(ZombieHealth,width-190,50,30,20)
  image(ZombieHealth,width-210,50,30,20)
  
}

if(zombieHealth===3){
  image(ZombieHealth,width-150,50,30,20)
  image(ZombieHealth,width-170,50,30,20)
  image(ZombieHealth,width-190,50,30,20)
  
}
if(zombieHealth===2){
  image(ZombieHealth,width-150,50,30,20)
  image(ZombieHealth,width-170,50,30,20)

}

if(zombieHealth===1){
  image(ZombieHealth,width-150,50,30,20)

}

 //textFont("")
 fill("red")
 textSize(18);
 text("Player Health",80,30);
 fill("green")
 text("Zombie Health",1150,30);


  
}

