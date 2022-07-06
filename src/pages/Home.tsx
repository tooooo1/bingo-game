import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import PALETTE from '@/constants/palette';

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1 css={Title}>온라인 빙고게임</h1>
      <Button color={PALETTE.PRI_RED} onClick={() => navigate('/ready')}>
        게임시작
      </Button>
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
