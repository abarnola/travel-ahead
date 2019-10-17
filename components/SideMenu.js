import React from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components'

const Container = styled.View`
  margin: 15px;
  margin-top: 50px;
  flex: 1;
  align-items: center;
`;

const Avatar = styled.Image`
  border-radius: 15px;
  height: 100px;
  width: 100px;
`;

const Divider = styled.View`
  width: 100%;
  height: 1;
  background-color: #e2e2e2;
  margin-top: 15;
  margin-bottom: 15;
`;

const RowButton = styled.View`
  flex-direction: row;
  align-items: center; 
  margin-top: 10px;
`;

const Username = styled.Text`
  font-size: 16px;
  margin: 5px;  
`;

class SideMenu extends React.Component {

  _signOutAsync = async () => {
    //await AsyncStorage.clear();
    console.log('help')
    this.props.navigation.navigate('SignIn');
  };

  render() {
    return (

      <Container>
        <Avatar source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2017/10/Guitar.jpg' }}/>
        <Username>{/*this.props.user.username*/}Username</Username>
        <Divider></Divider>

        <View style={{ width: '100%' }}>
          <RowButton>
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg' }}/>
            <Text> First Activity </Text>
          </RowButton>

          <RowButton>
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg' }}/>
            <Text > Second Activity </Text>
          </RowButton>

          <RowButton >
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg' }}
            />
            <Text onPress={this._signOutAsync}>Logout</Text>
          </RowButton>

        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15 }} />


      </Container>
    );
  }
}

export default SideMenu;