import React from 'react';
import styled from 'styled-components';
import { View, Text, Animated } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler'

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
    z-index: 1000;
`;

const Notification = (props) => {
    //Function to shorten message if the text is too long to fit container
    const shortenMessage = (message) => {

        return;
    }

    renderRightActions = (progress, dragX) => {
        const trans = dragX.interpolate({
          inputRange: [0, 50, 100, 101],
          outputRange: [-20, 0, 0, 1],
        });
        return (
          <RectButton style={{ width: 'auto', height: 'auto', backgroundColor: 'blue'}} onPress={this.close}>
            <Animated.Text
              style={[
                {
                  transform: [{ translateX: trans }],
                },
              ]}>
              Archive
            </Animated.Text>
          </RectButton>
        );
      };

    return (
        <Swipeable renderRightActions={this.renderRightActions}>
        <NotificationContainer>
            
                <View style={{backgroundColor: 'red', width: 35, height: 35, marginRight: 25}}></View>
                <TextContainer>
                    <Text>{props.text}</Text>
                </TextContainer>
           
            </NotificationContainer>
         </Swipeable>
      );
}

export default Notification;
