import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import PALETTE from '@/constants/palette';

const imgUrl = 'https://img.icons8.com/color/48/000000/box-important--v1.png';

const Ready = () => {
  const navigate = useNavigate();

  return (
    <>
      <div
        css={css`
          padding: 10vw 0;
          border-radius: 12px;
          background-color: ${PALETTE.WHITE};
          @media (min-width: 768px) {
            padding: 5vw 0;
          }
        `}
      >
        <div
          css={css`
            text-align: center;
          `}
        >
          <img src={imgUrl} alt="!" />
        </div>
        <h1
          css={css`
            font-size: 8vw;
            margin-top: 1rem;
            margin-bottom: 1.5rem;
            text-align: center;
            font-family: 'RixYeoljeongdo_Regular';
            word-break: keep-all;
            @media only screen and (min-width: 768px) {
              font-size: 60px;
            }
          `}
        >
          게임 설명
        </h1>
        <div
          css={css`
            font-size: 3vw;
            margin-bottom: 4vh;
            text-align: center;
            @media only screen and (min-width: 768px) {
              font-size: 20px;
            }
          `}
        >
          2줄을 먼저 맞추면 승리!
        </div>
        <Button color={PALETTE.PRI_BLUE} onClick={() => navigate('/play')}>
          시작
        </Button>
      </div>
    </>
  );
};

export default Ready;
