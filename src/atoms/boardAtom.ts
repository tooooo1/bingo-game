import { atom } from 'recoil';

const mode = 5;
const bingoAtom = { name: ' ', bingo: false };
const arraySize = Math.pow(Math.round((mode + 0.5) / 2) + 1, 2);
const bingoBoard = Array.from({ length: arraySize }, () =>
  JSON.parse(JSON.stringify(bingoAtom))
);

const boardAtom = atom({
  key: 'boardAtom',
  default: bingoBoard,
});

export { boardAtom };
