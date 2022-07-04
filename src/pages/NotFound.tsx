/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>요청하신 페이지를 찾을 수 없어요.</div>
      <div>올바른 주소로 접속하셨나요?</div>
      <button css={StyledButton} onClick={() => navigate('/')}>
        홈으로 돌아가기
      </button>
    </div>
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
  color: white;
  font-size: 1rem;
  border-radius: 12px;
  background: #2ac1bc;
  cursor: pointer;
`;
