import React, { PropTypes } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { DrawerHeader, DrawerTab } from './DrawerComponents'

Drawer.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	onTabSelect: PropTypes.func.isRequired,
	close: PropTypes.func.isRequired,
}

export default function Drawer (props) {
  return (
    <View>
      <DrawerHeader />
      <DrawerTab 
      	title="Home"
      	selected={props.activeFooterTab === 'home'}
      	onPress={() => {
      		props.onTabSelect('home');
      		props.close();/*minimize or close the size menu*/
      	}}
      	iconName='ios-home-outline'
      />
      <DrawerTab 
      	title="Leaderboard"
      	selected={props.activeFooterTab === 'leaderboard'}
      	onPress={() => {
      		props.onTabSelect('leaderboard');
      		props.close();
      	}}
      	iconName='ios-trophy-outline'/>
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		
	}
})
