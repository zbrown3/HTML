let social = document.getElementById('social-media');
let share = document.getElementById('share-button'); // event target is saved to variable.
let text = document.getElementById('text');

// Write your code below
let sharePhoto = function(event) { 
  event.target.style.display = 'none'; //event target object is used to set event target display to none.
  text.innerHTML = event.timeStamp; // event target timeStamp is logged to text element.
}
share.addEventListener('click', sharePhoto);

/* JavaScript stores events as Event objects with their related data and functionalities as properties and methods.
When an event is triggered, the event object can be passed as an argument to the event handler function. There are
pre-determined properties associated with event objects,  You can call these properties to see information about the event for example:
the .target property to reference the lement that the event is registered to.
the .type property to access the name of the event.
the .timeStamp property to access the number of milliseconds that passed since the document loaded and the event was triggered. */