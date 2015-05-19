'use strict';

function randomInteger(min, max) {
    /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
    return Math.floor(Math.random() * (max - min)) + min;
}

function setColor(color) {
    document.body.style.backgroundColor = color;
}

var hexCharacters = '0123456789abcdef'.split('');
function randomColor() {
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += hexCharacters[randomInteger(0, hexCharacters.length)];
    }
    return color;
}

function randomlySetColor() {
    setColor(randomColor());
}

function move(id, left, top) {
    var element = document.getElementById(id);
    element.style.left = left + "px";
    element.style.top = top + "px";
}

function randomValidPosition(id) {
    var width = window.innerWidth; 
    var height = window.innerHeight; 
    var element = document.getElementById(id);
    return {
        left: randomInteger(0, width - element.width),
        top: randomInteger(0, height - element.height)
    };
}

function randomlyMoveElement(id) {
    var position = randomValidPosition(id);
    move(id, position.left, position.top);
}

setInterval(function() {
    randomlySetColor();
    randomlyMoveElement('aseem');
}, 220);
