import { PlusCircle } from 'phosphor-react';

import styles from './Header.module.css'
import todoLogo from '../../assets/todo-logo.svg';
import { ChangeEvent, FormEvent, useState } from 'react';

interface CommentProps {
  onAddTaskToList: (taskTitle: string) => void;
}

export function Header({onAddTaskToList}: CommentProps) {
  const [taskTitle, setTaskTitle] = useState('')

  function onChangeTaskTile(event: ChangeEvent<HTMLInputElement>) {
    setTaskTitle(event.target.value)
  }

  function handleSubmitTaskToList(event: FormEvent){
    event?.preventDefault();

    onAddTaskToList(taskTitle)
    setTaskTitle('')
  }

  return (
    <header className={styles.header}>
        <img src={todoLogo} alt="" />

        <form className={styles.formNewTasks} onSubmit={handleSubmitTaskToList}>
          <input type='text' placeholder='Adicione uma nova tarefa' onChange={onChangeTaskTile} value={taskTitle}/>
          <button type='submit'>Criar <PlusCircle size={16}/> </button>
        </form>
    </header>
  )
}
