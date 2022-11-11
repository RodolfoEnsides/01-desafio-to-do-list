import { PlusCircle } from 'phosphor-react';

import styles from './Header.module.css'
import todoLogo from '../../assets/todo-logo.svg';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

interface CommentProps {
  onAddTaskToList: (taskTitle: string) => void;
}

export function Header({onAddTaskToList}: CommentProps) {
  const [taskTitle, setTaskTitle] = useState('')
  const isNewTaskTitleEmpity = taskTitle.length == 0;

  function onChangeTaskTile(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  function handleSubmitTaskToList(event: FormEvent){
    event?.preventDefault();

    onAddTaskToList(taskTitle)
    setTaskTitle('')
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  return (
    <header className={styles.header}>
        <img src={todoLogo} alt="" />

        <form className={styles.formNewTasks} onSubmit={handleSubmitTaskToList}>
          <input 
            type='text' 
            placeholder='Adicione uma nova tarefa' 
            value={taskTitle}
            onChange={onChangeTaskTile} 
            onInvalid={handleNewTaskInvalid}
            required
            />
          <button 
            type='submit' 
            disabled={isNewTaskTitleEmpity}
          >
            Criar 
            <PlusCircle size={16} />
          </button>
        </form>
    </header>
  )
}
