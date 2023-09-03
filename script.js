"use strict"

const butClick = document.getElementById("btn");
const inputText = document.getElementById("text");
const square = document.getElementById("square");
const eBut = document.getElementById("e_btn");
const inputRange = document.getElementById("range");
const circle = document.getElementById("circle");
const spanRange = document.getElementById("range-span");

let colorSquare;

const inputLogger = function(event) {
    colorSquare = event.target.value;
}

const rangeLogger = function(event) {
    spanRange.innerText = event.target.value;
    circle.style.width = event.target.value + "%";
    circle.style.height = event.target.value + "%";
}

butClick.addEventListener('click', function(event) {
    square.style.backgroundColor = colorSquare;
})

inputText.addEventListener('input', inputLogger);
inputRange.addEventListener('input', rangeLogger );

eBut.style.display = "none";




