var context = document.getElementById('canvas').getContext("2d");

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var clickSize = new Array();
var paint;
var curColor = 'black';
var curSize = 2;

function addClick(x, y, dragging) {
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickColor.push(curColor);
  clickSize.push(curSize);
}

function clear() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function redraw() {
  console.log(curSize)
   context.lineJoin = "round";

   for(i=0; i < clickX.length; i++) {
     context.beginPath();
     if (clickDrag[i] && i) {
       context.moveTo(clickX[i-1], clickY[i-1]);
     } else {
       context.moveTo(clickX[i]-1, clickY[i])
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.lineWidth = clickSize[i];
     context.stroke();
   }
}

$('#canvas').mousedown(function(e){
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
  paint = true;
  addClick(mouseX, mouseY);
  clear();
  redraw();
});

$('#canvas').mousemove(function(e){
  if(paint) {
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    clear();
    redraw();
  }
});

$('#canvas').mouseup(function(e){
  paint = false;
});

$('#canvas').mouseleave(function(e){
  paint = false;
});

$('#black').click(function() {
  curColor = "black";
})

$('#blue').click(function() {
  curColor = "blue";
})

$('#red').click(function() {
  curColor = "red";
})

$('#yellow').click(function() {
  curColor = "orange";
})

$('#green').click(function() {
  curColor = "green";
})

$('#size-2-box').click(function() {
  curSize = 2;
})

$('#size-5-box').click(function() {
  curSize = 5;
})

$('#size-10-box').click(function() {
  curSize = 10;
})

$('#size-20-box').click(function() {
  curSize = 20;
})

$('#reset').click(function() {
  clear();
  clickX = new Array();
  clickY = new Array();
  clickDrag = new Array();
  clickColor = new Array();
  clickSize = new Array();
})
