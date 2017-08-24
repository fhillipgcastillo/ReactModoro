import React, { PropTypes, Component } from 'react'
import { View, StyleSheet, Image, Animated } from 'react-native'

export default class PreSplash extends Component {
  static propTypes = {}
  state = {}
  render () {
    return (
      <View>
        <Image 
          style={{}}
          source={require('../../images/logo.png')}
        />
      </View>
    )
  }
}
