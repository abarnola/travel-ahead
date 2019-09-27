import React from 'react';
import {
  AsyncStorage,
  View,
  Text,
  Button,
  TextInput
} from 'react-native';

class SignInScreen extends React.Component {
    static navigationOptions = {
      title: 'Please sign in',
    };
  
    render() {
      return (
        <View>
        <Text>Sign In</Text>
          <Button title="Sign in!" onPress={this._signInAsync} />
        </View>
      );
    }
  
    _signInAsync = async () => {
      await AsyncStorage.setItem('userToken', 'abc');
      this.props.navigation.navigate('Home');
    };
}
  
export default SignInScreen;
