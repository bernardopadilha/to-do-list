import { FormEvent, useState } from "react";
import { Tasks } from "./Tasks";
// import { zodResolver } from "@hookform/resolvers/zod"
// import * as zod from "zod"

interface PagesProps{
 
}



export function Page(){
  const [tasks, setNewTasks]= useState([
    "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
  ]);  

  const [ tasksText, setTasksText ]= useState("");
  
  function handleCreateNewTask(event:FormEvent){
    event.preventDefault

    setNewTasks([...tasks, tasksText])
    setTasksText("")
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeleteOne = tasks.filter(task =>{
      return task !== taskToDelete
    })

    setNewTasks(tasksWithoutDeleteOne)
  }

  return(
        <div className="max-w-[736px] h-auto flex flex-col justify-center items-center">
        <div className="flex items-center justify-center">
          <input  type="text"
                  placeholder="Adicione uma nova tarefa" 
                  className="w-[638px] h-[54px] bg-gray500 text-white rounded-md p-3" 
                  onChange={(e)=> setTasksText(e.target.value)}
                  value={tasksText}
          />

          <button type="button"
                  className="w-[90px] h-[52px] rounded-md text-gray100 ml-2 bg-blueDark hover:bg-blue transition-colors"
                  onClick={handleCreateNewTask} >
                    Criar
          </button>
        </div>

        <div className="w-full h-[19px] flex justify-between items-center mt-[64px]"> 
            <h1 className="text-blue font-bold">Tarefas Criadas</h1>

            <h1 className="text-purple font-bold">Tarefas Concluídas</h1>
        </div>

        <div className="mt-6">
          {tasks.map(task =>{
            return(
              <Tasks 
                key={task}
                content={task}
                onDeleteTasks={deleteTask}

              />
            )
          })}
        </div>
      </div>
    )
}