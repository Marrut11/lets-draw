canvas=document.getElementById("myCanvas");//we r storing the HTML element canvas in a variable canvas 
ctx=canvas.getContext("2d");
color=document.getElementById("fipivsc").value;
penWidth=document.getElementById("sipivsc").value;

canvas.addEventListener("mousedown",My_mousedown);
function My_mousedown(e){
mouseevent="mousedown";
}

canvas.addEventListener("mouseup",MY_mouseup);
function MY_mouseup(e){
    mouseevent="mouseup";
}

canvas.addEventListener("mouseleave",My_mouseleave);
function My_mouseleave(e){
    mouseevent="mouseleave";
}
//mouseevent is a variable which stores the mouse event
canvas.addEventListener("mousemove",My_mousemove);
function My_mousemove(e){
    
cpomx=e.clientX-canvas.offsetLeft;
cpomy=e.clientY-canvas.offsetTop;

if(mouseevent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=penWidth;
console.log("last position of X ="+lpoX+"last position of Y ="+lpoY);
ctx.moveTo(lpoX,lpoY);
console.log("Current position of X ="+cpomx+"Current position of Y ="+cpomy);
ctx.lineTo(cpomx,cpomy);   
ctx.stroke();       
}
lpoX=cpomx;
lpoY=cpomy;
}