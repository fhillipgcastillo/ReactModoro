import React, { PropTypes, Component } from 'react'
import { Splash } from '../../components'

export default class SplashContainer extends Component {
	handleLoginFinished = (error, result) => {
		if(error){
			console.warn('error in handleLoginFinished: ', error)
		} else if(result.isCancelled === true){
			console.log('Auth cancelled') 
		} else {
			console.log('AuthnSuccessfull')
		}
	}
  render () {
    return (
      <Splash onLoginFinished={this.handleLoginFinished}/>
    )
  }
}
