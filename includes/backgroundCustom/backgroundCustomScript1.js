/* Getting elements */
var shapesRow1 = document.getElementById("shapesRow1");
var shapesRow2 = document.getElementById("shapesRow2");
var shapesRow3 = document.getElementById("shapesRow3");

/* Getting the view width and view height */
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const vwem = vw / 16;
const vhem = vh / 16;

/* number of medium shapes to spawn */
const nM = Math.floor(vwem / 5);

/* number of large shapes to spawn */
const nL = Math.floor(vwem / 8);

/* Get random integer function */

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

/* medium shape array builder */

var arrayM = [];
var arrayStartM = 0;
while (arrayStartM < nM){
  arrayM[arrayStartM] = {'type': getRandomInt(3), 'speed': 1 + Math.random(), 'spinDir': getRandomInt(2)};
  arrayStartM++
}

/* large shape array builder */

var arrayL = [];
var arrayStartL = 0;
while (arrayStartL < nL){
  arrayL[arrayStartL] = {'type': getRandomInt(3), 'speed': 1 + Math.random(), 'spinDir': getRandomInt(2)};
  arrayStartL++;
}

/* Spawning Shapes M and L, setting speeds, setting rotation directions */
/* M */
var shapeStart = 0;
while (shapeStart < nM - Math.floor(nM / 5)){
  var shape = document.createElement('div');
  var shape2 = document.createElement('div');
  var speed = arrayM[shapeStart]['speed'] * 10;
  var speed2 = ((1 - (arrayM[shapeStart]['speed'] - 1)) + 1) * 10;
  var speedstr = 'animation-duration: ' + speed.toString() + 's';
  var speedstr2 = 'animation-duration: ' + speed2.toString() + 's';
  shape.setAttribute('style', speedstr);
  shape2.setAttribute('style', speedstr2);
  if (shapeStart == 0) {
    if (arrayM[shapeStart]['type'] == 0){
      shape.classList.add('squareM');
      shape2.classList.add('triangleM');
    } else if (arrayM[shapeStart]['type'] == 1) {
      shape.classList.add('triangleM');
      shape2.classList.add('circleM');
    } else if (arrayM[shapeStart]['type'] == 2) {
      shape.classList.add('circleM');
      shape2.classList.add('squareM');
    } else {
      shape.classList.add('squareM');
      shape2.classList.add('triangleM');
    }
  } else {
    shape.classList.add('marginAdd');
    shape2.classList.add('marginAdd');
    if (arrayM[shapeStart]['type'] == 0){
      shape.classList.add('squareM');
      shape2.classList.add('triangleM');
    } else if (arrayM[shapeStart]['type'] == 1) {
      shape.classList.add('triangleM');
      shape2.classList.add('circleM');
    } else if (arrayM[shapeStart]['type'] == 2) {
      shape.classList.add('circleM');
      shape2.classList.add('squareM');
    } else {
      shape.classList.add('squareM');
      shape2.classList.add('triangleM');
    }
  }
  if (arrayM[shapeStart]['spinDir'] == 0) {
    shape.classList.add('moveUpRight');
    shape2.classList.add('moveUpLeft');
  } else {
    shape.classList.add('moveUpLeft');
    shape2.classList.add('moveUpRight');
  }
  shapesRow1.appendChild(shape);
  shapesRow3.appendChild(shape2);
  shapeStart++;
}

/* L */
var shapeStart = 0;
while (shapeStart < nL - Math.floor(nL / 8)){
  var shape = document.createElement('div');
  var speed = arrayL[shapeStart]['speed'] * 15;
  var speedstr = 'animation-duration: ' + speed.toString() + 's';
  shape.classList.add('moveUp');
  shape.classList.add('marginAdd');
  shape.setAttribute('style', speedstr);
  if (shapeStart == 0) {
    if (arrayL[shapeStart]['type'] == 0){
      shape.classList.add('squareL');
    } else if (arrayL[shapeStart]['type'] == 1) {
      shape.classList.add('triangleL');
    } else if (arrayL[shapeStart]['type'] == 2) {
      shape.classList.add('circleL');
    } else {
      shape.classList.add('squareL');
    }
  } else {
    shape.classList.add('marginAdd');
    if (arrayL[shapeStart]['type'] == 0){
      shape.classList.add('squareL');
    } else if (arrayL[shapeStart]['type'] == 1) {
      shape.classList.add('triangleL');
    } else if (arrayL[shapeStart]['type'] == 2) {
      shape.classList.add('circleL');
    } else {
      shape.classList.add('squareL');
    }
  }
  if (arrayM[shapeStart]['spinDir'] == 0) {
    shape.classList.add('moveUpRight');
  } else {
    shape.classList.add('moveUpLeft');
  }
  shapesRow2.appendChild(shape);
  shapeStart++;
}


/* Console Log */
console.log(arrayM);
console.log(arrayL);
