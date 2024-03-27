import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { todoListStore } from '@/store';
import {TodoList} from '@/components';

jest.mock('@/store', () => ({
	todoListStore: {
		todoList: [],
	},
}));

describe('TodoList Component', () => {
	it('renders without crashing', () => {
		render(<TodoList />);
	});

	it('renders "Список задач пуст" when todoList is empty', () => {
		const { getByText } = render(<TodoList />);
		const emptyListText = getByText('Список задач пуст');

		expect(emptyListText).toBeInTheDocument();
	});

	it('renders TodoItems when todoList is not empty', () => {
		todoListStore.todoList = [
			{ id: '1asd', title: 'Task 1', complete: false },
			{ id: '2ascz', title: 'Task 2', complete: false },
		];

		const { getByText } = render(<TodoList />);
		const task1 = getByText('Task 1');
		const task2 = getByText('Task 2');

		expect(task1).toBeInTheDocument();
		expect(task2).toBeInTheDocument();
	});
});