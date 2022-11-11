import { Task } from '../Task';

import styles from './TasksList.module.css'

import { TasksProps } from '../../App'

interface Props {
  tasks: TasksProps[],
}

export function TasksList({ tasks }: Props) {
  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter((task) => task.completed).length;

  return (
    <section className={styles.taskList}>
        <header>
            <div className={styles.taskInfos}>
                <strong className={styles.todo}>Tarefas criadas</strong>
                <span>0</span>
            </div>

            <div className={styles.taskInfos}>
                <strong className={styles.done}>Concluídas</strong>
                <span>{totalCompletedTasks} de {totalTasks}</span>
            </div>
        </header>

        <div className={styles.tasks}>
          {tasks.map((item) => (
              <Task 
                key={item.id}
                task={item}
              />
          ))}
        </div>
    </section>
  )
}
