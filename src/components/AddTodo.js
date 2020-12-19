import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Keyboard, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { THEME } from '../theme';

export const AddTodo = ({ onSubmit }) => {
	const [value, setValuse] = useState('');

	const pressHandler = () => {
		if (value.trim()) {
			onSubmit(value);
			setValuse('');
			Keyboard.dismiss();
		} else {
			Alert.alert('name todo not be empety');
		}
	};
	return (
		<View style={styles.block}>
			<TextInput
				style={styles.input}
				onChangeText={setValuse}
				value={value}
				placeholder='new todo...'
				autoCorrect={false}
				autoCapitalize='none'
			/>
			<View style={styles.container}>
				<View style={styles.button}>
					<AntDesign
						name='plus'
						size={24}
						color='#fff'
						onPress={pressHandler}
					/>
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	block: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 15,
	},
	input: {
		width: '80%',
		height: 60,
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: THEME.MAIN_COLOR,
		backgroundColor: '#F5F5F5',
		fontSize: 18,
	},
	container: {
		justifyContent: 'center',
		alignItems: 'flex-end',
	},
	button: {
		position: 'absolute',
		width: 60,
		height: 60,
		borderRadius: 60 / 2,
		alignItems: 'center',
		justifyContent: 'center',
		shadowRadius: 10,
		shadowColor: '#F02A4B',
		shadowOpacity: 0.3,
		shadowOffset: { height: 10 },
		backgroundColor: '#F02A4B',
	},
});
