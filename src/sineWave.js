/* eslint-disable import/prefer-default-export */
export const getSineWaveFrame = (time, rows, cols) => {
  const text = [];
  for (let row = 0; row < rows; row += 1) {
    let line = '';
    for (let col = 0; col < cols; col += 1) {
      const u = col / cols;
      const v = row / rows;
      const lineWidth = 0.1;
      const amplitude = Math.sin(time) * 0.5;
      const y = Math.sin(u * 9 + time * 1.5) * amplitude + 0.5;
      const insideLine = v > y - lineWidth && v < y + lineWidth;
      line += insideLine ? '-' : ' ';
    }
    text.push(line);
  }
  return text;
};
