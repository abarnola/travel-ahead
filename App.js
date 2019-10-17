import React from 'react';
import AppNavigator from './navigation/AppNavigator'
import { ThemeProvider } from 'styled-components';
import Theme from './theme'

export default function App() {
  return (
  <ThemeProvider theme={Theme}>
      <AppNavigator
        screenProps={{
          theme: Theme
        }}
        ref={navigatorRef => {
        this.navigator = navigatorRef;
        }}
        />
  </ThemeProvider>
  )
}
