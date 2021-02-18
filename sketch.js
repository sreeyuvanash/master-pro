var bird,bac;
var introimg,ruleimg,start1,start2,start3,intro,rule,topp,bott;

var endi,end,end2,restart,gape,gapei;

var b1,b2,b3,b4,b5,b6;

var level,level1;
var birdImg,bacImg,b11,b22,b33,b44,b55,b66;

var score=0;

var b1,b2,b3,b4,b5,b6,start;
var coin1,coin2,coin3;
var pipe1Group,pipe2Group,coinGroup,birdGroup;
var score=0;
var start1;
var bottom1,top1;
var mou,mouImg;

var win,wini;

var time=30;

var INTRO=0;
var RULE=1
var LEVEL1=2;
var LEVEL2=3;
var GAPE=4;
var END1=5;
var END2=6;
var WIN=7;
var gameState=INTRO;
//var gameState=WIN;


function preload(){
  
  
 
  birdImg=loadImage("bird.png")
  bacImg=loadImage("flappy back.png")
  b11 = loadImage("bird2 (2).png")
  b22 = loadImage("bird1 (2).png")
  b33 = loadImage("bird3 (2).png")
  b44=loadImage("bird4 (2).png")
  b55=loadImage("bird5 (2).png")
  b66 = loadImage("bird6 (2).png")
  

  wini=loadImage ("Presentation1.png");
  endi= loadImage("rest.png")
  
  gapei = loadImage("gape(le1.png")

  introimg=loadImage("Image1.png")
  ruleimg = loadImage("IMAGE3.png")
  
  
      b1=loadImage("sprite_0(1).png");
  b2=loadImage("sprite_0(2).png");
  b3=loadImage("sprite_0(5).png");
  b4=loadImage("sprite_0(3).png");
  b5=loadImage("sprite_0(4).png");
  b6=loadImage("sprite_0(6).png");
  coin1=loadImage("sprite_0.png");
  coin2=loadImage("sprite_10.png");
  coin3=loadImage("sprite_20.png");
  
  level1= loadImage("res.png")
}

function setup() {
 
  createCanvas(700,440);
  background ("black")
  
  bac=createSprite(350,200);
  bac.addImage("bacImg",bacImg);
  bac.x = bac.width /2;
  bac.velocityX=-20; 
  //bac.visible=false
  
  
  bacin=createSprite(350,220,700,440);
  bacin.visible=false

  
 
  bird = createSprite(75,200,20,20);
  bird.addImage("birdImg",birdImg)
  bird.scale=0.2
  
 intro=createSprite(350,200);
  intro.addImage("introimg",introimg)
  intro.scale=0.5
        intro.visible=false

  
   rule=createSprite(350,200);
  rule.addImage("ruleimg",ruleimg)
  rule.scale=0.5
  rule.visible=false;
  

  
 
  
  topp = createSprite(350,0,700,10)
  topp.visible =false

  bott = createSprite(350,440,700,10)
  bott.visible =false
  
  end = createSprite (350,220);
  end.addImage("endi",endi)
  end.scale=0.6
  end.visible=false;
  
   end2 = createSprite (350,220);
  end2.addImage("endi",endi)
  end2.scale=0.6
  end2.visible=false;
  
  restart= createSprite ( 620,50,175,230)
  restart.visible=false;
  
  gape = createSprite(350,220)
  gape.addImage("gapei",gapei)
  gape.scale=0.8;
  gape.visible=false
  

  birdGroup=createGroup();
  pipe1Group=createGroup();
  pipe2Group=createGroup();
  coinGroup=createGroup();
  
    start2=createSprite (600,340,100,100)
  start2.visible =false ;
  
     start3=createSprite (600,340,100,100)
  start3.visible =false ;

 
     start1=createSprite (370,360,200)
  start1.visible =false
  
  win = createSprite (350,220);
  win.addImage("wini",wini)
  win.visible=false
  
  level = createSprite (350,350)
  level.addImage("level1",level1)
  level.scale=0.5
  level.visible=false
  
}



