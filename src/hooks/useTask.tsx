import { useEffect, useState } from "react";
import { v4 } from 'uuid';

interface TasksProps {
  id: string;
  content: string;
  completed: boolean;
}

export function useTask() {
  
  const [tasks, setTasks] = useState<TasksProps[]>([]);
  const [tasksText, setTasksText] = useState('');

  // Cria uma tarefa nova e coloca no array
  function handleCreateNewTask() {
    const taskData = {
      id: v4(),
      content: tasksText,
      completed: false,
    };

    setTasks([...tasks, taskData]);
    setTasksText('');

    localStorage.setItem('@to-do-list:list-1.0.0', JSON.stringify([...tasks, taskData]))
    handleGetAllTasks()
  }

  // Delete uma tarefa do array de tarefas
  function deleteTask(taskId: string) {
    const tasksWithoutDeleteOne = tasks.filter((task) => task.id !== taskId);
    setTasks(tasksWithoutDeleteOne);
  }

  function handleGetAllTasks() {
    const tasksStorage = JSON.parse(localStorage.getItem('@to-do-list:list-1.0.0') ?? '')

    setTasks(tasksStorage)
  }

  // Conta as tarefas completadas
  const countTasksCompleted = tasks.filter(task => task.completed === true);

  useEffect(() => {
    handleGetAllTasks()
  }, [])
  
  return {
    tasks,
    setTasks,
    tasksText,
    setTasksText,
    handleCreateNewTask,
    deleteTask,
    countTasksCompleted
  }
}