var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 350;

function drawCenter() {
    
    ctx.beginPath();
    ctx.rect(x, y, 50, 50);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
}




function drawPong(){
    drawCenter();
}

setInterval(drawPong, 10);