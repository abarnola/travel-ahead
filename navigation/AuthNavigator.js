import { createStackNavigator } from 'react-navigation';

export default createStackNavigator({
  Offline: {
    screen: OfflineScreen,
    navigationOptions: {
      headerLeft: null
    }
  }
});
