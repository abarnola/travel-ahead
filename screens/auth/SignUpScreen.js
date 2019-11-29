import React, {useState} from 'react';
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
import {signUp} from '../../services/auth.service';

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

const SignUpScreen = (props) => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    goToSignIn = async () => {
      props.navigation.navigate('SignIn');
    }
    _signUpAsync = async () => {
      signUp({
        email,
        username,
        password,
        confirmPassword
      })
      .then(res => {
        console.log(res);
        props.navigation.navigate('Home');
      })
      .catch(err => {
        console.dir(err)
      })
        //await AsyncStorage.setItem('userToken', 'abc');
        //Create user then sign in with that user
    };
    return (
      <Container enabled behavior={Platform.OS === "ios" ? "padding" : null}>
        <FormContainer>
        <View style={{ height: 150, width: 150, margin: 10, backgroundColor: 'white'}}></View>
        
            <FormInput style={{ width: '100%'}} 
              textContentType="none"
              placeholder="Email"
              onChangeText={(val) => setEmail(val)}
              value={email}></FormInput>
            <FormInput style={{ width: '100%'}} 
              textContentType="none"
              placeholder="Username"
              onChangeText={(val) => setUsername(val)}
              value={username}></FormInput>
            <FormInput style={{ width: '100%' }} 
              secureTextEntry={true} 
              textContentType="password" 
              placeholder="Password"
              onChangeText={(val) => setPassword(val)}
              value={password}></FormInput>
            <FormInput style={{ width: '100%' }} 
              secureTextEntry={true} 
              textContentType="password" 
              placeholder="Confirm Password"
              onChangeText={(val) => setConfirmPassword(val)}
              value={confirmPassword}></FormInput>

            <CustomButton onPress={_signUpAsync} style={{ width: '100%'}}>Sign Up</CustomButton>
            <LinkText onPress={goToSignIn}>Already have an account? Sign in</LinkText>
            <View style={{ flex : 1 }} />
          </FormContainer>
      </Container>
    );
    
}
  
export default SignUpScreen;
