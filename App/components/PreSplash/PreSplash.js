import React, { PropTypes, Component } from 'react'
import { View, Text, StyleSheet, Image, Animated, Button } from 'react-native'

export default class PreSplash extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <View>
        <Image 
          source={require('./Images/logo.png')}
          style={{width: 360, height: 360}}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 360,
    maxHeight: 360
  }
});
