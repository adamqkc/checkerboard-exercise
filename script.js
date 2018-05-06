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

  for (let i = 0; i < size; i++) {
    if (i % 2 === 0) {
      body.appendChild(tiles('black'))
    } else {
      body.appendChild(tiles('red'));
    }
  }
}

checkerboard(81);
