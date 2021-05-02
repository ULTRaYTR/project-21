var canvas;
var music;
var block1,block2,block3,block4;
var ball,edges;

function preload(){
    music = loadSound("music.mp3");


}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1=createSprite(0,580,360,35)
   block1.shapeColor = "green"

   block2=createSprite(295,580,220,35)
   block2.shapeColor = "pink"

   block3=createSprite(515,580,210,35)
   block3=shapeColor = "yellow"

   block4=createSprite(740,580,225,35)
   block4.shapeColor = "blue"

    //create box sprite and give velocity
 ball = createSprite(random(10,780),100,20,20)
 ball.shapeColor = "white"
 ball.velocityX=4
 ball.velocityY=9
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
  edges=createEdgeSprites()
  ball.bounceOff(edges)

    //add condition to check if box touching surface and make it box

    if (istouch(block1,ball) && bounceback(ball,block1))
    {
     ball.shapeColor = "green"
     music.play()

    }

    if (istouch(block3,ball))
    {
      ball.shapeColor = "yellow"
      ball.velocityX = 0
      ball.velocityY = 0
      music.stop()

    }

     if (istouch(block2,ball) && bounceback(ball,block2))
    {
     ball.shapeColor = "pink"
     music.play()

    }

    if (istouch(block4,ball) && bounceback(ball,block4))
    {
     ball.shapeColor = "blue"
    

    }


 drawSprites()

}
