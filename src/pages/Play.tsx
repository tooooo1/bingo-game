import { css } from '@emotion/react';

import Block from '@/components/Block';
import PALETTE from '@/constants/palette';
import { BlockWrapperSize } from '@/constants/sizes';
import useBoard from '@/hooks/useBoard';

const Play = () => {
  const { board, blockSize } = useBoard();

  console.log('main');
  return (
    <div>
      퉁이리의 빙고게임
      <div css={BlockWrapper}>
        {board.map((v, i) => {
          return (
            <Block key={i} bingo={v.bingo} blockSize={blockSize}>
              {v.name}
            </Block>
          );
        })}
      </div>
    </div>
  );
};

export default Play;

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
