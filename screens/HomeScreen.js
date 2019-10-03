import React from 'react'
import styled, {withTheme} from 'styled-components'
import { Button, Text, View, AsyncStorage, SafeAreaView } from 'react-native'


const HomeScreen = (props) => {
    const _signOutAsync = async () => {
      //await AsyncStorage.clear();
      console.log(props)
      props.navigation.navigate('SignIn');
    };
    return (
      <SafeAreaView style={{}}>
        <Text>Testing out some fake auth for now</Text>
        <Button title="Actually, sign me out :)" onPress={_signOutAsync} />
      </SafeAreaView>
    );
}

export default HomeScreen;