import React from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';
import styled from 'styled-components';
import { Button, InputItem } from '@ant-design/react-native';

const Container = styled.View`
  padding: 25px;
  text-align: center;
  height: ${ Math.round(Dimensions.get('window').height)};
  width: ${ Math.round(Dimensions.get('window').width)};
  background-color: #011627;
  color: white;
`;
const InnerContainer = styled.KeyboardAvoidingView`
  text-align: center;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #011627;
  color: white;
  height: 75%;
  max-height: 75%;
  width: auto;
`;
const StyledButton = styled(Button)`
  width: 300px;
  border-radius: 10px;
  margin: 25px;
`;

const StyledInput = styled(InputItem)`
  width: 200px;
  height: 45px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 10px;
  padding: 5px;
  margin-top: 25px;
`;

const LinkText = styled.Text`
  text-decoration: underline;
  text-decoration-color: rgba(256,256,256, 0.5);
  color: rgba(256,256,256, 0.5);
  font-size: 16px;
`;

class SignUpScreen extends React.Component {
  
    render() {
      return (
        <Container>
          <InnerContainer enabled behavior="padding">
          <View style={{ height: 150, width: 150, backgroundColor: 'white'}}></View>
            <StyledInput last={true} type="text" placeholder="Username"></StyledInput>
            <StyledInput last={true} type="password" placeholder="Password"></StyledInput>
            <StyledInput last={true} type="password" placeholder="Confirm Password"></StyledInput>
            <StyledButton type="primary" onPress={this._signInAsync} >Sign Up</StyledButton>
          <LinkText onPress={this.goToSignIn}>Already have an account? Sign in</LinkText>
          </InnerContainer>
        </Container>
      );
    }
    goToSignIn = async () => {
        this.props.navigation.navigate('SignIn');
    }
    _signUpAsync = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('SignIn');
    };
}
  
export default SignUpScreen;
