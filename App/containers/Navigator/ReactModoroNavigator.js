import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PreSplashContainer } from "../../containers";
import { SplashContainer } from "../../containers";
import { StackNavigator } from 'react-navigation';
import {Text} from 'react-native';

// export default class ReactModoroNavigator extends Component {
//   renderScene (route, navigator) {
//     return <SplashContainer/>;
//   }
//   configureScene (route) {

//   }
//   render () {
//     return (
//       <Navigator 
//         renderScene={this.renderScene}
//         configureScene={this.configureScene}
//       />)
//   }
// }

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home Screen'
  };
  static propTypes = {
    isAuthenticating: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    isAuthenticating: true
  };
  render(){
    return (
      this.props.isAuthenticating ? 
      <PreSplashContainer /> :
      <SplashContainer />
    )
  }
};

export default ReactModoroNavigator = StackNavigator({
  Home: { screen: HomeScreen }
});
