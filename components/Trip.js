import React from 'react';
import styled from 'styled-components';
import { View, ImageBackground, Text } from 'react-native'
import Background from '../assets/mountains.jpg'

const Container = styled.View`
  min-width: 250px;
  min-height: 175px;
  border-radius: 10px;
  margin: 5px 0;
`;

const ImageContainer = styled.ImageBackground`
  border-radius: 10px;
  flex: 1;
  justify-content: flex-end;
  overflow: hidden;
  padding: 15px;
`;

const TextContainer = styled.View`
  background-color: rgba(0,0,0,0.35);
  border-radius: 10px;
  position: relative;
  padding: 15px;
  margin-top: 5px;
  width: 100%;
  height: 75%;
`;

const Header = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: white;
  position: relative;
  margin-bottom: 15px;
`;

const RemainingText = styled.Text`
  font-size: 16px;
  color: white;
  position: relative;
  width: 50%;
`;

const Trip = (props) => {
      return (
        <Container {...props}>
          <ImageContainer resizeMode='cover' source={Background}>
            
            <TextContainer>
              <Header>Marcel's Mom's Trip</Header>
              <RemainingText>150 days remaining</RemainingText>
            </TextContainer>
          </ImageContainer>
        </Container>
      );
}
  
export default Trip;
