

var bg, bg1

var spaceship, spaceImage, meteorite, meteoriteImage

var play, bomb, bombImage, bombgrp, metgrp,boom,score=0

function preload() {
	bg = loadImage("back.png")
	spaceImage = loadImage("spaceship.png")
	meteoriteImage = loadImage("meteorite3.gif")
	bombImage = loadImage("bomb.jpg")
}

function setup() {
	createCanvas(1100, 500);

	bg1 = createSprite(500, 250, 50, 50)
	bg1.addImage(bg)
	bg.scale = 0.5

	spaceship = createSprite(500, 450, 50, 50)
	spaceship.addImage(spaceImage)
	spaceship.scale = 0.3

	bombgrp = new Group()
	metgrp = new Group()



}

function draw() {

	background("white");
	
	shootbombs()
	spwanMeteors()

	if (keyDown("RIGHT_ARROW")) {
		spaceship.x = spaceship.x + 5
	}
	if (keyDown("LEFT_ARROW")) {
		spaceship.x = spaceship.x - 5
	}

	if(keyWentDown("space"))
	{
		bomb.visible=true;
		bomb.velocityY = -6
	}

	if(bombgrp.isTouching(metgrp))
	{
		score=score+1
		
		meteorite.destroy()
	}

	



	drawSprites()

	textSize(20)
	fill("white")
	text("Score: "+score,100,50)
}

function spwanMeteors() {
	if (frameCount % 80 === 0) {
		var rand = Math.round(random(200, 950))
		meteorite = createSprite(rand, -10, 50, 50)
		meteorite.velocityY = 3
		meteorite.addImage(meteoriteImage)
		meteorite.scale = 0.3
		metgrp.add(meteorite)
	}
}

function shootbombs()
{
	bomb = createSprite(200,200,50,50)
	bomb.addImage(bombImage)
	bomb.scale = 0.04
	bomb.x = spaceship.x;
	bomb.y = spaceship.y;
	bomb.visible = false;
	bomb.depth = spaceship.depth + 1
	bombgrp.add(bomb)
	if(bomb.y < 1)
		{
			bomb.destroy();
		}
}