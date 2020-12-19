import React, { useState, useContext } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { EditModal } from '../components/EditModal';
import { AppCard } from '../components/ui/AppCard';
import { THEME } from '../theme';
import { AppTextBold } from '../components/ui/AppTextBold';
import { AppButton } from '../components/ui/AppButton';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';

export const TodoScreen = () => {
	const { todos, updateTodo, removeTodo } = useContext(TodoContext);
	const { todoId, changeScreen } = useContext(ScreenContext);

	const todo = todos.find((t) => t.id === todoId);

	const [modal, setModal] = useState(false);

	const saveHandler = async (title) => {
		await updateTodo(todo.id, title);
		setModal(false);
	};
	return (
		<View>
			<EditModal
				value={todo.title}
				visible={modal}
				onCancel={() => setModal(false)}
				onSave={saveHandler}
			/>
			<AppCard style={styles.card}>
				<AppTextBold style={styles.title}>{todo.title}</AppTextBold>
				<AppButton onPress={() => setModal(true)}>
					<FontAwesome name='edit' size={24} color='white' />
				</AppButton>
			</AppCard>
			<View style={styles.buttons}>
				<View style={styles.button}>
					<AppButton
						color={THEME.GREY_COLOR}
						onPress={() => changeScreen(null)}>
						<AntDesign name='back' size={24} color='white' />
					</AppButton>
				</View>

				<View style={styles.button}>
					<AppButton
						color={THEME.DANGER_COLOR}
						onPress={() => removeTodo(todo.id)}>
						<Feather name='trash-2' size={24} color='black' />
					</AppButton>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	buttons: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	card: {
		marginBottom: 20,
		padding: 15,
	},
	button: {
		width: Dimensions.get('window').width / 3,
	},
	title: {
		fontSize: 20,
	},
});
