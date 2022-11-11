import { useState } from 'react';
import { Header } from './components/Header';
import { TasksList } from './components/TasksList';
import './styles/global.css'

export interface TasksProps {
  id: number;
  title: string;
  completed: Boolean;
}

export function App() {
  const [tasksListItems, setTasksListItems] = useState<TasksProps[]>([
    {
      id: 1,
      title: 'teste',
      completed: true
    },
    {
      id: 2,
      title: 'teste',
      completed: true
    }
  ])

  function handleAddTaskToList(taskTitle: string){
    setTasksListItems([
      ...tasksListItems,
      {
        id: tasksListItems.length+1,
        title: taskTitle,
        completed: false
      }
    ])
  }

  return (
    <div>
      <Header onAddTaskToList={handleAddTaskToList} />
      <TasksList tasks={tasksListItems}/>
    </div>
  )
}
