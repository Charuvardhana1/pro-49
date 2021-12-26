//var cow
//var position;
var farmer;
var cowGroup;
var chickenGroup;
var chicken;
var cow;
var score ;
var pig;
var goat;
var pigGroup;
var fruit;
var lives;



function preload()   {
  bg = loadImage("images/bg1.png")
  cowImage = loadImage("images/cow4.png")
  roosterImg = loadImage("images/chicken1.png")
  farmerImg = loadImage("images/farmer2.png")
  cowImg1 = loadImage("images/cow12.png")
  pigImage = loadImage("images/pig.png")
  pigImg1 = loadImage("images/pig11.png")
  roosterImg1 = loadImage("images/chicken7.png")
  cowEatImg = loadImage("images/coweat.png")
  plantImg = loadImage("images/plant.png")
  wheatImg = loadImage("images/spring/spring1.png");
  background_moo = loadSound("images/cowSound.mp3");
  cowAnimations(addAnimation)
}


function setup(){
  
  createCanvas(1600,800);

  score = 0;
  lives = 6;

  //cow = createSprite(800,600,10,10)
  //cow.addImage("cow1",cow)
  farmer = createSprite(10,10);
  farmer.scale = 0.5;

  fruit = createSprite(1000,510,30,30)
  fruit.visible = false;
  


  farmer.addImage(farmerImg);

  chickenGroup = new Group();
  cowGroup = new Group();
  pigGroup = new Group();
 plantGroup = new Group(); 
 createPlants();


}

function draw(){
  background(bg);
  //background_moo.play();
  textColor = 'white';
  textSize(20,30)
  fill("blue")
    text("SCORE: "+ score, 1000,100);
  text("Lives: "+ lives,900,100);
  
  

  if(keyDown("UP_ARROW"))   {
    farmer.y = farmer.y-30;
    
  }

  if(keyDown("DOWN_ARROW"))    {
    farmer.y = farmer.y+30;
  }

  if(keyDown("LEFT_ARROW"))    {
    farmer.x = farmer.x-30;
  }

  if(keyDown("RIGHT_ARROW"))    {
    farmer.x = farmer.x+30;
  }
  //farmer.x = mouseX  ;
 // farmer.y = mouseY;

 text(mouseX+","+mouseY,mouseX,mouseY)

  spawnCows();
  spawnChicken();
  spawnPig();

  if(farmer.isTouching(chickenGroup)){
    for(var i=0;i<chickenGroup.length;i++){
      
   if(chickenGroup[i].isTouching(farmer)){
     chickenGroup[i].velocityX = 3
     chickenGroup[i].addImage(roosterImg1);
     score = score + 2
     farmer.x = farmer.x - 200;
   }
    }
  }

  if(farmer.isTouching(cowGroup)){
    for(var i=0;i<cowGroup.length;i++){
      
   if(cowGroup[i].isTouching(farmer)){
     cowGroup[i].velocityX = 3
     cowGroup[i].addImage(cowImg1);
     score = score + 2
     farmer.x = farmer.x - 200;
   }
    }
  }

  if(farmer.isTouching(pigGroup)){
    for(var i=0;i<pigGroup.length;i++){
      
   if(pigGroup[i].isTouching(farmer)){
     pigGroup[i].velocityX = 3
     pigGroup[i].addImage(pigImg1);
     score = score + 2
     farmer.x = farmer.x - 200;
   }
    }
  }

if(farmer.x>1000)  {
  farmer.x = 950;
}

if(farmer.x<350)    {
  farmer.x = 380;
}

if(farmer.y>750)   {
  farmer.y = 700;
}

if(farmer.y<320)   {
  farmer.y = 450;
}

if(cowGroup.isTouching(plantGroup)) {
  plant1.destroyEach();
  lives = lives-1;
}


  


  

   drawSprites();
  
}

function createPlants(){

    
  for(var y = 430; y<=650; y=y+90){
    plant1= createSprite(800,y,30,30)
    plant1.addImage("fruit", plantImg)
    plant1.scale = 0.3
    plantGroup.add(plant1)
  }


  for(var y = 400; y<=650; y=y+90){
    plant2= createSprite(620,y,30,30)
    plant2.addImage("fruit", wheatImg)
    plant2.scale = 0.2
    plantGroup.add(plant2)
  }
  
}

function spawnCows() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
     cow = createSprite(1600,800,10,10);
    cow.y = Math.round(random(350,600));
    cow.addImage(cowImage);
    //cloud.scale = 0.5;
    cow.velocityX = -3;
    cow.scale = 1;
    cowGroup.add(cow);
    cow.lifetime = 400 ; 

  }}

  function spawnChicken() {
    //write code here to spawn the clouds
    if (frameCount % 150 === 0) {
       chicken = createSprite(1344,800,10,10);
      chicken.y = Math.round(random(400,600));
      chicken.addImage(roosterImg);
      //cloud.scale = 0.5;
      chicken.velocityX = -3;
      chickenGroup.add(chicken);
      chicken.scale = 0.2;
      
      chicken.lifetime = 400;
  
    }}

    
function spawnPig() {
  //write code here to spawn the clouds
  if (frameCount % 150 === 0) {
     pig = createSprite(1400,800,10,10);
    pig.y = Math.round(random(400,600));
    pig.addImage(pigImage);
    //cloud.scale = 0.5;
    pig.velocityX = -3;
    pig.scale = 0.2;
    pigGroup.add(pig);
    pig.lifetime = 400 ; 

  }}

