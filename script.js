let body = document.querySelector('body');
//function to create tile
function tiles(color) {
  let tile = document.createElement('div');

  tile.style.width = '11.1%';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';
  tile.style.background = color;

  return tile;
}

// function to create random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

// function to create checkerboard
function checkerboard(size) {

  for (let i = 0; i < size; i++) {
    body.appendChild(tiles(getRandomColor()));
  }
}

function flashingColors(){
  for (let i = 0; i < body.children.length; i++){
    body.children[i].style.backgroundColor = getRandomColor();
  }
}

  body.appendChild(div);
  setInterval(checkerboard(81), 2000);
