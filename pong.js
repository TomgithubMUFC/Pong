var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 350;
var ballx = canvas.width / 2;
var bally = canvas.height - 350;
var ballRadius = 5;
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
var dx = 3;
var dy = -3;
var p1score = 0;
var p2score = 0;


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

function drawScore() {
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(p1score, canvas.width / 3, 40);

    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText(p2score, 900, 40);
}

function drawStartMenu() {

    ctx.font = "200px Black Ops One";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("PONG", canvas.width / 2, canvas.height / 4);

    ctx.font = "40px Black Ops One";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("1 Player", canvas.width / 2, canvas.height / 2);

    ctx.font = "40px Black Ops One";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("2 Players Local", canvas.width / 2, 420);

    ctx.font = "40px Black Ops One";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("2 Players Online", canvas.width / 2, 500);

    ctx.beginPath();
    ctx.lineWidth = "3";
    ctx.strokeStyle = "lightgreen"
    ctx.rect(400, 300, 400, 240);
    ctx.stroke();
}

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

    if (ballx + dx > canvas.width) {
        p1score += 1;
        ballx = canvas.width / 2;
        bally = canvas.height - 350
    } else if (ballx + dx < 0) {
        p2score += 1;
        ballx = canvas.width / 2;
        bally = canvas.height - 350
    }

    if (bally + dy > canvas.height || bally + dy < 0) {
        dy = -dy;
    }

    if (ballx > paddle1x && ballx < paddle1x + paddleWidth && bally > paddle1y && bally < paddle1y + paddleHeight) {
        dx = -dx;
    } else if (ballx > paddle2x && ballx < paddle2x + paddleWidth && bally > paddle2y && bally < paddle2y + paddleHeight) {
        dx = -dx;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballx, bally, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}

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

    ballx += dx;
    bally += dy;
}


setInterval(drawPong, 10);
//setInterval(drawPongStartScreen, 10);