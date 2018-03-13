var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 350;
var paddle1x = 20;
var paddle2x = 1180;
var paddle1y = canvas.height - 350;
var paddle2y = canvas.height - 350;
var paddleWidth = 10;
var paddleHeight = 70;
var direction1;
var direction2;

$(document).keydown(function(e) {
    var key = e.which;
    if(key == "38") direction1 = "up";
    else if(key == "40") direction1 = "down";

    if(key == "87") direction2 = "up";
    else if(key == "83") direction2 = "down";
})

function lineDash() {
    ctx.beginPath();
    ctx.setLineDash([10,5]);
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
}

function drawPaddle() {
    if(direction1 == "up") paddle1y -= 5;
    else if(direction1 == "down") paddle1y += 5;

    if(direction2 == "up") paddle2y -= 5;
    else if(direction2 == "down") paddle2y += 5;

    ctx.beginPath();    // paddle 1
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


function drawBall(){}

function drawScore(){

}

function drawStartMenu(){
    
    ctx.font = "70px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Pong", canvas.width/2, canvas.height/4); 
    
    
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Start", canvas.width/2, canvas.height/2);
    
    ctx.font = "30px Comic Sans MS";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("1 Player", canvas.width/2, canvas.height/2);


}

function drawPongStartScreen(){
    drawStartMenu();

}

function drawPong(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); //clearing the canvas

    lineDash();
    drawPaddle();
}


setInterval(drawPong, 10);
setInterval(drawPongStartScreen, 10);