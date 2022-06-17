canvas = document.getElementById('Canvas');
ctx = canvas.getContext=("2d");

greencar_width = 50;
greencar_height = 100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

greencar__x = 10;
greencar__y = 220;

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_imgTag (parkingLot.jpg);

	greencar_imgTag = new Image();
	background_imgTag.onload = uploadgreencar;
	greencar_imgTagsrc
}

function uploadBackground() {
	ctx.drawImage(background_imgTag,0,0,canvas.width ,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag,greencar__x,greencar__y,greencar_height,greencar_width);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(greencar__y >=0)
	{
		greencar__y = greencar__y -10;
		uploadBackground();
		uploadBackground();
	}
}

function down()
{
	{
		if(greencar__y >=0)
		{
			greencar__y = greencar__y + 10;
			uploadBackground();
			uploadBackground();
		}
	}
}

function left()
{
	{
		if(greencar__x >=0)
		{
			greencar__x = greencar__x -10;
			uploadBackground();
			uploadBackground();
		}
	}
}

function right()
{
	{
		if(greencar__x >=0)
		{
			greencar__x = greencar__x + 10;
			uploadBackground();
			uploadBackground();
		}
	}
}
