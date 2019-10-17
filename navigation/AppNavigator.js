import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'
import NotificationsScreen from '../screens/NotificationsScreen';
import TripsScreen from '../screens/TripsScreen';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer';
import SideMenu from '../components/SideMenu';
import { View, Text, Button, Dimensions} from 'react-native';

//Testing


const SearchScreen = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}
const AddTripScreen = () => {
  return (
    <View>
      <Text>AddTrip</Text>
    </View>
  )
}
const SettingsScreen = () => {
  return(
    <View>
      <Text>Settings</Text>
    </View>
  )
}
//
const BottomTabs = (props) => {
  console.log(props);
  return (
    <BottomTabBar {...props} style={{ 
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: props.theme.primaryColor
     }} />
  )
}
const TabNavigator = createBottomTabNavigator({
  Trips: {
    screen: TripsScreen
  },
  Search: {
    screen: SearchScreen
  },
  AddTrip: {
    screen: AddTripScreen
  },
  Notifications: {
    screen: NotificationsScreen
  },
  Profile: {
    screen: ProfileScreen
  },
}, 
{
  initialRouteName: 'Trips',
  /*tabBarComponent: (props) => (
    <BottomTabs {...props} ></BottomTabs>
  ),*/
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName,
    };
  },
  
  defaultNavigationOptions: ({ navigation, screenProps }) => {
    //console.log(screenProps)
    return {
      tabBarOptions: {
        style: {
          backgroundColor: screenProps.theme.primaryColor,
        },
      }
    };
  }
 
  /*
  transitionConfig: () => ({
    screenInterpolator: (sceneProps) => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const width = layout.initWidth;
        const translateX = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [width, 0, 0],
        });
        console.log('transition')
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });

        return { opacity, transform: [{ translateX }] };
    }
  }),*/
});


const MainNavigator = createStackNavigator(
  {
    Tabs: TabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation, screenProps }) => {
      //console.log(screenProps)
      return {
        headerRight: (
          <Text
            style={{paddingRight: 5}}
            onPress={() => navigation.openDrawer()}>
            Side
          </Text>
        ),
        headerStyle: {
          backgroundColor: screenProps.theme.primaryColor
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      };
    }
  }
);


const AuthNavigator = createStackNavigator({
   SignIn: SignInScreen, 
   SignUp: SignUpScreen
},
{
  initialRouteName: 'SignIn'
});

const DrawerNavigator = createDrawerNavigator({
  Home: {
    screen: MainNavigator
  },
},
{
  //drawerBackgroundColor: "#ddd",
  drawerPosition: "right",
  drawerType: "front",
  contentComponent: SideMenu,
  drawerWidth: Dimensions.get('window').width / 2,
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthNavigator,
    MainStack: DrawerNavigator//MainNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(AppNavigator);
