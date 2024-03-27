import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '@/components/TodoList/components/TodoItem';
import {todoListStore} from '@/store'
const mockTask = {
	id:'123ad',
	title:'New task',
	complete:false
}

jest.mock('@/store', () => ({
	todoListStore: {
		completeTodo: jest.fn(),
		remoteTodo: jest.fn(),
	},
}));


describe('TodoItem Component', () => {

	it('renders without crashing', () => {
		render(<TodoItem task={mockTask} />);
	});

	it('calls completeTodo when checkbox is clicked', () => {
		const { getByTestId } = render(<TodoItem task={mockTask} />);
		const checkbox = getByTestId('checkbox');
		fireEvent.click(checkbox);

		expect(todoListStore.completeTodo).toHaveBeenCalledWith(mockTask.id);
	});

	it('calls remoteTodo when delete button is clicked', () => {
		const { getByTestId } = render(<TodoItem task={mockTask} />);
		const deleteButton = getByTestId('delete');

		fireEvent.click(deleteButton);

		expect(todoListStore.remoteTodo).toHaveBeenCalledWith(mockTask.id);
	});
});