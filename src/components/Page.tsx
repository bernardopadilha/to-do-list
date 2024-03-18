import { useEffect } from 'react';
import { Tasks } from './Tasks';
import { useTask } from '../hooks/useTask';

export function Page() {
  const { tasksText, setTasksText, handleCreateNewTask, tasks, countTasksCompleted, deleteTask } = useTask();

  return (
    <div className="max-w-[736px] h-auto flex flex-col justify-center items-center">
      <div className="flex items-center justify-center">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          className="w-[638px] h-[54px] bg-[#262626] text-white rounded-md p-3"
          onChange={(e) => setTasksText(e.target.value)}
          value={tasksText}
        />

        <button
          type="button"
          className="w-[90px] h-[52px] rounded-md ml-2 bg-[#1E6F9F] hover:bg-[#1E6F9F]/90 transition-colors disabled:cursor-not-allowed disabled:opacity-60"
          onClick={handleCreateNewTask}
          disabled={tasksText === ''}
        >
          Criar
        </button>
      </div>

      <div className="w-full h-[19px] flex justify-between items-center mt-[64px]">
        <h1 className="text-[#4EA8DE] font-bold">{tasks.length} {tasks.length === 1 ? 'tarefa criada' : 'tarefas criadas'}</h1>

        <h1 className="text-[#8284FA] font-bold">
          {countTasksCompleted.length} {countTasksCompleted.length === 1 ? 'tarefa concluída' : 'tarefas concluídas'}
        </h1>
      </div>

      <div className="mt-6">
        {tasks.map((task) => {
          return (
            <Tasks
              key={task.id}
              id={task.id}
              content={task.content}
              completed={task.completed}
              onDeleteTasks={deleteTask}
            />
          );
        })}
      </div>
    </div>
  );
}
