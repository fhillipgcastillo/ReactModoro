import React, { PropTypes, Component } from 'react'
import { PreSplash } from '../../components'

export default class PreSplashContainer extends Component {
  static navigationOptions = {
  	title: 'Pres Splash'
  };
  render () {
  	return (
      <PreSplash />
    )
  }
}