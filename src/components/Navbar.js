import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';

export const Navbar = ({ title }) => {
	return (
		<View style={styles.navbar}>
			<View style={styles.top}></View>
			<AppTextBold style={styles.text}>{title}</AppTextBold>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		height: 90,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: '#6200EE',
		paddingBottom: 10,
		borderBottomWidth: 0.6,
	},
	top: {
		height: 40,
		width: '100%',
		backgroundColor: '#3700B3',
		position: 'absolute',
		top: 0,
	},
	text: {
		color: '#fff',
		fontSize: 20,
		fontWeight: '500',
	},
});
