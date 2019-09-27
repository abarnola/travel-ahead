import React from 'react';
import AppNavigator from './navigation/AppNavigator'

export default function App() {
  return <AppNavigator
  ref={navigatorRef => {
   this.navigator = navigatorRef;
  }}
  />
}
