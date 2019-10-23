import React from 'react'
import { Text, View, Image, TouchableOpacity, TouchableHighlight} from 'react-native'
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
  align-items: stretch;
  margin-top: 10px;
`;

const Username = styled.Text`
  font-size: 16px;
  margin: 5px;  
`;

const RowText = styled.Text`
  font-size: 14px;
  font-weight: bold;  
`;

const Row = styled.TouchableOpacity`
  align-items: stretch;
  padding: 10px;
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

        <View style={{ width: '100%', height: '100%' }}>
          <RowButton>
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/social.jpg' }}/>
            <Row onPress={() => console.log('1')}>
                <RowText>1</RowText>
            </Row>
          </RowButton>

          <RowButton>
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/promotions.jpg' }}/>
            <Row onPress={() => console.log('2')}>
                <RowText>2</RowText>
            </Row>
          </RowButton>

          <RowButton>
            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/08/outbox.jpg' }}
            />
            <Row onPress={this._signOutAsync}>
                  <RowText>Logout</RowText>
            </Row>
          </RowButton>

        </View>

        <View style={{ width: '100%', height: 1, backgroundColor: '#e2e2e2', marginTop: 15 }} />


      </Container>
    );
  }
}

export default SideMenu;