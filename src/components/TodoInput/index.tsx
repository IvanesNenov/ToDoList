import React, {useState} from 'react';
import {WrapperInput} from './index.styles';
import {Plus} from 'react-feather';
import {todoListStore} from '@/store';



const TodoInput:React.FC=() => {
  const [inputValue,setInputValue]=useState<string>('')
  const {addTodo} = todoListStore


  const handleSubmitNewTask =()=>{
    addTodo(inputValue)
    setInputValue('')
  }

    return (
        <WrapperInput>
             <input
               data-testid="addTaskInput"
               type="text"
               value={inputValue}
               placeholder='Введите задачу'
               onChange={(event)=>setInputValue(event.target.value)}
               onKeyDown={(event)=>{
                 if(event.key==='Enter'){
                   handleSubmitNewTask()
                 }
               }}
             />
          <button
            data-testid='addButton'
            aria-label='Add'
            onClick={handleSubmitNewTask}
         >
            <Plus/>
            Добавить
          </button>

        </WrapperInput>
    );
};

export default TodoInput