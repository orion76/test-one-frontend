function getViewPortDimensions() {
  const height = document.documentElement.clientHeight;
  const width = document.documentElement.clientWidth;
  return {height, width}
}


function getCellSize(viewPortSize) {
  return Math.min(viewPortSize.height, viewPortSize.width) / 15;
}

function getGridDimensions(cellSize, rect) {
  rows = Math.ceil(rect.height / cellSize);
  columns = Math.ceil(rect.width / cellSize);
  return {rows, columns}
}

function getRectCells(cellSize, rect, gridDimensions) {

  const top = Math.floor(rect.top / cellSize);
  const bottom = Math.ceil(rect.bottom / cellSize);
  const left = Math.floor(rect.left / cellSize);
  const right = Math.ceil(rect.right / cellSize);

  const rectColumns = right - left;
  const rectRows = bottom - top;


  const numbers = [];
  const start = top * gridDimensions.columns + left;
  let current = start;
  for (let i = 0; i < rectRows; i++) {
    current = start + i * gridDimensions.columns
    for (let j = 0; j < rectColumns; j++) {
      numbers.push(current + j);
    }
  }
  console.log(numbers);
  return numbers;
}


function createGrid(gridDimensions, targetDimensions) {


  const height = (100 / (gridDimensions.rows)) + '%';
  const width = (100 / (gridDimensions.columns)) + '%';

  const grid = document.createElement('div');
  grid.className = 'grid';

  for (let row = 0; row < gridDimensions.rows; row++) {
    for (let col = 0; col < gridDimensions.columns; col++) {

      const number = row * gridDimensions.columns + col;
      const cell = document.createElement('div');
      cell.className = 'cell';
      cell.style.height = height;
      cell.style.width = width;
      cell.style.border = '1px solid #999';
      cell.innerText = number;
      grid.appendChild(cell);
    }
  }
  document.body.appendChild(grid);
}

function getCellPosition(cellNumber, columns) {
  const column = cellNumber % columns;
  const row = (cellNumber - column) / columns;
  return {column, row};
}

function getRandomInt(max, exclude) {
  let random = Math.floor(Math.random() * Math.floor(max));
  if (exclude.includes(random)) {
    const sign = random * 2 > max ? -1 : 1;
    random += Math.ceil(max / 2) * sign;
  }
  return random;
}

function runTask3(textarea){


  const targetRect = textarea.getBoundingClientRect();

  const viewPortDimensions = getViewPortDimensions();
  const cellSize = getCellSize(viewPortDimensions);

  const targetDimensions = getGridDimensions(cellSize, targetRect);
  const gridDimensions = getGridDimensions(cellSize, viewPortDimensions);

  gridDimensions.columns -= targetDimensions.columns;
  gridDimensions.rows -= targetDimensions.rows;


  const cellsCount = gridDimensions.columns * gridDimensions.rows;


  // createGrid(gridDimensions, targetDimensions);


  textarea.addEventListener('mouseenter', function (event) {
    const targetCells = getRectCells(cellSize, textarea.getBoundingClientRect(), gridDimensions);
    let random = getRandomInt(cellsCount, targetCells);

    const position = getCellPosition(random, gridDimensions.columns);

    textarea.className = 'to-hide';
    setTimeout(function () {
      textarea.style.top = (position.row * cellSize) + 'px';
      textarea.style.left = (position.column * cellSize) + 'px';
      textarea.className = 'to-visible';
    }, 1000);

  })
}

