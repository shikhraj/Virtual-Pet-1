//Create variables here
var dog, happyDog, database, foodS, foodStock;
var dogImg, happyDogImg;
var foodStok;


function preload()
{
  //load images here
  dogImg = loadImage("dog.png");
  happyDogImg = loadImage("happyDog.png");
  
}

function setup() {
  var canvas = createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  foodStock=database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {
  background(44, 139, 86);  


  foodStok = foodS;
  if(foodS!==undefined){
    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happyDogImg);
      foodStok = foodStok-1;
    
      writeStock(foodStok);
    }
  }
  drawSprites();
  //add styles here
  fill("black");
  textSize(20);
  stroke(5);
  text("Press the up mouse button to feed Snowy",100,30);
  fill("red");
  if(foodS!==undefined){
  text("Food stock = " + foodS,150,130);
  }

}




function readStock(data){
  foodS=data.val();

}

function writeStock(x){x
  database.ref('/').update({
    Food:x

  })


  if(x<=0){
    x=0;
  }
  else{
    x=x+1
  }


}



