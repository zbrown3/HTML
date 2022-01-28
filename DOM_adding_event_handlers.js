let view = document.getElementById('view-button');
let close = document.getElementById('close-button');
let codey = document.getElementById('codey');

let open = function() {
  codey.style.display = 'block';
  close.style.display = 'block';
};

let hide = function() {
  codey.style.display = 'none';
  close.style.display = 'none';
};

view.addEventListener('click', open);
close.addEventListener('click', hide);

// Write your code here
function textChange() {
  view.innerHTML = 'Hello World';
}
const textReturn = () => {
  view.innerHTML = 'View';
}
view.onclick = textChange; //Event handler registered using onevent property on view variable where element is stored.
close.onclick = textReturn;