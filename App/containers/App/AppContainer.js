import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { ReactModoroNavigator } from "../../containers";
import { PreSplash } from "../../components";
import PropTypes from 'prop-types';


class AppContainer extends Component {
	// static navigationOptions = {
	// 	title: 'welcome'
	// };
	static proptTypes = {
		isAuthenticating: PropTypes.bool.isRequired
	};
  	render () {
	    return (
	      <View style={{flex:1}}>
	      	{this.props.isAuthenticating === false 
		      	? <PreSplash /> 
		      	: <ReactModoroNavigator />
	      	}
	      </View>
	    )
  }
};

function mapStateToProps({authentication}){
	return {
		isAuthenticating: authentication.isAuthenticating
	}
};

/*send the app state from redux to AppContainer*/
export default connect(
	mapStateToProps
)(AppContainer)