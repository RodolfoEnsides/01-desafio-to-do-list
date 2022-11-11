import { useState } from 'react';
import { Trash, Circle, Check} from 'phosphor-react';
import styles from './Task.module.css'

import { TasksProps } from '../../App'

interface Props {
  task: TasksProps;
  onDeleteTaskById: (taskId: number) => void;
  onCheckTaskById: (taskId: number) => void;
}

export function Task({ task, onDeleteTaskById, onCheckTaskById }: Props) {
  const [checked, setChecked] = useState(task.completed)

  function handleCheckTask() {
    checked ? setChecked(false) : setChecked(true);
    task.completed = !checked;
    onCheckTaskById(task.id)
  }

  function handleDeleteTaskById() {
    onDeleteTaskById(task.id)
  }

  return (
    <div className={styles.task}>
      <button className={checked ? styles.checkButton : styles.nCheckButton} onClick={handleCheckTask}>
       {checked ? <Check size={16} /> : <Circle size={22}/>}
      </button>

      <p className={checked ? styles.taskChecked : styles.taskUnchecked}>{task.title}</p>

      <button className={styles.deleteButton} onClick={handleDeleteTaskById}> <Trash size={18} /> </button>
    </div>
  )
}
