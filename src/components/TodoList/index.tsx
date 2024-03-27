import React from 'react';
import { observer  } from "mobx-react-lite";
import {todoListStore} from '@/store'
import {EmptyList} from '@/components/TodoList/index.styles';
import {TodoItem} from './components';

 function TodoList(){

    return (
        <div>
          {todoListStore.todoList.length === 0 && (
            <EmptyList>Список задач пуст</EmptyList>
          )}
            {todoListStore.todoList.map((task)=>(
              <TodoItem key={task.id} task={task}/>
              )
            )}
        </div>
    )
}

export default observer(TodoList)