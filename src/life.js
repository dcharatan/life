/* eslint-disable no-param-reassign */

// A life state is a JS object with the following format:
// row -> col -> cell data

export const createLifeState = () => 42;

// Read a single cell's state.
const getCell = (lifeState, row, col) => (lifeState[row] ? lifeState[row][col] : undefined);

// Mark a cell as being alive.
const markAlive = (lifeState, row, col) => {
  if (lifeState[row] === undefined) {
    lifeState[row] = {};
  }
  lifeState[row][col] = true;
};

// Count the alive and dead neighbors for the given state, row, and column.
const countNeighbors = (lifeState, row, col) => {
  const aliveNeighbors = [];
  const deadNeighbors = [];
  for (let rowOffset = -1; rowOffset <= 1; rowOffset += 1) {
    for (let colOffset = -1; colOffset <= 1; colOffset += 1) {
      const cell = getCell(lifeState, row + rowOffset, col + colOffset);
      if (cell !== undefined) {
        aliveNeighbors.push(cell);
      } else {
        deadNeighbors.push([row, col]);
      }
    }
  }
  return { aliveNeighbors, deadNeighbors };
};

// Run one iteration of Conway's Game of Life.
export const updateLifeState = (oldState) => {
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
