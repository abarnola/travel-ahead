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
import {signIn, sign} from '../../services/auth.service'

const Container = styled.View`
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

const SignInScreen = (props) => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const goToSignUp = async () => {
      props.navigation.navigate('SignUp');
    };

    const _signInAsync = async () => {
      signIn({email: email, password: password})
      .then(res => {
        console.log(res)
        AsyncStorage.setItem('userToken', res.token);
        props.navigation.navigate('Home');
      })
      .catch(err => console.log(err));
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
              <FormInput style={{ width: '100%' }} 
                secureTextEntry={true} 
                textContentType="password" 
                placeholder="Password"
                onChangeText={(val) => setPassword(val)}
                value={password}></FormInput>
           
            <CustomButton onPress={_signInAsync} style={{ width: '100%'}}>Sign In</CustomButton>
            <LinkText onPress={goToSignUp}>Don't have an account? Sign up</LinkText>
            <View style={{ flex : 1 }} />
            </FormContainer>
        </Container>
      );

}

SignInScreen.navigationOptions = {
  mode: 'modal'
}
  
export default SignInScreen;
