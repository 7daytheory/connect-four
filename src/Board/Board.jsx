import React from 'react';
import Circle from '../Circle/Circle';

const Board = () => {
    // Board Size
    const rows = 6;
    const columns = 7;

    // Horiztonal, Vertical or Diagonal winner
    const directions = [
      { x: 0, y: 1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
      { x: 1, y: -1 }
    ];

    // Check if there's a 4 in a row in either horizontal, vertical or diagonal direction
    const checkDirection = (x, y, direction, player) => {
      for (let i = 0; i < 4; i++) {
        const row = x + i * direction.x;
        const col = y + i * direction.y;
        if (row < 0 || row >= rows || col < 0 || col >= columns || grid[row][col] !== player) {
          return false;
        }
      }
      return true;
    };

  // Create a 2D array and fill with Null Values
  const grid = Array.from({ length: rows }, () => Array(columns).fill(null));

  return (
    <div className="rounded-lg grid grid-rows-6 grid-cols-7 gap-2 bg-blue-600 w-[50%] m-auto mt-12 p-2">
      {grid.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <Circle 
            key={`${rowIndex}-${colIndex}`} 
            color={'bg-white'} 
            />
        ))
      )}
    </div>
  );
}

export default Board;
