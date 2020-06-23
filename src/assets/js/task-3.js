/**
 * Задача.
 * С миниммальными затратами вычислительных ресурсов процессора отследить наведение мыши на целевой объект (textarea)
 * и переместить его в произвольную видимую область страницы.
 *
 * Алгоритм
 *
 * 1.Разбиваем видимую область страницы на ячейки-квадраты заданного размера.
 * Порядковые номера ячеек помещаем в массив.
 * В итоге, мы можем получить произвольные номер ячейки и вычислить по этому номеру ее положение на странице.
 * Если произвольный номер ячейки вдруг совпадет с предыдущим, то просто вычисляем другой номер, прибавляя или отнимая
 * от найденного половину количества всех ячеек.
 *
 */


/**
 * Вычисляет размер видимой области страницы.
 * @returns {{width: number, height: number}}
 */
function getViewPortDimensions() {
  const height = document.documentElement.clientHeight;
  const width = document.documentElement.clientWidth;
  return {height, width}
}


/**
 * Рассчитывает размер стороны ячейки.
 * Выбираем минимальное значение высоты-ширины вьюпорта и делим его на заданное количество ячеек в столбце-строке
 *
 * @param viewPortSize
 * @returns {number}
 */
function getCellSize(viewPortSize) {
  const cellsCount = 15;
  return Math.min(viewPortSize.height, viewPortSize.width) / cellsCount;
}

/**
 * Вычисляет кол-во столбцов-строк сетки ячеек
 *
 * @param cellSize - размер стороны ячейки
 * @param rect - DOMRect докумета
 * @returns {{columns: number, rows: number}}
 */
function getGridDimensions(cellSize, rect) {
  rows = Math.ceil(rect.height / cellSize);
  columns = Math.ceil(rect.width / cellSize);
  return {rows, columns}
}

/**
 * Определяет номера ячеек, которые "накрывает" textarea
 * @param cellSize - размер стороны ячейки
 * @param rect - DOMRect textarea
 * @param gridDimensions - размер сетки ячеек
 * @returns {[]}
 */
function getRectCells(cellSize, rect, gridDimensions) {

  // Вычисляем позицию rect в "ячейках"
  const top = Math.floor(rect.top / cellSize);
  const bottom = Math.ceil(rect.bottom / cellSize);
  const left = Math.floor(rect.left / cellSize);
  const right = Math.ceil(rect.right / cellSize);

  // Вычисляем размер rect в "ячейках" (кол-во строк-столбцов)
  const rectColumns = right - left;
  const rectRows = bottom - top;


  const numbers = [];
  // Вычисляем номер первой ячейки (сверху-слева) rect
  const start = top * gridDimensions.columns + left;

  // Номер первой ячейки в строке
  let firstCell;
  for (let i = 0; i < rectRows; i++) {
    firstCell = start + i * gridDimensions.columns;
    for (let j = 0; j < rectColumns; j++) {
      numbers.push(firstCell + j);
    }
  }

  return numbers;
}

/**
 * Рисует сетку ячеек для отладки
 * @param gridDimensions
 * @param targetDimensions
 */
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


/**
 * Вычисляет позицию (столбец, строку) ячейки по ее номеру
 * @param cellNumber
 * @param columns
 * @returns {{column: number, row: number}}
 */
function getCellPosition(cellNumber, columns) {
  const column = cellNumber % columns;
  const row = (cellNumber - column) / columns;
  return {column, row};
}

/**
 * Вычисляет произвольное число от 0 до max, отсутствующий в массиве exclude
 * @param max - верхняя граница диапазона рандомного числа
 * @param exclude - массив исключаемых чисел
 * @returns {number}
 */
function getRandomInt(max, exclude) {
  let random = Math.floor(Math.random() * Math.floor(max));
  if (exclude.includes(random)) {
    const sign = random * 2 > max ? -1 : 1;
    random += Math.ceil(max / 2) * sign;
  }
  return random;
}


/**
 * Главная функция, запускает основной алгоритм.
 * @param textarea
 */
function runTask3(textarea) {


  const targetRect = textarea.getBoundingClientRect();

  const viewPortDimensions = getViewPortDimensions();
  const cellSize = getCellSize(viewPortDimensions);

  const targetDimensions = getGridDimensions(cellSize, targetRect);
  const gridDimensions = getGridDimensions(cellSize, viewPortDimensions);


  /**
   * Уменьшаем размер(ширину, высоту в ячейках) сетки ячеек на соответствующие размеры textarea
   * Получается, из сетки удаляются последние строки (снизу) столбцы (справа) в которых правый-верхний угол textarea
   * находиться не может без расположение части textarea за границами видимой области
   *
   */
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

