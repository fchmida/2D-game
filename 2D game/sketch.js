/*
	The Game Project Part 4 - Character Interaction
*/

var gameChar_x;
var gameChar_y;
var floorPos_y;

var canyons;
var collectables;
var flagPole;

//interaction variables
var isLeft;
var isRight;
var isFalling;
var isPlummeting;

var trees_x;
var treesPos_y;

var clouds;

var mountains;

var gameOver;
var levelComplete;

var gameScore;

function setup() {
  createCanvas(1024, 576);
  floorPos_y = (height * 3) / 4;
  gameChar_x = width / 2;
  gameChar_y = floorPos_y;

  collectables = [
    { x_pos: 750, y_pos: floorPos_y - 32, isFound: false },
    { x_pos: 1300, y_pos: floorPos_y - 32, isFound: false },
    { x_pos: 1760, y_pos: floorPos_y - 32, isFound: false },
    { x_pos: 2140, y_pos: floorPos_y - 32, isFound: false },
    { x_pos: 2567, y_pos: floorPos_y - 32, isFound: false },
    { x_pos: 2890, y_pos: floorPos_y - 32, isFound: false },
    { x_pos: 3800, y_pos: floorPos_y - 32, isFound: false },
  ];

  flagPole = { x_pos: 4000, y_pos: 430, isReached: false };

  canyons = [
    { x_pos: 200, width: 135 },
    { x_pos: 900, width: 140 },
    { x_pos: 1600, width: 135 },
    { x_pos: 2200, width: 140 },
    { x_pos: 3000, width: 135 },
    { x_pos: 3600, width: 140 },
  ];

  trees_x = [100, 710, 1120, 1870, 2480, 2960, 3350, 4100];
  treePos_y = floorPos_y;

  clouds = [
    { x_pos: 200, y_pos: 160, size: 50 },
    { x_pos: 600, y_pos: 160, size: 50 },
    { x_pos: 1000, y_pos: 160, size: 50 },
    { x_pos: 1400, y_pos: 160, size: 50 },
    { x_pos: 1800, y_pos: 160, size: 50 },
    { x_pos: 2200, y_pos: 160, size: 50 },
    { x_pos: 2600, y_pos: 160, size: 50 },
    { x_pos: 3000, y_pos: 160, size: 50 },
    { x_pos: 3400, y_pos: 160, size: 50 },
    { x_pos: 3800, y_pos: 160, size: 50 },
  ];

  mountains = [
    { x_pos: 400, y_pos: 435 },
    { x_pos: 1200, y_pos: 435 },
    { x_pos: 1800, y_pos: 435 },
    { x_pos: 2500, y_pos: 435 },
    { x_pos: 3200, y_pos: 435 },
  ];

  isLeft = false;
  isRight = false;
  isFalling = false;
  isPlummeting = false;

  gameOver = false;
  levelComplete = false;

  gameScore = 0;
}

