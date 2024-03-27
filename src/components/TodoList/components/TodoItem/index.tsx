import React, {useCallback} from 'react';
import {Trash2} from 'react-feather';
import {ITask, } from '@/store/Task';
import Checkbox from '@/components/TodoList/components/Checkbox';
import {todoListStore} from '@/store';
import {Text, TodoItemWrapper} from './index.styles';
import {observer} from 'mobx-react-lite';

interface TodoItemProps {
	task: ITask
}



function TodoItem({task}:TodoItemProps) {

	const {completeTodo,remoteTodo} =todoListStore

	const handleClickComplete = useCallback(()=>{
		completeTodo(task.id)
	},[task])

	const handleClickDelete = useCallback(()=>{
		remoteTodo(task.id)
	},[task])

	return (
		<TodoItemWrapper>
			<Checkbox
					id={task.id}
					checked={task.complete}
					handleChangeChecked={handleClickComplete}
				/>
				<Text isComplete={task.complete}>{task.title}</Text>
			<button data-testid="delete" onClick={handleClickDelete}>
				<Trash2/>
			</button>
		</TodoItemWrapper>
	);
}

export default  observer(TodoItem);