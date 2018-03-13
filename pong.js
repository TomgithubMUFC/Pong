var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 350;
var paddle1x = 60;
var paddle2x = 1140;
var paddle1y = canvas.height - 350;
var paddle2y = canvas.height - 350;
var paddleWidth = 10;
var paddleHeight = 70;
var up1Pressed = false;
var up2Pressed = false;
var down1Pressed = false;
var down2Pressed = false;

// >>>>>>>>>>>>>>>>>>>>>> SCREEN MENU
function drawStartMenu() {

    ctx.font = "70px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Pong", canvas.width / 2, canvas.height / 4);


    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Start", canvas.width / 2, canvas.height / 2);

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("1 Player", canvas.width / 2, canvas.height / 2);


}

function drawPongStartScreen() {
    drawStartMenu();

}

function drawScore() {}

// >>>>>>>>>>>>>>>>>>>>>>>> GAME 
document.addEventListener("keydown", p1DownHandler, false);
document.addEventListener("keyup", p1UpHandler, false); 
document.addEventListener("keydown", p2DownHandler, false);
document.addEventListener("keyup", p2UpHandler, false); 


function p1DownHandler(e) {
    if (e.keyCode == 38) {
        up1Pressed = true;
    } else if (e.keyCode == 40) {
        down1Pressed = true;
    }
}

function p1UpHandler(e) {
    if (e.keyCode == 38) {
        up1Pressed = false;
    } else if (e.keyCode == 40) {
        down1Pressed = false;
    }
}

function p2DownHandler(e) {
    if (e.keyCode == 87) {
        up2Pressed = true;
    } else if (e.keyCode == 83) {
        down2Pressed = true;
    }
}

function p2UpHandler(e) {
    if (e.keyCode == 87) {
        up2Pressed = false;
    } else if (e.keyCode == 83) {
        down2Pressed = false;
    }
}

function lineDash() {
    ctx.beginPath();
    ctx.setLineDash([10, 5]);
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
}

function drawPaddle() {
    ctx.beginPath(); // paddle 1
    ctx.rect(paddle1x, paddle1y, paddleWidth, paddleHeight)
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();

    ctx.beginPath(); // paddle 2
    ctx.rect(paddle2x, paddle2y, paddleWidth, paddleHeight)
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

function collisionDetetction() {
    if (paddle1y < 0) {
        paddle1y += 10;
    } else if (paddle1y + 70 > canvas.height) {
        paddle1y -= 10;
    }

    if (paddle2y < 0) {
        paddle2y += 10;
    } else if (paddle2y + 70 > canvas.height) {
        paddle2y -= 10;
    }
}

function drawBall() {}

function drawPong() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clearing the canvas

    lineDash();
    drawPaddle();
    drawBall();
    drawScore();
    collisionDetetction();

    if (up1Pressed) {
        paddle2y -= 5
    } else if (down1Pressed) {
        paddle2y += 5;
    }
    
    if (up2Pressed) {
        paddle1y -= 5
    } else if (down2Pressed) {
        paddle1y += 5;
    }
}


setInterval(drawPong, 10);
setInterval(drawPongStartScreen, 10);