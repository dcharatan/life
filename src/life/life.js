/* eslint-disable no-param-reassign */

export const createLifeState = (rle) => {
  // Find the part of the text that contains the cells.
  const lines = rle.split('\n');
  let lookingForDimensions = true;
  const remainingLines = [];
  let rows;
  let cols;
  lines.forEach((line) => {
    if (lookingForDimensions) {
      // Skip comment lines.
      if (line[0] === '#') {
        return;
      }
      lookingForDimensions = false;
      const parts = line.split(',');
      cols = parseInt(parts[0].split('=')[1], 10);
      rows = parseInt(parts[1].split('=')[1], 10);
    } else {
      remainingLines.push(line);
    }
  });
  const cellText = remainingLines.join('').split('!')[0];

  // Construct the state from the cell text.
  const state = [];
  for (let row = 0; row < rows; row += 1) {
    state.push([]);
    for (let col = 0; col < cols; col += 1) {
      state[row].push(false);
    }
  }
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
          state[row][j] = true;
        }
      }
      start = i + 1;
      col += number;
    }
  }

  return state;
};

// Count the alive neighbors for the given state, row, and column.
const countAlive = (lifeState, startRow, startCol) => {
  let numAliveNeighbors = 0;
  const rowStart = Math.max(0, startRow - 1);
  const rowEnd = Math.min(lifeState.length, startRow + 2);
  const colStart = Math.max(0, startCol - 1);
  const colEnd = Math.min(lifeState[0].length, startCol + 2);
  for (let row = rowStart; row < rowEnd; row += 1) {
    for (let col = colStart; col < colEnd; col += 1) {
      if (lifeState[row][col] && (row !== startRow || col !== startCol)) {
        numAliveNeighbors += 1;
      }
    }
  }
  return numAliveNeighbors;
};

export const copyState = (state) => {
  const newState = [];
  for (let row = 0; row < state.length; row += 1) {
    newState.push([]);
    for (let col = 0; col < state[0].length; col += 1) {
      newState[row].push(state[row][col]);
    }
  }
  return newState;
};

export const padState = (state, padding) => {
  const newState = [];
  for (let row = 0; row < state.length + 2 * padding; row += 1) {
    newState.push([]);
    for (let col = 0; col < state[0].length + 2 * padding; col += 1) {
      if (row >= padding && row < state.length + padding && col >= padding && col < state[0].length + padding) {
        newState[row].push(state[row - padding][col - padding]);
      } else {
        newState[row].push(false);
      }
    }
  }
  return newState;
};

// Run one iteration of Conway's Game of Life.
export const updateLifeState = (state, scratch) => {
  for (let row = 0; row < state.length; row += 1) {
    for (let col = 0; col < state[0].length; col += 1) {
      const numAlive = countAlive(state, row, col);
      scratch[row][col] = (numAlive === 3 || (numAlive === 2 && state[row][col]));
    }
  }
  for (let row = 0; row < state.length; row += 1) {
    for (let col = 0; col < state[0].length; col += 1) {
      state[row][col] = scratch[row][col];
    }
  }
  return state;
};