function draw() {
  ///////////DRAWING CODE//////////

  background(130, 162, 191); //fill the sky blue

  noStroke();
  fill(142, 191, 130);
  rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground

  //gamescore drawing
  fill(0);
  stroke(255);
  strokeWeight(3);
  textSize(25);
  text("Game Score: " + gameScore, 10, 30);

  noStroke();
  noFill();

  //push
  push();
  translate(-gameChar_x + 600, 0);

  //draw the canyon
  for (var i = 0; i < canyons.length; i++) {
    noStroke();
    fill(97, 79, 78);
    rect(canyons[i].x_pos, floorPos_y, canyons[i].width, height - floorPos_y);
  }

  //collectables
  for (var i = 0; i < collectables.length; i++) {
    if (!collectables[i].isFound) {
      strokeWeight(1);
      stroke(0);
      fill(191, 240, 255);
      triangle(
        collectables[i].x_pos,
        collectables[i].y_pos,
        collectables[i].x_pos + 15,
        collectables[i].y_pos - 25,
        collectables[i].x_pos + 30,
        collectables[i].y_pos
      );
      //upside down triangles
      fill(191, 240, 255);
      triangle(
        collectables[i].x_pos + 15,
        collectables[i].y_pos - 25,
        collectables[i].x_pos + 30,
        collectables[i].y_pos,
        collectables[i].x_pos + 45,
        collectables[i].y_pos - 25
      );
      fill(191, 240, 255);
      triangle(
        collectables[i].x_pos + 15,
        collectables[i].y_pos - 25,
        collectables[i].x_pos,
        collectables[i].y_pos,
        collectables[i].x_pos - 15,
        collectables[i].y_pos - 25
      );
      //side triangles
      fill(167, 216, 232);
      triangle(
        collectables[i].x_pos + 30,
        collectables[i].y_pos,
        collectables[i].x_pos + 45,
        collectables[i].y_pos - 25,
        collectables[i].x_pos + 55,
        collectables[i].y_pos
      );
      fill(191, 240, 255);
      triangle(
        collectables[i].x_pos - 25,
        collectables[i].y_pos,
        collectables[i].x_pos - 15,
        collectables[i].y_pos - 25,
        collectables[i].x_pos,
        collectables[i].y_pos
      );
      //bottom triangles
      fill(191, 240, 255);
      triangle(
        collectables[i].x_pos,
        collectables[i].y_pos,
        collectables[i].x_pos + 15,
        collectables[i].y_pos + 32,
        collectables[i].x_pos + 30,
        collectables[i].y_pos
      );
      fill(167, 216, 232);
      triangle(
        collectables[i].x_pos + 30,
        collectables[i].y_pos,
        collectables[i].x_pos + 15,
        collectables[i].y_pos + 32,
        collectables[i].x_pos + 55,
        collectables[i].y_pos
      );
      fill(191, 240, 255);
      triangle(
        collectables[i].x_pos - 25,
        collectables[i].y_pos,
        collectables[i].x_pos + 15,
        collectables[i].y_pos + 32,
        collectables[i].x_pos,
        collectables[i].y_pos
      );
    }
  }

  noStroke();

  //move left and right and jump
  if (gameChar_x == "a") {
    isLeft = true;
  }

  if (gameChar_x == "d") {
    isRight = true;
  }

  if (gameChar_y == "w") {
    gameChar_y < floorPos_y;
  }

  //clouds
  for (var i = 0; i < clouds.length; i++) {
    noStroke();
    fill(196, 195, 194);
    ellipse(clouds[i].x_pos, clouds[i].y_pos, 50, clouds[i].size);
    ellipse(clouds[i].x_pos + 30, clouds[i].y_pos, 50, clouds[i].size);
    ellipse(clouds[i].x_pos + 20, clouds[i].y_pos - 25, 50, clouds[i].size);
    //cloud shading
    fill(176, 176, 176);
    ellipse(clouds[i].x_pos + 60, clouds[i].y_pos, 50, clouds[i].size);
    ellipse(clouds[i].x_pos + 40, clouds[i].y_pos - 25, 50, clouds[i].size);

    fill(196, 195, 194);
    ellipse(clouds[i].x_pos + 400, clouds[i].y_pos, 50, clouds[i].size);
    ellipse(clouds[i].x_pos + 430, clouds[i].y_pos, 50, clouds[i].size);
    ellipse(clouds[i].x_pos + 420, clouds[i].y_pos - 25, 50, clouds[i].size);
    //cloud shading
    fill(176, 176, 176);
    ellipse(clouds[i].x_pos + 460, clouds[i].y_pos, 50, clouds[i].size);
    ellipse(clouds[i].x_pos + 440, clouds[i].y_pos - 25, 50, clouds[i].size);
  }

  //mountains
  for (var i = 0; i < mountains.length; i++) {
    noStroke();
    fill(64, 61, 61);
    triangle(
      mountains[i].x_pos,
      mountains[i].y_pos,
      mountains[i].x_pos + 125,
      mountains[i].y_pos - 285,
      mountains[i].x_pos + 250,
      mountains[i].y_pos
    );
    fill(255, 255, 255);
    triangle(
      mountains[i].x_pos + 81,
      mountains[i].y_pos - 185,
      mountains[i].x_pos + 125,
      mountains[i].y_pos - 285,
      mountains[i].x_pos + 170,
      mountains[i].y_pos - 185
    );
  }

  //trees
  for (var i = 0; i < trees_x.length; i++) {
    //leaves
    fill(110, 148, 99);
    ellipse(trees_x[i] + 5, treePos_y - 115, 100);
    //tree trunk
    fill(117, 110, 109);
    rect(trees_x[i], treePos_y - 80, 10, 83);
  }

  //flagpole interaction
  if (flagPole.isReached) {
    //flag raised
    //pole
    noStroke();
    strokeWeight(2);
    stroke(0);
    line(flagPole.x_pos, flagPole.y_pos, flagPole.x_pos, flagPole.y_pos - 310);
    //flag
    fill(209, 209, 209);
    rect(flagPole.x_pos - 100, flagPole.y_pos - 298, 100, 50);

    //level complete graphics
    fill(0, 213, 255);
    stroke(255);
    strokeWeight(5);
    textSize(80);
    text("LEVEL COMPLETE", gameChar_x - 400, floorPos_y - 100);
    keyPressed = false;
    isRight = false;
    isLeft = false;

    noStroke();
    noFill();
  } else {
    //flag down
    flagPole.isReached = false;
    //pole
    noStroke();
    strokeWeight(2);
    stroke(0);
    line(flagPole.x_pos, flagPole.y_pos, flagPole.x_pos, flagPole.y_pos - 310);
    //flag
    fill(209, 209, 209);
    rect(flagPole.x_pos - 100, flagPole.y_pos - 98, 100, 50);
  }

  noStroke();

  //the game character
  if (isLeft && isFalling) {
    // add your jumping-left code

    //body
    fill(255, 213, 0);
    ellipse(gameChar_x - 1, gameChar_y - 30, 35);
    //head
    fill(255, 213, 0);
    ellipse(gameChar_x - 8, gameChar_y - 50, 25);
    //beak
    fill(255, 174, 0);
    triangle(
      gameChar_x - 15,
      gameChar_y - 45,
      gameChar_x - 15,
      gameChar_y - 52,
      gameChar_x - 23,
      gameChar_y - 48
    );
    //eyes
    fill(255, 255, 255);
    ellipse(gameChar_x - 10, gameChar_y - 53, 5);
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 53, 3);
    //legs
    stroke(0);
    line(gameChar_x + 1, gameChar_y - 13, gameChar_x + 5, gameChar_y - 21);
    //wing
    stroke(255, 174, 0);
    line(gameChar_x + 10, gameChar_y - 42, gameChar_x, gameChar_y - 37);
    line(gameChar_x + 10, gameChar_y - 42, gameChar_x, gameChar_y - 27);
  } else if (isRight && isFalling) {
    // add your jumping-right code

    //body
    fill(255, 213, 0);
    ellipse(gameChar_x - 1, gameChar_y - 30, 35);
    //head
    fill(255, 213, 0);
    ellipse(gameChar_x + 8, gameChar_y - 50, 25);
    //beak
    fill(255, 174, 0);
    triangle(
      gameChar_x + 15,
      gameChar_y - 45,
      gameChar_x + 15,
      gameChar_y - 52,
      gameChar_x + 23,
      gameChar_y - 48
    );
    //eyes
    fill(255, 255, 255);
    ellipse(gameChar_x + 10, gameChar_y - 53, 5);
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 53, 3);
    //legs
    stroke(0);
    line(gameChar_x + 1, gameChar_y - 13, gameChar_x - 5, gameChar_y - 21);
    //wing
    stroke(255, 174, 0);
    line(gameChar_x - 10, gameChar_y - 42, gameChar_x, gameChar_y - 37);
    line(gameChar_x - 10, gameChar_y - 42, gameChar_x, gameChar_y - 27);
  } else if (isLeft) {
    // add your walking left code

    //body
    fill(255, 213, 0);
    ellipse(gameChar_x - 1, gameChar_y - 30, 35);
    //head
    fill(255, 213, 0);
    ellipse(gameChar_x - 8, gameChar_y - 50, 25);
    //beak
    fill(255, 174, 0);
    triangle(
      gameChar_x - 15,
      gameChar_y - 45,
      gameChar_x - 15,
      gameChar_y - 52,
      gameChar_x - 23,
      gameChar_y - 48
    );
    //eyes
    fill(255, 255, 255);
    ellipse(gameChar_x - 10, gameChar_y - 53, 5);
    fill(0);
    ellipse(gameChar_x - 10, gameChar_y - 53, 3);
    //legs
    stroke(0);
    line(gameChar_x + 1, gameChar_y - 13, gameChar_x + 1, gameChar_y - 7);
    //wing
    stroke(255, 174, 0);
    line(gameChar_x + 10, gameChar_y - 30, gameChar_x, gameChar_y - 37);
    line(gameChar_x + 10, gameChar_y - 30, gameChar_x, gameChar_y - 27);
  } else if (isRight) {
    // add your walking right code

    //body
    fill(255, 213, 0);
    ellipse(gameChar_x - 1, gameChar_y - 30, 35);
    //head
    fill(255, 213, 0);
    ellipse(gameChar_x + 8, gameChar_y - 50, 25);
    //beak
    fill(255, 174, 0);
    triangle(
      gameChar_x + 15,
      gameChar_y - 45,
      gameChar_x + 15,
      gameChar_y - 52,
      gameChar_x + 23,
      gameChar_y - 48
    );
    //eyes
    fill(255, 255, 255);
    ellipse(gameChar_x + 10, gameChar_y - 53, 5);
    fill(0);
    ellipse(gameChar_x + 10, gameChar_y - 53, 3);
    //legs
    stroke(0);
    line(gameChar_x + 1, gameChar_y - 13, gameChar_x + 1, gameChar_y - 7);
    //wing
    stroke(255, 174, 0);
    line(gameChar_x - 10, gameChar_y - 30, gameChar_x, gameChar_y - 37);
    line(gameChar_x - 10, gameChar_y - 30, gameChar_x, gameChar_y - 27);
  } else if (isFalling) {
    // add your jumping facing forwards code

    //body
    fill(255, 213, 0);
    ellipse(gameChar_x - 1, gameChar_y - 30, 35);
    //head
    fill(255, 213, 0);
    ellipse(gameChar_x, gameChar_y - 50, 25);
    //beak
    fill(255, 174, 0);
    triangle(
      gameChar_x - 5,
      gameChar_y - 50,
      gameChar_x,
      gameChar_y - 45,
      gameChar_x + 5,
      gameChar_y - 50
    );
    //eyes
    fill(255, 255, 255);
    ellipse(gameChar_x - 4, gameChar_y - 53, 5);
    ellipse(gameChar_x + 4, gameChar_y - 53, 5);
    fill(0);
    ellipse(gameChar_x - 4, gameChar_y - 53, 3);
    ellipse(gameChar_x + 4, gameChar_y - 53, 3);
    //legs
    stroke(0);
    line(gameChar_x + 3, gameChar_y - 13, gameChar_x + 8, gameChar_y - 7);
    line(gameChar_x - 4, gameChar_y - 13, gameChar_x - 9, gameChar_y - 7);
    //wings
    stroke(255, 174, 0);
    //right wing
    line(gameChar_x + 16, gameChar_y - 42, gameChar_x + 8, gameChar_y - 37);
    line(gameChar_x + 16, gameChar_y - 42, gameChar_x + 8, gameChar_y - 27);
    //left wing
    line(gameChar_x - 18, gameChar_y - 42, gameChar_x - 10, gameChar_y - 37);
    line(gameChar_x - 18, gameChar_y - 42, gameChar_x - 10, gameChar_y - 27);
  } else {
    // add your standing front facing code

    //body
    fill(255, 213, 0);
    ellipse(gameChar_x - 1, gameChar_y - 30, 35);
    //head
    fill(255, 213, 0);
    ellipse(gameChar_x, gameChar_y - 50, 25);
    //beak
    fill(255, 174, 0);
    triangle(
      gameChar_x - 5,
      gameChar_y - 50,
      gameChar_x,
      gameChar_y - 45,
      gameChar_x + 5,
      gameChar_y - 50
    );
    //eyes
    fill(255, 255, 255);
    ellipse(gameChar_x - 4, gameChar_y - 53, 5);
    ellipse(gameChar_x + 4, gameChar_y - 53, 5);
    fill(0);
    ellipse(gameChar_x - 4, gameChar_y - 53, 3);
    ellipse(gameChar_x + 4, gameChar_y - 53, 3);
    //legs
    stroke(0);
    line(gameChar_x + 3, gameChar_y - 13, gameChar_x + 3, gameChar_y - 7);
    line(gameChar_x - 4, gameChar_y - 13, gameChar_x - 4, gameChar_y - 7);
    //wings
    stroke(255, 174, 0);
    //right wing
    line(gameChar_x + 16, gameChar_y - 30, gameChar_x + 8, gameChar_y - 37);
    line(gameChar_x + 16, gameChar_y - 30, gameChar_x + 8, gameChar_y - 27);
    //left wing
    line(gameChar_x - 18, gameChar_y - 30, gameChar_x - 10, gameChar_y - 37);
    line(gameChar_x - 18, gameChar_y - 30, gameChar_x - 10, gameChar_y - 27);
    noStroke();
  }

  pop();

  ///////////INTERACTION CODE//////////
  //Put conditional statements to move the game character below here

  if (isLeft) {
    gameChar_x -= 5;
  } else if (isRight) {
    gameChar_x += 5;
  }

  if (gameChar_y < floorPos_y) {
    gameChar_y += 3;
    isFalling = true;
  } else {
    isFalling = false;
  }

  //collectable item interaction
  for (var i = 0; i < collectables.length; i++) {
    d = dist(
      gameChar_x,
      gameChar_y,
      collectables[i].x_pos,
      collectables[i].y_pos
    );
    if (d <= 60) {
      collectables[i].isFound = true;
      gameScore++;
    }
    
  }
    
  //flagpole interaction
  flagPole_dis = dist(gameChar_x, gameChar_y, flagPole.x_pos, flagPole.y_pos); //distance between game character and flagpole
  if (flagPole_dis <= 4.242640687119286) {
    flagPole.isReached = true;
    levelComplete = true;
  }

  //canyons interaction
  for (var i = 0; i < canyons.length; i++) {
    if (
      gameChar_x > canyons[i].x_pos &&
      gameChar_x < canyons[i].x_pos + canyons[i].width &&
      gameChar_y >= floorPos_y
    ) {
      isPlummeting = true;
    }

    if (isPlummeting == true) {
      gameChar_y += 2;
      keyPressed = false;
      isFalling = true;
      isRight = false;
      isLeft = false;
      //game over graphics
      gameOver = true;
      fill(255, 140, 0);
      stroke(255);
      strokeWeight(5);
      textSize(100);
      text("GAME OVER", 220, 240, CENTER);
      keyPressed = false;
    }
    noStroke();
    noFill();
  }
}

function keyPressed() {
  // if statements to control the animation of the character when
  // keys are pressed.

  //open up the console to see how these work
  console.log("keyPressed: " + key);
  console.log("keyPressed: " + keyCode);
    
  if (key == "a" && !isPlummeting) {
    isLeft = true;
  } else if (key == "d" && !isPlummeting) {
    isRight = true;
  }

  //prevents double jumping
  if (key == "w" && !isPlummeting) {
    if (isFalling == false) {
      gameChar_y -= 100;
    }
  }

  //gameover and level complete
  if (gameOver == true || levelComplete == true) {
    KeyPressed = false;
    isRight = false;
    isLeft = false;
  }
}

function keyReleased() {
  // if statements to control the animation of the character when
  // keys are released.

  console.log("keyReleased: " + key);
  console.log("keyReleased: " + keyCode);

  if (key == "a") {
    isLeft = false;
  } else if (key == "d") {
    isRight = false;
  }
}
