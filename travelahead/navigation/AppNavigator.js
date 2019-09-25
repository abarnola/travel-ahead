import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import AuthLoadingScreen from '../screens/auth/AuthLoadingScreen';
import SignInScreen from '../screens/auth/SignInScreen'
import HomeScreen from '../screens/HomeScreen';

const AuthNavigator = createStackNavigator({
   SignIn: SignInScreen, 
   //SignUp: SignUpScreen
});

const MainNavigator = createStackNavigator({
  Home: HomeScreen
});

const AppNavigator = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    AuthStack: AuthNavigator,
    MainStack: MainNavigator
  },
  {
    initialRouteName: 'MainStack'
  }
);

export default createAppContainer(AppNavigator);
