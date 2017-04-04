import React, { Component } from 'react';
import {	View, Text,
					TouchableWithoutFeedback,
					LayoutAnimation
				} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
	renderDescription() {
		const { library, expanded } = this.props;
		if (expanded) {
			return(
				<CardSection>
					<Text style={
						{ flex: 1, fontStyle: 'italic',
						marginHorizontal: 20, fontSize: 12}}>
						{library.description}
					</Text>
				</CardSection>
			)
		}
	}

	componentWillUpdate() {
		LayoutAnimation.spring()
	}

	render() {
		const { titleStyle } = styles;
		const { title, id } = this.props.library

		return(
			<TouchableWithoutFeedback onPress={
				() => this.props.selectLibrary(id)
			}>
				<View>
					<CardSection>
						<Text style={titleStyle}>{title}</Text>
					</CardSection>
					{this.renderDescription()}
				</View>
			</TouchableWithoutFeedback>
		);
	}
}

const styles = {
	titleStyle: {
		paddingLeft: 15,
		fontSize: 18
	}
}

const mapStateToProps = (state, ownProps) => {
	const expanded = state.selectedLibraryId === ownProps.library.id
	return { expanded }
}

const connect_helper = connect(mapStateToProps, actions);
export default connect_helper(ListItem);