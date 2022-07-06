import { css } from '@emotion/react';

interface props {
  color: string;
  children: string;
  onClick: () => void;
}

const Button = ({ color, onClick, children }: props) => {
  return (
    <button
      css={css`
        width: 100%;
        padding: 1rem 0;
        border-radius: 7px;
        background-color: ${color};
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
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
