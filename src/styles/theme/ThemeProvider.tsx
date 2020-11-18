import * as React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import GlobalStyle from '../globalStyle';
import theme from './theme';

type Props = {
  children: React.ReactChild;
};

const ThemeProvider = ({ children }: Props) => (
  <StyledComponentsProvider theme={theme}>
    <GlobalStyle />
    {children}
  </StyledComponentsProvider>
);

export default ThemeProvider;
