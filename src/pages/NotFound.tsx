import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

import PALETTE from '@/constants/palette';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>요청하신 페이지를 찾을 수 없어요.</div>
      <div>올바른 주소로 접속하셨나요?</div>
      <button css={StyledButton} onClick={() => navigate('/')}>
        홈으로 돌아가기
      </button>
    </>
  );
};

export default NotFound;

const StyledButton = css`
  margin: 0;
  padding: 0 1rem;
  padding-top: 1rem;
  margin: 1.5rem 0;
  border: none;
  padding-bottom: 1rem;
  width: 40%;
  color: ${PALETTE.WHITE};
  font-size: 1rem;
  border-radius: 12px;
  background: ${PALETTE.DARK_040};
  cursor: pointer;
`;
