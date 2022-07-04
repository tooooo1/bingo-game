import emotionReset from 'emotion-reset';
import { Global, css } from '@emotion/react';

const GlobalStyle = () => {
  return (
    <Global
      styles={css`
        ${emotionReset}
        * {
          outline: none;
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyle;
