var bullet,wall,thickness;
var speed,weight;

function setup() {
  var canvas = createCanvas(1600,400);
  speed=random(223,32);
  weight=random(30,52);
  thickness=random(22,83)
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  bullet.velocityX = speed;

}

function hasCollided(bullet, lwall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }

  return false;


}

function draw() {
  background("black");  

  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
 
  drawSprites();
}