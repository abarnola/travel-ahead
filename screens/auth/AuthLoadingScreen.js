import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
  Text
} from 'react-native';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('userToken'); //use this after setting userToken
    const userToken = true;
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    //console.log(this.props.navigation);
    this.props.navigation.navigate(userToken ? 'Home' : 'SignIn');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
        <Text>Loading...</Text>
      </View>
    );
  }
}

export default AuthLoadingScreen;