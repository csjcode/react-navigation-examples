import React from 'react';
import {
  AppRegistry,
  Text,
} from 'react-native';
// import App from './src/App'
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome to EX1',
  };
  render() {
    return <Text style={{padding:20, fontSize: 30}}>Hello, this is EX1 Navigation!</Text>;
  }
}

const ex1 = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('ex1', () => ex1);
