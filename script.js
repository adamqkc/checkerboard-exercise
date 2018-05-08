//function to create tile
function tiles(color) {
  let tile = document.createElement('div');

  tile.style.width = '11.1%';
  tile.style.float = 'left';
  tile.style.paddingBottom = '11.1%';
  tile.style.background = color;

  return tile;
}

//function to create checkerboard
function checkerboard(size) {

  let body = document.querySelector('body');
  body.style.background = "linear-gradient(to bottom right, white, red)";

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      body.appendChild(tiles("rgba(173, 33, 99, " + (.02 * i) + ")"));
    } else {
      body.appendChild(tiles("rgba(13, 133, 199, " + (.02 * i) + ")"));
    }
  }
}

checkerboard(81);
