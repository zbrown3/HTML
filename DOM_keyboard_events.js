let ball = document.getElementById('float-circle');

// Write your code below
const up = () => {
  ball.style.bottom = '250px';
}
const down = () => {
  ball.style.bottom = '50px';
}
document.onkeydown = up;
document.onkeyup = down;



/* Keyboard events are triggered by user interaction with keyboard keys in the browser:
   keydown event is fired while a user presses a key down.
   keyup event is fired while a user releases a key.
   keypress event is fired when a user presses a key down and releases it.
   Keyboard events have unique properties assigned to their event objects like the .key property that stores the values
   of the key pressed by the user.  You can program the event handler function to react to a specific key, or react
   to any interaction with the keyboard.  */