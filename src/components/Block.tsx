import { css } from '@emotion/react';

import PALETTE from '@/constants/palette';
import { BlockWrapperSize } from '@/constants/sizes';

interface props {
  blockSize: number;
  bingo: boolean;
  children: string;
}

const Block = ({ blockSize, children, bingo }: props) => {
  return (
    <button
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        background: ${bingo ? 'black' : PALETTE.LIGHT_020};
        width: ${(BlockWrapperSize - 10) / blockSize}px;
        height: ${(BlockWrapperSize - 10) / blockSize}px;
        border: 2px solid ${PALETTE.WHITE};
        border-radius: 8px;
        box-sizing: border-box;
        cursor: pointer;
      `}
    >
      {children}
    </button>
  );
};

export default Block;
