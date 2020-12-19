import React from 'react';
import { View, StyleSheet } from 'react-native';
import { THEME } from '../theme';
import { AppTextBold } from './ui/AppTextBold';
export const Navbar = ({ title }) => {
	return (
		<View style={styles.navbar}>
			<AppTextBold style={styles.text}>{title}</AppTextBold>
		</View>
	);
};

const styles = StyleSheet.create({
	navbar: {
		height: 80,
		alignItems: 'center',
		justifyContent: 'flex-end',
		backgroundColor: THEME.MAIN_COLOR,
		paddingBottom: 10,
		borderBottomColor: '#A9A9A9',
		borderBottomWidth: 0.6,
	},
	text: {
		color: '#000',
		fontSize: 20,
	},
});
