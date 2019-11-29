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
import { View, Text, Button, Dimensions, Platform} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

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
  props.tintColor = 'white';
  return (
    <BottomTabBar {...props} style={{ 
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
     }} />
  )
}
const TabNavigator = createBottomTabNavigator({
  Trips: {
    screen: TripsScreen,
    navigationOptions: { //TINT COLOR is set with activeTintColor
      tabBarIcon: ({ tintColor, focused }) => (
        //<MaterialIcons size={32} name={ Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home' } style={{ color: tintColor }} />
        <MaterialIcons size={32} name={ Platform.OS === 'ios' ? 'flight-takeoff' : 'flight-takeoff' } style={{ color: tintColor }} />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: { 
      tabBarIcon: ({ tintColor, focused }) => (
        //<MaterialIcons size={32} name={ Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home' } style={{ color: tintColor }} />
        <MaterialIcons size={32} name={ Platform.OS === 'ios' ? 'search' : 'search' } style={{ color: tintColor }} />
      )
    }
  },
  AddTrip: {
    screen: AddTripScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        //<MaterialIcons size={32} name={ Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home' } style={{ color: tintColor }} />
        <MaterialIcons size={32} name={ Platform.OS === 'ios' ? 'add' : 'add' } style={{ color: tintColor }} />
      )
    }
  },
  Notifications: {
    screen: NotificationsScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        <MaterialIcons size={32} name={ Platform.OS === 'ios' ? 'notifications' : 'notifications' } style={{ color: tintColor }} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor, focused }) => (
        //<MaterialIcons size={32} name={ Platform.OS === 'ios' ? (focused ? 'ios-home' : 'ios-home-outline') : 'md-home' } style={{ color: tintColor }} />
        <MaterialIcons size={32} name={ Platform.OS === 'ios' ? 'person' : 'person' } style={{ color: tintColor }} />
      )
    }
  },
}, 
{
  initialRouteName: 'Trips',
  /*tabBarComponent: (props) => {
    props.tintColor = 'red'
    return (
      <BottomTabs {...props} ></BottomTabs>
    )
  },*/
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
        activeTintColor: screenProps.theme.secondaryColor,
        inactiveTintColor: screenProps.theme.secondaryDark,
        showLabel: false
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
    initialRouteName: 'MainStack'
  }
);

export default createAppContainer(AppNavigator);
