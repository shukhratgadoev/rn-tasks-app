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
			<View style={styles.container}>
				<View style={styles.button}>
					<AntDesign
						name='plus'
						size={30}
						color='#3700B3'
						onPress={pressHandler}
					/>
				</View>
			</View>
			<TextInput
				style={styles.input}
				onChangeText={setValuse}
				value={value}
				placeholder='Add task'
				autoCorrect={false}
				autoCapitalize='none'
			/>
		</View>
	);
};
const styles = StyleSheet.create({
	block: {
		height: 65,
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		borderWidth: 1,
		borderColor: '#eee',
		borderRadius: 10,
		marginBottom: 10,
		elevation: 2,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
	},
	input: {
		width: '80%',
		height: 60,
		padding: 10,
		borderStyle: 'solid',
		borderBottomWidth: 2,
		borderBottomColor: THEME.MAIN_COLOR,
		backgroundColor: '#fff',
		fontSize: 18,
	},
	container: {
		justifyContent: 'center',
		// alignItems: 'flex-end',
	},
	button: {
		// position: 'absolute',
		// width: 60,
		// height: 60,
		// borderRadius: 60 / 2,
		// alignItems: 'center',
		// justifyContent: 'center',
		// shadowRadius: 10,
		// shadowColor: '#F02A4B',
		// shadowOpacity: 0.3,
		// shadowOffset: { height: 10 },
		// backgroundColor: '#F02A4B',
	},
});
