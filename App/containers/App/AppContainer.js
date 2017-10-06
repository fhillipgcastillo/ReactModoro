import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux';
import { ReactModoroNavigator } from "../../containers";
import { PreSplash, Splash } from "../../components";
import PropTypes from 'prop-types';
import { firebaseAuth } from '~/config/constants'
import { onAuthChange } from '~/redux/modules/authentication'


class AppContainer extends Component {
	// static navigationOptions = {
	// 	title: 'welcome'
	// };
	static proptTypes = {
		isAuthenticating: PropTypes.bool.isRequired,
		isAuthed: PropTypes.bool.isRequired
	};
	componentDidMount (){
		firebaseAuth.onAuthStateChanged((user)=> this.props.dispatch(onAuthChange(user)))
	}
	handleClick (){
		var self = this;
		this.props.isAuthenticating = true;

		setTimeout(function(){
			self.props.isAuthed = true;
			self.props.isAuthenticating = false;
		}, 2000)
	};
	render () {
    return (
      <View style={{flex:1}}>
      	{this.props.isAuthenticating === true
	      	? <PreSplash />
					: <ReactModoroNavigator isAuthed={this.props.isAuthed} />
      	}
      </View>
    )
  }
};

function mapStateToProps({authentication}){
	return {
		isAuthenticating: authentication.isAuthenticating,
		isAuthed: authentication.isAuthed,
	}
};

/*send the app state from redux to AppContainer*/
export default connect(
	mapStateToProps
)(AppContainer)
