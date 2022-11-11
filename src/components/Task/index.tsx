import { useState } from 'react';
import { Trash, Circle, Check} from 'phosphor-react';
import styles from './Task.module.css'

import { TasksProps } from '../../App'

interface Props {
  task: TasksProps,
}

export function Task({ task }: Props) {
  const [checked, setChecked] = useState(false)

  function handleCheckTask() {
    checked ? setChecked(false) : setChecked(true);
    task.completed = !checked;
    console.log(task)
  }

  return (
    <div className={styles.task}>
      <button className={checked ? styles.checkButton : styles.nCheckButton} onClick={handleCheckTask}>
       {checked ? <Check size={16} /> : <Circle size={22}/>}
      </button>

      <p>{task.title}</p>

      <button className={styles.deleteButton}> <Trash size={18} /> </button>
    </div>
  )
}
