import './assets/font/font.css';

import { css, Global } from '@emotion/react';
import emotionReset from 'emotion-reset';

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
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      `}
    />
  );
};

export default GlobalStyle;
