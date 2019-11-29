import React from 'react'
import styled, {withTheme} from 'styled-components'
import { Button, Text, View, AsyncStorage, SafeAreaView, ScrollView } from 'react-native'
import Trip from '../components/Trip';

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
`;

const Scroll = styled.ScrollView`
  flex: 1;
  padding: 15px 15px;
  padding-bottom: 25px;
`;

const TripsScreen = (props) => {
    const clickTrip = (trip) => {
      props.navigation.navigate('SignIn');
    };
/*
    const getTrips = () => {
        //Trips Service
        //format below
        const trips = ['1', '2', '3']; //get from service
        let cards = null;
        trips.forEach((trip, index) => {
            cards.push(
            <Trip key={index} style={{height: 100, width: 100
            }}>trip</Trip>
            );
        })

        return cards;
    }*/

    return (
      <Container>
        <Scroll>
          <Trip></Trip>
          <Trip></Trip>
          <Trip></Trip>
          <Trip></Trip>
        </Scroll>
      </Container>
    );
}

export default TripsScreen;