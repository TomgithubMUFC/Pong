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

lineDash();


function drawPong(){
    lineDash();
}

setInterval(drawPong, 10);

