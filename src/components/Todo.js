import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { AppText } from './ui/AppText';

export const Todo = ({ todo, onRemove, onOpen }) => {
	const [toggleCheckBox, setToggleCheckBox] = useState(false);
	return (
		<View>
			<TouchableOpacity
				onPress={() => onOpen(todo.id)}
				onLongPress={onRemove.bind(null, todo.id)}>
				<View style={styles.todo}>
					<View style={styles.cCheckbox}></View>
					<View style={styles.wrap}>
						<AppText style={styles.title}>{todo.title}</AppText>
					</View>
				</View>
			</TouchableOpacity>
		</View>
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
		justifyContent: 'flex-start',
	},
	title: {
		fontSize: 20,
		color: '#000',
	},
	cCheckbox: {
		height: 28,
		width: 28,
		borderRadius: 50,
		borderWidth: 2,
		borderColor: '#6200EE',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 15,
	},
});
