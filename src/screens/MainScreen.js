import React, { useContext, useEffect, useCallback } from 'react';
import { View, StyleSheet, FlatList, Image } from 'react-native';
import { AddTodo } from '../components/AddTodo';
import { Todo } from '../components/Todo';
import { AppLoader } from '../components/ui/AppLoader';
import { AppText } from '../components/ui/AppText';
import { ScreenContext } from '../context/screen/screenContext';
import { TodoContext } from '../context/todo/todoContext';
import { THEME } from '../theme';
import { AppButton } from '../components/ui/AppButton';

export const MainScreen = () => {
	const { addTodo, todos, removeTodo, fetchTodos, loading, error } = useContext(
		TodoContext
	);
	const { changeScreen } = useContext(ScreenContext);

	const loadTodos = useCallback(async () => await fetchTodos(), [fetchTodos]);

	useEffect(() => {
		loadTodos();
	}, []);

	if (loading) {
		return <AppLoader />;
	}

	if (error) {
		return (
			<View style={styles.center}>
				<AppText style={styles.error}>{error}</AppText>
				<AppButton onPress={loadTodos}>Reload</AppButton>
			</View>
		);
	}

	let content = (
		<FlatList
			keyExtractor={(item) => item.id}
			data={todos}
			renderItem={({ item }) => (
				<Todo todo={item} onRemove={removeTodo} onOpen={changeScreen} />
			)}
		/>
	);
	if (todos.length === 0) {
		content = (
			<View style={styles.imgWrap}>
				<Image
					style={styles.image}
					source={require('../../assets/no-items.png')}
				/>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			{content}
			<AddTodo onSubmit={addTodo} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imgWrap: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 10,
		height: 300,
	},
	image: {
		width: '100%',
		height: '100%',
		resizeMode: 'contain',
	},
	center: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	error: {
		fontSize: 20,
		color: THEME.DANGER_COLOR,
	},
});
