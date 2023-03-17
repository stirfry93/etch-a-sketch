
let userChoice = prompt('Enter desired numbers per side of grid (1-100).')

const container = document.querySelector('#container');

const totalSquares = (userChoice * userChoice);

function generateGrid() {
    for (let squares = 0; squares < totalSquares; squares++) {
    const grid = document.createElement('div');

    container.appendChild(grid);

    grid.style.height = 500/userChoice + 'px';
    grid.style.width = 500/userChoice + 'px';

    grid.style.flexShrink = '0';

    grid.style.border = '.5px solid black';

    if (userChoice > 100) {
        alert("Please choose number between 1-100 instead.")
        return;
    }
}
}

generateGrid();

const divs = document.querySelectorAll('#container > div');

for (const div of divs) {
    div.addEventListener('mouseover', function mouseOver() {
        div.style.backgroundColor = 'black';
    })
}