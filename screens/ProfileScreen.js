import React from 'react';
import {
  AsyncStorage,
  SafeAreaView,
  Text,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import styled from 'styled-components';
import { Button, List, InputItem } from '@ant-design/react-native';

const Container = styled.View`
  padding: 25px;
  text-align: center;
  height: ${ Math.round(Dimensions.get('window').height)};
  width: ${ Math.round(Dimensions.get('window').width)};
`;
const InnerContainer = styled.ScrollView`
  text-align: center;
  flex: 1;
  flex-direction: column;
  color: white;
  height: 100%;
  max-height: 100%;
  width: auto;
`;
const StyledButton = styled(Button)`
  width: 100px;
  border-radius: 10px;
  margin: 25px;
`;

const Avatar = styled.View`
    border-radius: 100px;
    background-color:black;
    width: 150px;
    height: 150px;
    color: #ffffff;
    flex: 1;
    text-align: center;
    align-items: center;
`;

class ProfileScreen extends React.Component {
  
    render() {
      const screenWidth = Math.round(Dimensions.get('window').width);
      const screenHeight = Math.round(Dimensions.get('window').height);
      console.log(screenWidth, screenHeight);

      return (
        <Container>
            <InnerContainer contentContainerStyle={{alignItems: 'center', justifyContent: 'space-around'}}>
            <Avatar>
                <Text>Avatar</Text>
            </Avatar>
            <List>
                <InputItem type="text" placeholder="Input"></InputItem>
                <InputItem type="text" placeholder="Input"></InputItem>
                <InputItem type="text" placeholder="Input"></InputItem>
                <InputItem type="text" placeholder="Input"></InputItem>
            </List>
            <StyledButton type="primary" >Save</StyledButton>
            </InnerContainer>
        </Container>
      );
    }
  
}
  
export default ProfileScreen;
