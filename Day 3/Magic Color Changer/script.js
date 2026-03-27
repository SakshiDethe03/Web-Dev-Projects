var red = document.querySelector(".red");
var violet = document.querySelector(".violet");
var cyan = document.querySelector(".cyan");
var green = document.querySelector(".green");
var yellow = document.querySelector(".yellow");
var circle = document.querySelector(".circle");

var getBgColor = (selectedElement) => {
return window.getComputedStyle(selectedElement).backgroundColor;
}

const magicColorChanger = (element, color) => {
return element.addEventListener("mouseenter", () => {
    circle.style.background = color;
});
};
magicColorChanger(red, getBgColor(red));
magicColorChanger(violet, getBgColor(violet));
magicColorChanger(cyan, getBgColor(cyan));
magicColorChanger(green, getBgColor(green));
magicColorChanger(yellow, getBgColor(yellow));
