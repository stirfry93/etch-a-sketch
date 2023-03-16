let userChoice = prompt('Enter desired numbers per side of grid (1-100).')

// select container div
const container = document.querySelector('#container');

// make a for loop that creates many square divs inside of the container

const totalSquares = (userChoice * userChoice);

for (let squares = 0; squares < totalSquares; squares++) {
    // make a square div (I need 16*16 of these)
    const grid = document.createElement('div');

    // put the square div into the container
    container.appendChild(grid);

    // have JS calculate the necessary height and width to make each div square shaped and fill container

    grid.style.height = 500/userChoice + 'px';
    grid.style.width = 500/userChoice + 'px';

    grid.style.flexShrink = '0';

    // add border to square
     grid.style.border = '.5px solid black';

}

