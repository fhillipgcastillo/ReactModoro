import React, { PropTypes } from 'react'
import { View, StyleSheet, Text, DrawerLayoutAndroid } from 'react-native'
import {HomeContainer, LeaderboardContainer } from '~/containers';
import Drawer from './Drawer.js';

FooterTabs.propTypes = {
	activeFooterTab: PropTypes.string.isRequired,
	navigator: PropTypes.func.isRequired,
	onTabSelect: PropTypes.func.isRequired
};

export default function FooterTabs (props) {
	const closeDrawer = () => this.drawer.closeDrawer();
	const openDrawer = () => this.drawer.openDrawer();
  return (
    <DrawerLayoutAndroid 
    	ref={(drawer)=> this.drawer = drawer}
    	drawerWidth={290}
    	renderNavigationView={()=>(
    		<Drawer 
    			activeFooterTab={props.activeFooterTab}
    			onTabSelect={props.onTabSelect}
    			close={closeDrawer}/>
    	)}>
    	{props.activeFooterTab === 'home'
    			? <HomeContainer openDrawer={openDrawer} navigator={props.navigator} />
    			: <LeaderboardContainer openDrawer={openDrawer} navigator={props.navigator} /> }
    </DrawerLayoutAndroid>
  )
}

const styles = StyleSheet.create({

})
