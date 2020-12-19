import React from 'react';
import { TouchableOpacity, View, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { THEME } from '../../theme';
import { AppTextBold } from './AppTextBold';

export const AppButton = ({ children, onPress, color = THEME.MAIN_COLOR }) => {
	return (
		<TouchableNativeFeedback onPress={onPress} activeOpacity={0.7}>
			<View style={{ ...styles.button, backgroundColor: color }}>
				<AppTextBold style={styles.text}>{children}</AppTextBold>
			</View>
		</TouchableNativeFeedback>
	);
};

const styles = StyleSheet.create({
	button: {
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 5,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#fff',
	},
});
