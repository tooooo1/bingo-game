import { useEffect, useState } from 'react';

const bingoAtom = { name: ' ', bingo: false };

const useBoard = (mode = 5) => {
  const arraySize = Math.pow(Math.round((mode + 0.5) / 2) + 1, 2);
  const blockSize = mode % 2 === 0 ? mode / 2 + 1 : Math.ceil(mode / 2) + 1;
  const bingoBoard = Array.from({ length: arraySize }, () =>
    JSON.parse(JSON.stringify(bingoAtom))
  );
  const [board, setBoard] = useState(bingoBoard);

  useEffect(() => {
    setBoard(board);
    console.log('use');
  }, [board]);

  return { board, blockSize };
};

export default useBoard;
