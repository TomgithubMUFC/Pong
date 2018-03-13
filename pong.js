var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var x = canvas/2;
ctx.beginPath();
ctx.rect(x, 40, 50, 50);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();