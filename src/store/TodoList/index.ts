import {makeAutoObservable, } from 'mobx'
import { makePersistable } from 'mobx-persist-store';

import {ITask, Task} from '@/store/Task';


interface ITodoListStore {
    todoList: ITask[];
    addTodo:(title:string)=> void;
    remoteTodo:(id:string)=> void;
    completeTodo:(id:string)=> void;
}

export class TodoList implements ITodoListStore{
 todoList:ITask[] = []

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true })
      makePersistable(this, {
          name: 'TodoListStore',
          properties: ['todoList'],
          storage: window.localStorage,
      }
      );
    }

    addTodo=(title:string)=>{
        const newTask = new Task(title)
        this.todoList.push(newTask)
    }
    remoteTodo=(todoId:string)=>{
        this.todoList = this.todoList.filter(todo=>todo.id!== todoId)
    }

  completeTodo=(todoId:string)=>{
    this.todoList = this.todoList.map(todo=>todo.id=== todoId? {...todo,complete:!todo.complete}: todo)
  }

}


const todoListStore = new TodoList()

export  default todoListStore