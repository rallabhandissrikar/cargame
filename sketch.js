var playercar;
var opppositecar1;
var opppositecar2;
var playercarimage;
var backimg;
var gameState = 0;
var canvas;
var divr;
var h1e;
var button;
var divr2;
var playerLifes = 5;
var l1;
var l2;
var l3;
var l4;
var l5;
var playerLife = 100;
var lifeDrain = 0.5;
var playerScore = 0;
var scorei = 0.5;
var scoreElement;
var endingWords;
var reloadButton;
function preload() {
  playercarimage =loadImage("mainplayer.png");
  backimg = loadImage("download.png");
}
function setup() {
  canvas = createCanvas(300, 400);
  canvas.hide();
  playercar = new car();
  opppositecar1 = new opponent(1);
  opppositecar2 = new opponent(2);
  divr = select(".open");
  h1e = createElement("h1", "CAR GAME");
  h1e.parent(divr);
  button = createButton("START GAME");
  button.parent(divr)
  divr.hide();
  button.hide();
  
  h1e.hide();
  divr2 = select(".life");

  divr2.hide();
  l1 = select("#l1");
  l2 = select("#l2");
  l3 = select("#l3");
  l4 = select("#l4");
  l5 = select("#l5");
  scoreElement = select("#score");

  lifeDiv = select('.lifebarlife');
  button.mousePressed(() => {
    gameState = 1;
  })

  endingWords = createElement("h1");
  endingWords.hide();
  reloadButton = createButton("Play Again");
  reloadButton.hide();

  reloadButton.mousePressed(() => {
    gameState = 0;
  })

  endingWords.style("color:white");
  endingWords.style("margin-right : 10px");

}

function draw() {
  background("red");
  if (gameState === 0) {
    divr2.hide();
    divr.show();
    button.show();
    h1e.show();
    reloadButton.hide();
    endingWords.hide();
    opppositecar1.x = random(20, width - 20);
    opppositecar1.y = random(-100, 0);
    opppositecar1.width = 40;
    opppositecar1.height = 80;
    opppositecar1.speedRun = 10;

    opppositecar2.x = random(20, width - 20);
    opppositecar2.y = random(-100, 0);
    opppositecar2.width = 40;
    opppositecar2.height = 80;
    opppositecar2.speedRun = 10;

    playerLife = 100;
    playerLifes = 5;
    playercar.x = width/2;
    playercar.y = 250;
    playerScore = 0;
    lifeDrain = 0.5;
    scorei = 0.5;


  }else if (gameState === 1) {

    divr.hide();
    divr2.show();
    canvas.show();
    imageMode(CENTER);
    image(backimg, width/2, height/2, width, height);
    playercar.show();
    opppositecar1.move();
    opppositecar2.move();
    opppositecar1.show();
    opppositecar2.show();
    
  

  if (carHit1() || carHit2()) {
    playerLife -= lifeDrain;
  }
  reloadButton.hide();
  endingWords.hide();
  if (playerLife <= 0) {
    playerLife = 100;
    playerLifes -= 1;
  }
  if (playerLifes === 5) {
    l1.show();
    l2.show();
    l3.show();
    l4.show();
    l5.show();
  }else if (playerLifes === 4) {
    l1.show();
    l2.show();
    l3.show();
    l4.show();
    l5.hide();
  }else if (playerLifes === 3) {
    l1.show();
    l2.show();
    l3.show();
    l4.hide();
    l5.hide();
  }else if (playerLifes === 2) {
    l1.show();
    l2.show();
    l3.hide();
    l4.hide();
    l5.hide();
  }else if (playerLifes === 1) {
    l1.show();
    l2.hide();
    l3.hide();
    l4.hide();
    l5.hide();
  }else if (playerLifes === 0){
    l1.hide();
    l2.hide();
    l3.hide();
    l4.hide();
    l5.hide();
  }
  if (frameCount % 800 == 0 ) {
    lifeDrain += 0.5;
    scorei += 1
  }
  
  if (frameCount % 10 == 0) {
    playerScore += scorei
  }

  scoreElement.html("Score: " + int(playerScore));
  lifeDiv.style('width:' + (playerLife + '%' ));
  if (playerLifes === 0) {
    gameState = 2;
  }
}else if (gameState === 2) {
  canvas.hide();
  endingWords.show()
  endingWords.html("Score: " + int(playerScore));
  reloadButton.show();
  reloadButton.style("width:100px");
  reloadButton.style("height:40px");
  divr.hide();
  divr2.hide();

}
}

function keyPressed() {
  if (keyCode === 38) {
    playercar.carMove("up");
  }else if (keyCode === 40) {
    playercar.carMove("down");
  }else if (keyCode === 37) {
    playercar.carMove("left");
  }else if (keyCode === 39) {
    playercar.carMove("right");
  }
}


function carHit1() {
  if (playercar.x - 20 < opppositecar1.x + 20 
    && playercar.x + 20 > opppositecar1.x
    && playercar.y + 40 > opppositecar1.y - 40
    && playercar.y - 40 < opppositecar1.y + 40) {
      return true;    
  }
}

function carHit2(params) {
  if (playercar.x - 20 < opppositecar2.x + 20 
    && playercar.x + 20 > opppositecar2.x
    && playercar.y + 40 > opppositecar2.y - 40
    && playercar.y - 40 < opppositecar2.y + 40) {
      return true;    
  }
}