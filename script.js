let container = document.querySelector('#container');

function generateGrid() {
    for (let squares = 0; squares < 256; squares++) {
    const grid = document.createElement('div');

    container.appendChild(grid);

    grid.style.height = 31.25 + 'px';
    grid.style.width = 31.25  + 'px';

    grid.style.flexShrink = '0';

    grid.style.border = '.5px solid rgb(237, 237, 237)';

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
    console.log(userChoice);
    let userNumber = parseInt(userChoice);
    console.log(userNumber);
    let finalNumber = Math.round(userNumber);
    console.log(finalNumber);

    const oldSquareDivs = container.querySelectorAll('div');
    oldSquareDivs.forEach(oldSquareDiv => {
        oldSquareDiv.remove();
    });

    let totalSquares = (finalNumber * finalNumber);

    let newContainer = document.querySelector('#container');

    function changeGridSize() {
        for (let squares = 0; squares < totalSquares; squares++) {

            if (finalNumber > 100) {
                alert("Please make smaller choice.");
                return;
            }

            const newGrid = document.createElement('div');
        
            newContainer.appendChild(newGrid);
        
            newGrid.style.height = 500/finalNumber + 'px';
            newGrid.style.width = 500/finalNumber  + 'px';
        
            newGrid.style.flexShrink = '0';
        
            newGrid.style.border = '.5px solid rgb(237, 237, 237)';
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