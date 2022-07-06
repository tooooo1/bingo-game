import { useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import PALETTE from '@/constants/palette';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>요청하신 페이지를 찾을 수 없어요.</div>
      <div>올바른 주소로 접속하셨나요?</div>
      <Button color={PALETTE.DARK_040} onClick={() => navigate('/')}>
        홈으로 돌아가기
      </Button>
    </>
  );
};

export default NotFound;
