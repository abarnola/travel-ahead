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
  return (
    <BottomTabBar {...props} style={{ 
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      backgroundColor: "#FFE8C4"
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
  Home: {
    screen: HomeScreen,
    title: 'Home'
  }
}, 
{
  tabBarComponent: props => (
    <BottomTabs {...props} ></BottomTabs>
  ),
  initialRouteName: 'Home',
  navigationOptions: ({ navigation }) => {
    const { routeName } = navigation.state.routes[navigation.state.index];
    return {
      headerTitle: routeName
    };
  }
  /*navigationOptions: {
      drawerLabel: 'Drawer',
      drawerIcon: ({ tintColor }) => (
        <Text>Drawer!</Text>
      ),
     // headerTitle: <LogoTitle />,
     headerTitle: <Text style={{color: 'black'}}>Header</Text>,
      headerRight: (
        <Button
          onPress={() => alert('This is a button!')}
          title="Test"
          color="#aaa"
        />
      )
    }*/
});


const MainNavigator = createStackNavigator(
  {
    Tabs: TabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerRight: (
          <Text
            style={{paddingRight: 5}}
            onPress={() => navigation.openDrawer()}>
            Side
          </Text>
        )
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
