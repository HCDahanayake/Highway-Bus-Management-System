import { createStackNavigator } from 'react-navigation';

const AppNavigator = createStackNavigator(
  {
    Home: { screen: Menu },
    ItemDetails: { screen: ItemDetails },
  },
  {
    initialRouteName: 'Home',
  }
);
