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
    const { navigate } = this.props.navigation;
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
        <View style={{marginTop:20}}>
          <Button
            key="1"
            kind='squared'
            style={{ marginLeft:50, marginRight:50}}
            textStyle={{ fontSize:20}}
            type='primary'
            onPress={this.onButtonPress.bind(this)}
          >Increment Stuff
          </Button>
        </View>
        <View>
          <Button
            key="2"
            kind='squared'
            style={{ marginTop: 60, marginLeft:50, marginRight:50}}
            textStyle={{ fontSize:20}}
            type='danger'
            onPress={() => navigate('Chat', { user: 'Chris' })}
          >Chat with Chris
        </Button>
        </View>

      </View>
    );
  }
}

class ChatScreen extends React.Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `Chat with ${state.params.user}`,
  };
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chat with {params.user}</Text>
      </View>
    );
  }
}


const ex1 = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('ex1', () => ex1);
