import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { ReactModoroNavigator } from "../../containers";
import { PreSplash } from "../../components";
import PropTypes from 'prop-types';

export default class AppContainer extends Component {
	// static navigationOptions = {
	// 	title: 'welcome'
	// };
	static proptTypes = {
		isAuthenticating: PropTypes.bool.isRequired
	};
	static defaultProps ={
		isAuthenticating: true
	};
  	render () {
	    return (
	      <View style={{flex:1}}>
	      	{this.props.isAuthenticating === true 
		      	? <PreSplash /> 
		      	: <ReactModoroNavigator />
	      	}
	      </View>
	    )
  }
}
