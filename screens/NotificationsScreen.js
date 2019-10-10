import React from 'react'
import { Button, Text, View, AsyncStorage, SafeAreaView, ScrollView } from 'react-native'
import Notification from '../components/Notification';

const NotificationsScreen = (props) => {
    /*
        Schema for notifs:
        notifications: {
            monthYear: [
                {
                    icon: '', //icon to display
                    page: '', //page to take you too on press
                    text: '', //text to display
                }
            ]
        }
    */
    const getNotifications = () => {
        //Notifications Service
        //format below
    }

    return (
      <SafeAreaView style={{}}>
          <ScrollView alwaysBounceVertical bounces style={{width: '100%', height: '100%'}}>
            <Notification text="Hey, don't forget! It's time to neuter Marcel. A man with no balls is no man at all."></Notification>
            <Notification text="chickentitfanatic just followed you home."></Notification>
          </ScrollView>
      </SafeAreaView>
    );
}

export default NotificationsScreen;