function draw() {
  
 
    if (bac.x < 220) {
    bac.x = bac.width / 2;

 }
    
  
  
  
  drawSprites();
  //badBird();
  



  if (gameState===INTRO){

   
      intro.visible=true;

    bird.visible=false;
 
    if (mousePressedOver(start1)){
      
      intro.visible=false
      gameState=RULE
      
    }
    
  }else if(gameState===RULE){
  
    //background("black")
    bac.visible =false;
    rule.visible =true;

 
  
  if (mousePressedOver(start2)){
      
  rule.visible =false;
  console.log("hi")  
  gameState=LEVEL1 
    
    }    
  }else if(gameState===LEVEL1){
    
      //console.log("sree")  
    rule.visible=false
    bac.visible=true
    bird.visible=true
    fill("black")
   textSize(20); 
  text("coin:"+score,600,25); 
      bird.velocityY= bird.velocityY+1;  

    if(keyWentDown("space")||(mousePressedOver(bacin)) ){

  bird.velocityY=-6;
    
  }
    blockspam();
    blockspam2();
    coinspam();
    
    if (bird.isTouching(pipe1Group)||bird.isTouching(pipe2Group)||
      bird.isTouching(topp)||bird.isTouching(bott)) {
      
        gameState=END1 

      }
  
 if(bird.isTouching(coinGroup)){
    
    score=score+1;
    coinGroup.destroyEach();
 }
    
  if (score===5){

    gameState = GAPE
  
  }
    
    
    
    
  }else if(gameState===END1){
    
    coinGroup.destroyEach();
    pipe2Group.destroyEach();
    pipe1Group.destroyEach();

    score=0;

    bird.visible=false
    end.visible=true;
    
    if(mousePressedOver(restart)){
      
      
      gameState = LEVEL1 
      bird.visible=true;
    end.visible=false;
      bird.y=220;
       
       }
    
  }else if(gameState===GAPE){

    //console.log("win")
    gape.visible=true
    coinGroup.destroyEach();
    pipe2Group.destroyEach();
    pipe1Group.destroyEach();
  
    //start2.visible=true
    
    start1.width=80;
    start1.height=80;
    start1.x=350;
    start1.y=380;
    
    start3.width=80;
    start3.height=80;
    start3.x=455;
    start3.y=370;
    
    
    if(mousePressedOver(start3)){
      
      gape.visible=false
      bird.visible=true;
      bird.y=220;
      score=0
      gameState=LEVEL2
    }

  }else if(gameState===LEVEL2){
    
    //console.log("hi")
          bird.velocityY= bird.velocityY+1;  

    if(keyWentDown("space")||(mousePressedOver(bacin)) ){

  bird.velocityY=-6;
    
  }
    
    badBird()
    
    if (time===0){
      
      gameState=WIN 
      console.log("mmmm")
      
    }
    
    if (bird.isTouching(birdGroup)||
      bird.isTouching(topp)||bird.isTouching(bott)){

      gameState =END2
    
    }
    
    fill("black")
   textSize(20); 
  text("time:"+time,600,25); 
    
  if (frameCount % 30==0){

    time = time-1
  
  }
    
  }else if(gameState===WIN){
    
    
    birdGroup.destroyEach();

    
    win.visible=true
    //level.visible=true
  //console.log("win")
    
    /*if (mousePressedOver(level)){

      gameState=RULE 
     win.visible=false
    level.visible=false
    }*/
  
  }else if(gameState===END2){
    
    birdGroup.destroyEach();
    pipe2Group.destroyEach();
    pipe1Group.destroyEach();

    time=30;

    bird.visible=false
    end.visible=true;
    
    if(mousePressedOver(restart)){
      
      time=30
      gameState = LEVEL2;
      bird.visible=true;
    end.visible=false;
      bird.y=220;
       
       }
    
  }
  
   fill("white")
   textSize(20);
  text("flappy bird 2.0",10,20)
     textSize(35);

  text("-R.Sree Yuvanash",400,430)

  
}


function badBird(){
  
  
    if (frameCount % 40 === 0) {
    
    var birde =createSprite(750,random(50,400),30,30)
    birde.velocityX=-20;
    //birde.debug=true;
    birde.lifetime = 150;
   birdGroup.add(birde)

    birde.scale=0.2;
    
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: birde.addImage(b11);
              break;
      case 2: birde.addImage(b22);
              break;
      case 3: birde.addImage(b33);
              break;
      case 4: birde.addImage(b44);
              break;
      case 5: birde.addImage(b55);
              break; 
      case 6: birde.addImage(b66);
              break; 
              
      default: break;
    }
}  
}

function coinspam(){
  
  if (frameCount % 200 === 0) {
  
    var coin=createSprite(750,random(75,350))  
    coin.velocityX=random(-7,-15);
    
       var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: coin.addImage(coin1);
              break;
      case 2: coin.addImage(coin2);
              break;
      case 3: coin.addImage(coin3);
              break;
   
    }
    coin.scale=0.5;
    coin.lifeTime=100;
    coinGroup.add(coin);
    
    }
  
  
}

function blockspam(){
    
  if (frameCount % 145 === 0) {
    
    var block =createSprite(750,30,30,30)
    block.velocityX=-20;
   // block.debug=true;
    
    block.scale=3;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: block.addImage(b1);
              break;
      case 2: block.addImage(b2);
              break;
      case 3: block.addImage(b3);
              break;
   
      default: break;
    }
   pipe1Group.add(block)
   block.lifeTime=100;

}  
  }

function blockspam2(){
    
  if (frameCount % 200 === 0) {
    
    var block1 =createSprite(750,400,30,30)
    block1.velocityX=-20;
    //block1.debug=true;
    block1.scale=3;
    
    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: block1.addImage(b4);
              break;
      case 2: block1.addImage(b5);
              break;
      case 3: block1.addImage(b6);
              break;
   
    }
    block1.lifeTime=100;
    pipe2Group.add(block1);
}  
  }


