import React from 'react';
import styled from 'styled-components';
import { TouchableOpacity, Text } from 'react-native'

const Button = styled.TouchableOpacity`
  height: 50px;
  border-radius: 10px;
  background-color: ${props => props.theme.secondaryColor};
  border: 1px solid white;
  color: white;
  align-items: center;
  justify-content: center;
  text-align-vertical: center;
  padding-horizontal: 10;
  margin: 15px;
`;

const StyledText = styled.Text`
  color: white;
  text-align: center;
  font-weight: bold;
`;



const CustomButton = (props) => {
      return (
          <Button {...props}>
            <StyledText adjustsFontSizeToFit={true}>
                {props.children}
            </StyledText>
          </Button>
      );
}
  
export default CustomButton;
