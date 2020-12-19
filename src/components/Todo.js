import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { Ionicons } from '@expo/vector-icons';
import { AppText } from './ui/AppText';

export const Todo = ({ todo, onRemove, onOpen }) => {
	const [toggleCheckBox, setToggleCheckBox] = useState(false);
	return (
		<TouchableOpacity
			onPress={() => onOpen(todo.id)}
			onLongPress={onRemove.bind(null, todo.id)}>
			<View style={styles.todo}>
				<View style={styles.wrap}>
					<Ionicons name='md-menu' size={24} color='black' />
					<AppText style={styles.title}>{todo.title}</AppText>
				</View>

				<CheckBox
					disabled={false}
					value={toggleCheckBox}
					onValueChange={(newValue) => setToggleCheckBox(newValue)}
				/>
			</View>
		</TouchableOpacity>
	);
};
const styles = StyleSheet.create({
	wrap: {
		flexDirection: 'row',
	},
	icon: {
		marginRight: 10,
	},
	todo: {
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
		justifyContent: 'space-between',
	},
	title: {
		fontSize: 18,
		color: '#708090',
	},
});
