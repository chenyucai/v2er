'use strict';

var React = require('react-native');

var {
	StyleSheet
} = React;

module.exports = StyleSheet.create({
	container: {
		backgroundColor: '#efefef',
		flex:1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center'
	},
	nodeContainer: {
		backgroundColor: '#efefef'
	},
	loadingText: {
		fontSize: 25,
		textAlign: 'center',
		marginTop: 10,
		marginBottom: 10,
		marginLeft: 10,
		marginRight: 10,
		color: '#666E74',
		flex:1
	},
	nodeViewContainer: {
		backgroundColor: '#ffffff',
		flex:1,
		marginBottom: 20,
		borderTopWidth: 1,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderColor: '#dedede',
		justifyContent: 'center'
	},
	nodeView: {
		flex: 1,
		padding: 10
	},
	nodeNumContainer: {
		width: 60,
		backgroundColor: '#969cb1',
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
		margin: 20,
		height: 24,
		borderRadius: 12
	},
	nodeNum: {
		color: '#efefef'
	},
	nodeText: {
		fontSize: 16,
		color: '#666E74',
		fontWeight: '600'
	},
	nodeHeader: {
		fontSize: 14,
		color: '#787883',
		fontWeight: '400'
	},
	nodeFooter: {
		fontSize: 12,
		color: '#787883',
		fontWeight: '200'
	}
});