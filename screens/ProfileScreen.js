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
import CustomButton from '../components/CustomButton'

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
      return (
        <Container>
            <InnerContainer contentContainerStyle={{alignItems: 'center', justifyContent: 'space-around'}}>
            <Avatar>
                <Text>Avatar</Text>
            </Avatar>
            <CustomButton>Text</CustomButton>
            </InnerContainer>
        </Container>
      );
    }
  
}
  
export default ProfileScreen;
