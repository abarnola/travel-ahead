import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import { Card } from '@ant-design/react-native';

const NotificationContainer = styled.View`
    width: 100%;
    max-height: 75px;
    min-height: 7.5%;
    flex: 1;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    border-top-width: 1px;
    border-top-color: gray;
    border-bottom-width: 1px;
    border-bottom-color: gray;
    &:hover {
        fill: blue;
    }
`;

const TextContainer = styled.View`
    flex: 1;
    flex-wrap: wrap;
    height: 100%;
`;

const Notification = (props) => {
    //Function to shorten message if the text is too long to fit container
    const shortenMessage = (message) => {

        return;
    }
    
    return (
        <NotificationContainer>
            <View style={{backgroundColor: 'red', width: 35, height: 35, marginRight: 25}}></View>
            <TextContainer>
                <Text>{props.text}</Text>
            </TextContainer>
        </NotificationContainer>
      );
}

export default Notification;
