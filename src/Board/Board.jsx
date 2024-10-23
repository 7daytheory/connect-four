import React from 'react';
import Circle from '../Circle/Circle';

const Board = () => {
   //Board Size
   const rows = 6;
   const columns = 7;

    // Create a 2D array and fill with Null Values
    const grid = Array.from({ length: rows }, () => Array(columns).fill(null));

  return (
    <div className="rounded-lg grid grid-rows-6 grid-cols-7 gap-2 bg-blue-600 w-[50%] m-auto mt-12 p-2">
      {grid.map((row, rowIndex) =>
        row.map((_, colIndex) => (
          <Circle key={`${rowIndex}-${colIndex}`} color={'bg-white'} />
        ))
      )}
    </div>
  );
}

export default Board;