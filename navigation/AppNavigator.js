import React from 'react'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import SignInScreen from '../screens/auth/SignInScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen'
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs'


//Testing
import { View, Text } from 'react-native';
const SearchScreen = () => {
  return (
    <View>
      <Text>Search</Text>
    </View>
  )
}
const ItineraryScreen = () => {
  return (
    <View>
      <Text>Itinerary</Text>
    </View>
  )
}
//
const TabScreens = createBottomTabNavigator({
  Search: {
    screen: SearchScreen
  },
  Itinerary: {
    screen: ItineraryScreen
  },
  Profile: {
    screen: ProfileScreen
  },
  Home: {
    screen: HomeScreen,
    title: 'Home'
  }
}, 
{
  tabBarComponent: props => (
    <BottomTabBar {...props} style={{ borderTopColor: '#605F60' }} />
  ),
  initialRouteName: 'Home'
});

const AuthNavigator = createStackNavigator({
   SignIn: SignInScreen, 
   SignUp: SignUpScreen
},
{
  initialRouteName: 'SignIn'
});

const MainNavigator = createStackNavigator({
  Home: TabScreens
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthNavigator,
    MainStack: MainNavigator
  },
  {
    initialRouteName: 'AuthLoading'
  }
);

export default createAppContainer(AppNavigator);
