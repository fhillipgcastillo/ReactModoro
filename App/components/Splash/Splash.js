import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, Image, Button, Dimensions } from 'react-native'
// import { LoginButton } from 'react-native-fbsdk';
import { colors, fontSizes } from "../../styles";
const { height } = Dimensions.get('window'); 

Splash.propTypes = {
	onLoginFinished: PropTypes.func.isRequired
};

/*this should be facebook login button*/
class LoginButton extends React.Component {
	manageLoginFinish = (callback)=>{

	};
	static propTypes = {
		onLoginFinished: PropTypes.func.isRequired,
	};
	render(){
		return (
			<Button
				title="Login with Facebook"
	    		color="#841584"
	    		onPress={this.props.onLoginFinished}
	    		onLoginFinished={this.props.onLoginFinished}
	    	/>
		)
	}
}

export default function Splash (props) {
  return (
    <View style={styles.container}>
	    <View>
	    	<Image source={require('../../images/logo.png')} style={styles.image} />
			<Text style={styles.slogan}>
				React Modoro
			</Text>
	    </View>
	    <View style={styles.loginContainer}>
	    	<LoginButton 
	    		style={styles.assuranceText}
	    		onLoginFinished={this.props.onLoginFinished} />
	    	<Text>Don't Worry.We don't post anything to Facebook.</Text>
	    </View>
    </View>
  )
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.white,
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: 50,
		paddingBottom: 50
	},
	image: {
		height: height * .4 > 300 ? 300 : height * .4,
		resizeMode: 'contain'
	},
	slogan: {
		color: colors.blue,
		fontSize: 40,
		margin: 20,
		textAlign:'center'
	},
	loginContainer: {
		paddingLeft: 30,
		paddingRight: 30,
		alignItems: 'center'
	},
	assuranceText: {
		color: colors.secondary,
		fontSize: fontSizes.secondary,
		textAlign: 'center'
	}
});
