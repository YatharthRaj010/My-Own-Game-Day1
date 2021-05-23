var path,pathImageStart,pathImagePlay

var gameState="start";

var startButton, startButtonImage;

var backgroundImage;

var playerCar,playerCarImage;

function preload(){

    pathImageStart = loadImage("images/start.jpg")

    startButtonImage = loadImage("images/STARt_BUTTON.png")

    pathImagePlay = loadImage("images/ROAD.png")
    backgroundImage= loadImage("images/FOREST_BACKGROUND.jpg")
    playerCarImage= loadImage("images/PC_CAR.png")
}

function setup(){
    createCanvas(1200,700)

    path= createSprite(600,350);
    path.addImage(pathImageStart);
    path.scale=1.9

    startButton= createSprite(600,630)
    startButton.addImage(startButtonImage);
    startButton.visible=false;
    startButton.scale=0.2

   



 

    
}

function draw(){
    background("black");

    if (gameState==="start"){
        drawSprites();

        textSize(80);
        fill("red");
        text("TITLE",550, 150);

        startButton.visible=true;

        if(mousePressedOver(startButton)){
            gameState="play";

         }
    
    }

    if(gameState==="play"){
        
        background(backgroundImage)


        path.addImage(pathImagePlay);
        path.scale=1;
        path.velocityY=4;

        if(path.y>500){
            path.y=350
        }

        startButton.visible=false;

        playerCar= createSprite(330,620)
        playerCar.addImage(playerCarImage);
        playerCar.scale=0.2
    

        

        

        drawSprites();
    }

    
}