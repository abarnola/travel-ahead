import React from 'react';
import styled from 'styled-components';
import { InputItem } from '@ant-design/react-native';
import { TextInput } from 'react-native';

const StyledInput = styled(TextInput)`
  height: 50px;
  background-color: white;
  border-radius: 10px;
  padding: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const FormInput = (props) => {
      return (
        <StyledInput {...props}>
        </StyledInput>
      );
}
  
export default FormInput;
