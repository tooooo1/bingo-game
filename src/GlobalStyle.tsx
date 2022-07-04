import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';
import 'assets/font/font.css';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        * {
          outline: none;
          box-sizing: border-box;
        }
        body {
          font-family: 'Noto Sans KR', sans-serif;
        }
      `}
    />
  );
};

export default GlobalStyle;
