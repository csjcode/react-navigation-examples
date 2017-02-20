import React from 'react';
import {
  AppRegistry,
  Text, ListView, View, Image
} from 'react-native';
import {Button} from 'nachos-ui';
// import App from './src/App'
import { StackNavigator } from 'react-navigation';

class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Chris St. John Profile',
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
      <Image
        source={{uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/64QH4OUMET.jpg'}}
        style={{flex:1, width: null, height: null}}>
        <View style={{flex:1, paddingTop:10}}>

          <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', paddingTop:10}}>
            <Image
              source={{uri: 'https://avatars0.githubusercontent.com/u/16966437?v=3&s=460'}}
              style={{width: 100, height: 100, margin:5}} />
            <Image
              source={{uri: 'https://pbs.twimg.com/profile_images/803167838403903488/vum7wJNk_400x400.jpg'}}
              style={{width: 100, height: 100, margin:5}} />
            <Image
              source={{uri: 'https://avatars0.githubusercontent.com/u/16966437?v=3&s=460'}}
              style={{width: 100, height: 100, margin:5}} />
          </View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{paddingTop:30, paddingLeft:30, paddingRight:30, fontSize: 25}}>
            Chris St. John profile page!
            </Text>
            <Text style={{paddingTop:20, paddingLeft:20, paddingRight:20, fontSize: 18}}>
              We're testing out this app to see if it works Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            </Text>
          </View>
          <View style={{marginTop:40}}>
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
          <View>
            <Button
              iconName='ios-at'
              key="2"
              kind='squared'
              style={{ marginTop: 120, marginLeft:50, marginRight:50}}
              textStyle={{ fontSize:20}}
              type='naked'
              onPress={() => navigate('Projects', { user: 'Chris' })}
            >Projects Portfolio
            </Button>
          </View>
          {/* <ListView>
          </ListView> */}

        </View>
    </Image>
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
      <Image
        source={{uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/64QH4OUMET.jpg'}}
        style={{flex:1, width: null, height: null}}>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text style={{paddingTop:20, paddingLeft:10, fontSize: 25}}>
          Chat with {params.user}
          </Text>
          <Text style={{paddingTop:20, paddingLeft:10, fontSize: 18}}>
            We're testing out this app to see if it works
          </Text>
        </View>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>

        </View>
    </Image>
    );
  }
}

class PortfolioScreen extends React.Component {
  static navigationOptions = {
    // Nav options can be defined as a function of the navigation prop:
    title: ({ state }) => `Portfolio by ${state.params.user}`,
  };
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <Image
        source={{uri: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/64QH4OUMET.jpg'}}
        style={{flex:1, width: null, height: null}}>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
          <Text style={{paddingTop:20, paddingLeft:10, fontSize: 25}}>
          Portfolio by {params.user}
          </Text>
          <Text style={{paddingTop:20, paddingLeft:10, fontSize: 18}}>
            This is a test PORTFOLIO Page!
          </Text>
        </View>
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>

        </View>
    </Image>
    );
  }
}


const ex1 = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Projects: { screen: PortfolioScreen },
});

AppRegistry.registerComponent('ex1', () => ex1);
