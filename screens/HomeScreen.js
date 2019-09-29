import React from 'react'
import styled from 'styled-components'
import { Button, Text, View, AsyncStorage, SafeAreaView } from 'react-native'

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome to our app Lenis!',
  };

  render() {
    return (
      <SafeAreaView>
        <Text>Testing out some fake auth for now</Text>
        <Button title="Show me more of the app" onPress={this._showMoreApp} />
        <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
      </SafeAreaView>
    );
  }

  _showMoreApp = () => {
    this.props.navigation.navigate('Main');
  };

  _signOutAsync = async () => {
    //await AsyncStorage.clear();
    this.props.navigation.navigate('SignIn');
  };
}

export default HomeScreen;