import { useState } from 'react';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import './styles/global.css'

export interface TasksProps {
  id: string;
  title: string;
  completed: Boolean;
}

export function App() {
  const [tasksListItems, setTasksListItems] = useState<TasksProps[]>([
    {
      id: 'teste2',
      title: 'teste',
      completed: true
    },
    {
      id: 'teste',
      title: 'teste',
      completed: true
    }
  ])

  return (
    <div>
      <Header />
      <TasksList tasks={tasksListItems}/>
    </div>
  )
}
