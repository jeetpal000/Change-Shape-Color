const changeColor = document.getElementById('change_color');
const changeShape = document.getElementById('change_shape');
const color = document.getElementById('color');
const shape = document.getElementById('shape');


changeColor.addEventListener('click', generateColor);

function generateColor(){
    let newColor =  `rgb(${randomColor()}, ${randomColor()}, ${randomColor()}, ${Math.random().toFixed(2)})`;
    color.style.background = newColor;
}

function randomColor(){
    let color = Math.floor(Math.random()*255);
    return color;
}

changeShape.addEventListener('click', shapeChanger);
let arr = ["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"];

function randomShape(){
    let idx = Math.floor(Math.random()*arr.length);
    return arr[idx];
}

function shapeChanger(){
    let idName = randomShape();
    shape.id = idName;
}
