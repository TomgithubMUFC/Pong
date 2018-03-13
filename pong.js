var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas.width / 2;
var y = canvas.height - 350;


function lineDash() {

    ctx.setLineDash([10,5]);
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.strokeStyle="white";
    ctx.stroke();
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
    lineDash();
}

setInterval(drawPongStartScreen, 10);

