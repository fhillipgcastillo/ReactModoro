import React, { PropTypes, Component } from 'react'
import { View, Text } from 'react-native'
import { FooterTabs} from "../../components"
import { connect } from 'react-redux'
import { setFooterTab } from '../../redux/modules/activeFooterTab'


/*class FooterTabsContainer extends Component {
  static propTypes = {
  	activeFooterTab: PropTypes.string.isRequired,
  	dispatch: PropTypes.func.isRequired,
  	navigator: PropTypes.object.isRequired,
  }
  state = {}
  render () {
    return (
     <FooterTabs 
     	activeFooterTab={this.props.activeFooterTab}
     	onTabSelect={(tab) => this.props.dispatch(activeFooterTab(tab))}
    />
    )
  }
};*/

function mapStateToProps ({activeFooterTab}, {navigator}){
	return {
		activeFooterTab,
		navigator
	}
};
/*export default connect(
	mapStateToProps
)(
	FooterTabsContainer
)*/

function mapDispatchToProps(dispatch){
	return {
		onTabSelect: (tab) => dispatch(setFooterTab(tab))
	}
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FooterTabs)