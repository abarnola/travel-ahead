import React from 'react';
import styled from 'styled-components';
import { Button } from '@ant-design/react-native';

const StyledButton = styled(Button)`
  width: 300px;
  border-radius: 10px;
  margin: 25px;
  background-color: ${props => props.theme.secondaryColor}
  color: white
`;


const CustomButton = (props) => {
      return (
        <StyledButton {...props}>
        </StyledButton>
      );
}
  
export default CustomButton;
