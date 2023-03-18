let container = document.querySelector('#container');

function generateGrid() {
    for (let squares = 0; squares < 256; squares++) {
    const grid = document.createElement('div');

    container.appendChild(grid);

    grid.style.height = 31.25 + 'px';
    grid.style.width = 31.25  + 'px';

    grid.style.flexShrink = '0';

    grid.style.border = '.5px solid black';

}
}

generateGrid();

const divs = document.querySelectorAll('#container > div');

for (const div of divs) {
    div.addEventListener('mouseover', function mouseOver() {
        div.style.backgroundColor = 'black';
    })
}

const button = document.querySelector('button');

button.addEventListener("click", () => {
    let userChoice = prompt("How many squares would you like on each side of your grid? (1-100)?");
    var num1 = parseInt(userChoice);

    const oldSquareDivs = container.querySelectorAll('div');
    oldSquareDivs.forEach(oldSquareDiv => {
        oldSquareDiv.remove();
    });

    let totalSquares = (num1 * num1);

    let newContainer = document.querySelector('#container');

    function changeGridSize() {
        for (let squares = 0; squares < totalSquares; squares++) {

            const newGrid = document.createElement('div');
        
            newContainer.appendChild(newGrid);
        
            newGrid.style.height = 500/userChoice + 'px';
            newGrid.style.width = 500/userChoice  + 'px';
        
            newGrid.style.flexShrink = '0';
        
            newGrid.style.border = '.5px solid black';
    }
    }
    changeGridSize();

    const newGrid = document.querySelectorAll('#container > div');

    for (const div of newGrid){
        div.addEventListener('mouseover', function mouseOver() {
        div.style.backgroundColor = 'black';
    });
};
  });