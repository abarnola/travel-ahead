import React from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import styled from 'styled-components';
import CustomButton from '../../components/CustomButton';
import FormInput from '../../components/FormInput';

const Container = styled.KeyboardAvoidingView`
  padding: 25px;
  text-align: center;
  height: ${ Math.round(Dimensions.get('window').height)};
  width: ${ Math.round(Dimensions.get('window').width)};
  background-color: ${props => props.theme.primaryColor};
  flex: 1;
  align-items: center;
`;

const FormContainer = styled.View`
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
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
        <Container enabled behavior={Platform.OS === "ios" ? "padding" : null}>
          <FormContainer>
          <View style={{ height: 150, width: 150, margin: 10, backgroundColor: 'white'}}></View>
          
              <FormInput style={{ width: '100%'}} 
                textContentType="none"
                placeholder="Username"></FormInput>
              <FormInput style={{ width: '100%' }} 
                secureTextEntry={true} 
                textContentType="password" 
                placeholder="Password"></FormInput>
              <FormInput style={{ width: '100%' }} 
                secureTextEntry={true} 
                textContentType="password" 
                placeholder="Confirm Password"></FormInput>

              <CustomButton onPress={this._signUpAsync} style={{ width: '100%'}}>Sign Up</CustomButton>
              <LinkText onPress={this.goToSignIn}>Already have an account? Sign in</LinkText>
              <View style={{ flex : 1 }} />
            </FormContainer>
        </Container>
      );
    }
    goToSignIn = async () => {
        this.props.navigation.navigate('SignIn');
    }
    _signUpAsync = async () => {
        //await AsyncStorage.setItem('userToken', 'abc');
        //Create user then sign in with that user
        this.props.navigation.navigate('SignIn');
    };
}
  
export default SignUpScreen;
