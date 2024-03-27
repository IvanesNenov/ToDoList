import '@testing-library/jest-dom'
import { render,fireEvent  } from "@testing-library/react"
import {TodoInput} from '@/components';
import {todoListStore} from '@/store';


jest.mock('@/store', () => ({
	todoListStore: {
		addTodo: jest.fn()
	}
}));

describe('TodoInput App', () => {
	it('renders without crashing', () => {
		render(<TodoInput/>);
	});

	it('adds a new todo item', () => {
		const { getByTestId } = render(<TodoInput/>);
		const input = getByTestId('addTaskInput');
		const addButton = getByTestId('addButton');
		fireEvent.change(input, { target: { value: 'New Todo' } });
		fireEvent.click(addButton);
		expect(todoListStore.addTodo).toHaveBeenCalledWith('New Todo');
	});

	it('adds a new todo when pressing enter key', () => {
		const { getByTestId } = render(<TodoInput />);
		const input = getByTestId('addTaskInput');

		fireEvent.change(input, { target: { value: 'New Todo' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

		expect(todoListStore.addTodo).toHaveBeenCalledWith('New Todo');
	});

	it('clears input value after adding todo', () => {
		const { getByTestId } = render(<TodoInput />);
		const input = getByTestId('addTaskInput');

		fireEvent.change(input, { target: { value: 'New Todo' } });
		fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

		expect(input).toHaveValue('');
	});
})