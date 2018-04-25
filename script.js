// Your JS goes here

let body = document.getElementsByTagName('body')[0];

//NOTE: gradient
// body.style.background = "linear-gradient(135deg, red, blue)";

for ( let i = 0; i < 63; i++ ) {
  let div = document.createElement('div');

  div.style.width = "11.1%";
  div.style.paddingBottom = "11.1%";
  div.style.float = "left";

  //NOTE: checkerboard design
  if ( i % 2 === 0 ){
    div.style.backgroundColor = "red";
  } else {
    div.style.backgroundColor = "black";
  }

  //NOTE: random color design
  // div.style.backgroundColor = getRandomColor();

  //NOTE: gradient
  // if (i % 2 === 0) {
  //   div.style.backgroundColor = "rgba(173, 33, 99, " + (.02 * i) + ")";
  // } else {
  //   div.style.backgroundColor = "rgba(13, 133, 199, " + (.02 * i) + ")";
  // }

  //NOTE: flashing
  // div.style.backgroundColor = getRandomColor();

  body.appendChild(div);
}
// NOTE: flashing
// setInterval(changeAllColors, 2000);

/**
 * @name - getRandomColor
 * @description - picks a random color
 * @return - random color hex
 * @param - n/a
 **/
function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * @name - changeAllColors
 * @description - for each child div of body, assign a random backgroundColor
 * @return - n/a
 * @param - n/a
 **/
function changeAllColors() {
  for (let i = 0; i < body.children.length; i++) {
    body.children[i].style.backgroundColor = getRandomColor();
  }
}
