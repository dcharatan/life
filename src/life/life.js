/* eslint-disable no-param-reassign */

// A life state is a JS object with the following format:
// row -> col -> cell data

// Mark a cell as being alive.
const markAlive = (lifeState, row, col) => {
  if (lifeState[row] === undefined) {
    lifeState[row] = {};
  }
  lifeState[row][col] = true;
};

export const createLifeState = (rle) => {
  // Find the part of the text that contains the cells.
  const lines = rle.split('\n');
  let lookingForDimensions = true;
  const remainingLines = [];
  lines.forEach((line) => {
    if (lookingForDimensions) {
      // Skip comment lines.
      if (line[0] === '#') {
        return;
      }
      lookingForDimensions = false;
    } else {
      remainingLines.push(line);
    }
  });
  const cellText = remainingLines.join('').split('!')[0];

  // Construct the state from the cell text.
  const state = {};
  let row = 0;
  let col = 0;
  let start = 0;
  for (let i = 0; i < cellText.length; i += 1) {
    if (cellText[i] === '$') {
      row += 1;
      col = 0;
      start = i + 1;
    } else if (cellText[i] === 'o' || cellText[i] === 'b') {
      const number = start === i ? 1 : parseInt(cellText.slice(start, i), 10);
      if (cellText[i] === 'o') {
        for (let j = col; j < col + number; j += 1) {
          markAlive(state, row, j);
        }
      }
      start = i + 1;
      col += number;
    }
  }

  return state;
};

// Read a single cell's state.
export const getCell = (lifeState, row, col) => (lifeState[row] ? lifeState[row][col] : undefined);

// Count the alive and dead neighbors for the given state, row, and column.
const countNeighbors = (lifeState, row, col) => {
  const aliveNeighbors = [];
  const deadNeighbors = [];
  for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
    for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
      if (rowOffset !== 0 || colOffset !== 0) {
        const cell = getCell(lifeState, row + rowOffset, col + colOffset);
        if (cell !== undefined) {
          aliveNeighbors.push(cell);
        } else {
          deadNeighbors.push([row + rowOffset, col + colOffset]);
        }
      }
    }
  }
  return { aliveNeighbors, deadNeighbors };
};

// Run one iteration of Conway's Game of Life.
export const getNextLifeState = (oldState) => {
  const newState = {};

  // Iterate through living cells.
  Object.entries(oldState).forEach(([rowIndex, row]) => {
    Object.entries(row).forEach(([colIndex]) => {
      const rowIndexInt = parseInt(rowIndex, 10);
      const colIndexInt = parseInt(colIndex, 10);

      // Count alive and dead neighbors.
      const { aliveNeighbors, deadNeighbors } = countNeighbors(oldState, rowIndexInt, colIndexInt);

      // Check if this cell should remain alive.
      if (aliveNeighbors.length === 2 || aliveNeighbors.length === 3) {
        markAlive(newState, rowIndexInt, colIndexInt);
      }

      // Check if neighboring dead cells should be born.
      deadNeighbors.forEach(([neighborRowIndex, neighborColIndex]) => {
        const neighborRowIndexInt = parseInt(neighborRowIndex, 10);
        const neighborColIndexInt = parseInt(neighborColIndex, 10);
        const { aliveNeighbors: neighborAliveNeighbors } = countNeighbors(oldState, neighborRowIndexInt, neighborColIndexInt);
        if (neighborAliveNeighbors.length === 3) {
          markAlive(newState, neighborRowIndexInt, neighborColIndexInt);
        }
      });
    });
  });

  return newState;
};
