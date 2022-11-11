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
  const [tasksListItems, setTasksListItems] = useState<TasksProps[]>([])

  function addTaskToList(taskTitle: string){
    setTasksListItems([
      ...tasksListItems,
      {
        id: tasksListItems.length+1,
        title: taskTitle,
        completed: false
      }
    ])
  }
  
  function deleteTaskById(taskId: number) {
    const newTasksList = tasksListItems.filter((task) => {
      return task.id != taskId;
    })
    setTasksListItems(newTasksList);
  }

  function checkTaskById(taskId: number) {
    const newTasksList = tasksListItems.filter((task) => {
      if(task.id == taskId){
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setTasksListItems(newTasksList);
  }

  return (
    <div>
      <Header onAddTaskToList={addTaskToList} />
      <TasksList onDeleteTaskById={deleteTaskById} tasks={tasksListItems} onCheckTaskById={checkTaskById}/>
    </div>
  )
}
