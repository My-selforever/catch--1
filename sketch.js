
var good = createGroup();
var bad = createGroup();
var basket;
function setup() {
  createCanvas(400,400);
  basket = createSprite(World.mouseX,380,100,50);
}

function draw() {
  background("lightBlue");
  basket.x = World.mouseX;  
  drawSprites();
}