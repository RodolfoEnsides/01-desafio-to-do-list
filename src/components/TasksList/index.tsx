import { Clipboard } from 'phosphor-react';
import { Task } from '../Task';

import { TasksProps } from '../../App'

import styles from './TasksList.module.css'

interface Props {
  tasks: TasksProps[];
  onDeleteTaskById: (taskId: number) => void;
  onCheckTaskById: (taskId: number) => void; 
}

export function TasksList({ tasks, onDeleteTaskById, onCheckTaskById}: Props) {
  const totalTasks = tasks.length;
  const totalCompletedTasks = tasks.filter((task) => task.completed).length;

  return (
    <section className={styles.taskList}>
        <header>
            <div className={styles.taskInfos}>
                <strong className={styles.todo}>Tarefas criadas</strong>
                <span>{totalTasks}</span>
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
                onDeleteTaskById={onDeleteTaskById}
                onCheckTaskById= {onCheckTaskById}
              />
          ))}

          {tasks.length == 0 &&
          <section className={styles.isEmpty}>
            <Clipboard size={56}/>
            <div>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
          </section>
          }
        </div>
    </section>
  )
}
