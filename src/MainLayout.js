import React, { useState, useContext } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import { Navbar } from './components/Navbar';
import { TodoContext } from './context/todo/todoContext';
import { MainScreen } from './screens/MainScreen';
import { TodoScreen } from './screens/TodoScreen';
import { ScreenContext } from './context/screen/screenContext';

export const MainLauout = () => {
	const { todoId } = useContext(ScreenContext);

	return (
		<View style={styles.wrapper}>
			<Navbar title='Task list for a Day!' />
			<View style={styles.container}>
				{todoId ? <TodoScreen /> : <MainScreen />}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 30,
		paddingVertical: 20,
		flex: 1,
	},
	wrapper: {
		flex: 1,
	},
});
