import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text } from 'react-native';
import AppNavigator from './navigation/AppNavigator'
export default function App() {
  return (
            <View style={styles.container}>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />} 
              <AppNavigator
                ref={navigatorRef => {
                 this.navigator = navigatorRef;
                }}
              />
              <Text>App file</Text>
            </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
