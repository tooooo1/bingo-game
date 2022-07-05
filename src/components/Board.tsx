import { css } from '@emotion/react';

import PALETTE from '../constants/palette';

const Board = () => {
  const stage = 5;
  const arraySize = Math.pow(Math.round((stage + 0.5) / 2) + 1, 2);
  const blockSize = stage % 2 === 0 ? stage / 2 + 1 : Math.ceil(stage / 2) + 1;
  return (
    <div css={BlockWrapper}>
      {Array.from({ length: arraySize }, () => '').map((_, idx) => (
        <div
          key={idx}
          css={css`
            display: flex;
            justify-content: center;
            align-items: center;
            background: ${PALETTE.LIGHT_020};
            width: ${(BlockWrapperSize - 10) / blockSize}px;
            height: ${(BlockWrapperSize - 10) / blockSize}px;
            border: 2px solid ${PALETTE.WHITE};
            border-radius: 8px;
            box-sizing: border-box;
            cursor: pointer;
          `}
        >
          빙고
        </div>
      ))}
    </div>
  );
};

export default Board;

const BlockWrapperSize = 720;

const BlockWrapper = css`
  display: flex;
  width: ${BlockWrapperSize}px;
  height: ${BlockWrapperSize}px;
  flex-flow: row wrap;
  box-sizing: border-box;
  justify-content: space-around;
  border: 1px solid ${PALETTE.LIGHT_030};
  align-items: space-around;
`;
