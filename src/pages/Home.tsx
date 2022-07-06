import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import PALETTE from '@/constants/palette';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 css={Title}>온라인 빙고게임</h1>
      <button css={Button} onClick={() => navigate('/ready')}>
        게임시작
      </button>
    </>
  );
};

export default Home;

const Title = css`
  font-size: 8vh;
  margin-bottom: 2rem;
  text-align: center;
  font-family: 'RixYeoljeongdo_Regular';
  word-break: keep-all;
`;

const Button = css`
  width: 100%;
  padding: 1rem 0;
  border-radius: 7px;
  background-color: ${PALETTE.PRI_RED};
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
  transition: 0.3s all ease;
  font-family: 'Noto Sans KR';
  cursor: pointer;
  :hover {
    transform: scale(1.1);
  }
`;
