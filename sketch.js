// Sprites
var wall, wall_2;
var speed, weight, thickness;
var bul1, bul2, bul3; 
var bl1, bl2, bl3;

function setup() {
  createCanvas(1600,400);

  // Defining Speed, Weight And Thickness
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  // Bullets
  bul1 = createSprite(50, 200, 50, 40);
  bul2 = createSprite(50, 50, 50, 40);
  bul3 = createSprite(50, 350, 50, 40);

  // Walls
  wall = createSprite(1500, 300, width*2, 10);
  wall_2 = createSprite(1500, 130, width*2, 10);

  // Blocks
  bl1 = createSprite(1500, 200, 40, 50);
  bl2 = createSprite(1500, 50, 40, 50);
  bl3 = createSprite(1500, 350, 40, 50);

  // Bullet Velocity
  bul1.velocityX = speed / 6;
  bul2.velocityX = speed / 5;
  bul3.velocityX = speed / 4.3;

  // Wall Colors
  wall.shapeColor = "white";
  wall_2.shapeColor = "white";

  // Block Colors
  bl1.shapeColor = "white";
  bl2.shapeColor = "white";
  bl3.shapeColor = "white";

  // Bullet Colors
  bul1.shapeColor = "blue";
  bul2.shapeColor = "green";
  bul3.shapeColor = "blue";

}

function draw() {
  background(0,0,0);

  // Bullet 1
  if(hasCollided(bul1, bl1)) {

    bul1.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness);

    if(damage > 10) {

      bl1.shapeColor = color(255, 0, 0); 
    }

    if(damage < 10) {

      bl1.shapeColor = color(0, 255, 0);
    }
  }

  // Bullet 2
  if(hasCollided(bul2, bl2)) {

    bul2.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness);

    if(damage > 10) {

      bl2.shapeColor = color(255, 0, 0); 
    }

    if(damage < 10) {

      bl2.shapeColor = color(0, 255, 0);
    }
  }

  // Bullet 3
  if(hasCollided(bul3, bl3)) {

    bul3.velocityX = 0;
    var damage = 0.5 * weight * speed * speed / (thickness);

    if(damage > 10) {

      bl3.shapeColor = color(255, 0, 0); 
    }

    if(damage < 10) {

      bl3.shapeColor = color(0, 255, 0);
    }
  }

  drawSprites();
}

// Block 1 
function hasCollided(lbul1, lbl1) {

    bul1RightEdge = lbul1.x + lbul1.width;
    bl1LeftEdge = lbl1.x;
    if(bul1RightEdge >= bl1LeftEdge)
    {
      return true
    }

    return false;
    
}

// Block 2 
function hasCollided_1(lbul2, lbl2) {

    bul2RightEdge = lbul2.x + lbul2.width;
    bl2LeftEdge = lbl2.x;
    if(bul2RightEdge >= bl2LeftEdge)
    {
      return true
    }

    return false;
    
}

// Block 3 
function hasCollided_2(lbul3, lbl3) {

    bul3RightEdge = lbul3.x + lbul3.width;
    bl3LeftEdge = lbl3.x;
    if(bul3RightEdge >= bl3LeftEdge)
    {
      return true
    }

    return false;
    
}