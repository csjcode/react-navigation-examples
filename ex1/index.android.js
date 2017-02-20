import React from 'react';
import {
  AppRegistry,
  Text, View
} from 'react-native';
import {Button} from 'nachos-ui';
// import App from './src/App'
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Welcome to EX1',
  };

  constructor(props){
      super(props);
      this.state = { onButton:1 };
  }

  onButtonPress(){
    const buttonOnStatus = this.state.onButton;
    this.setState({onButton:this.state.onButton+1});
    return (alert(buttonOnStatus));
  }

  render() {
    return (
      <View>
        <View>
          <Text style={{padding:20, fontSize: 30}}>
          Hello, this is EX1 Navigation!
          </Text>
        </View>
        <View>
          <Text style={{padding:20, fontSize: 20}}>
            We're testing out this app to see if it works
          </Text>
        </View>
        <View>
          <Button
            kind='squared'
            style={{ marginLeft:40, marginRight:40}}
            type='primary'
            onPress={this.onButtonPress.bind(this)}
          >This is a button</Button>
        </View>
      </View>
    );
  }
}

const ex1 = StackNavigator({
  Home: { screen: HomeScreen },
});

AppRegistry.registerComponent('ex1', () => ex1);
