import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet, Animated, Button } from 'react-native'
import { colors } from "../../styles";


export default class PreSplash extends Component {
  static propTypes = {}
  state = {
    rotation: new Animated.Value(0)
  }
  componentDidMount(){
    this.interval = setInterval (()=> {
      Animated.sequence([
        Animated.timing(this.state.rotation, {toValue:-1, duration:150}),
        Animated.timing(this.state.rotation, {toValue:1, duration:150}),
        Animated.timing(this.state.rotation, {toValue:0, duration:250})
      ]).start()
    }, 1000)
  }
  componentWillUnmount(){
    window.clearInterval(this.interval)
  }
  handlerLogin = function(props){

  };
  getTransform(){
    return {
      transform: [
        {
          rotate: this.state.rotation.interpolate({
            inputRange: [-1,1],
            outputRange: ['-20deg', '20deg']
          })
        }
      ]
    }
  }
  render () {
    return (
      <View style={styles.container}>
        <Animated.Image 
          source={require('./Images/logo.png')}
          style={[styles.image, this.getTransform()]}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: colors.white,/*"#fff",*/
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    resizeMode: 'contain',
    height: 340,
    width: 340,
  }
});
