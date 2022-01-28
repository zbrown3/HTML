// These variables store the boxes on the side
let itemOne = document.getElementById('list-item-one');
let itemTwo = document.getElementById('list-item-two');
let itemThree = document.getElementById('list-item-three');
let itemFour = document.getElementById('list-item-four');
let itemFive = document.getElementById('list-item-five');
let resetButton = document.getElementById('reset-button');

// This function programs the "Reset" button to return the boxes to their default styles
let reset = function() {
  itemOne.style.width = ''
  itemTwo .style.backgroundColor = ''
  itemThree.innerHTML = 'The mouse must leave the box to change the text'
  itemFive.style.display = "none"
};
resetButton.onclick = reset;

// Write your code here
const increaseWidth = () => {
  itemOne.style.width = '600px';
}
itemOne.addEventListener('mouseover',increaseWidth);
const changeBackground = () => {
  itemTwo.style.backgroundColor = 'green';
}
itemTwo.onmouseup = changeBackground;
const changeText = () => {
  itemThree.innerHTML = 'The mouse has left the element';
}
itemThree.onmouseout = changeText;
const showItem = () => {
  itemFive.style.display = 'block';
}
itemFour.onmousedown = showItem;

/* mousedown event is fired when the user presses a mouse button down.  Mouse button doesn't need to be released to fire.
   mouseup event is fired when the user releases the mouse button.
   mouseover event is fired when the mouse enters the content of an element.
   mouseout event is fired when the mouse leaves an element.  */