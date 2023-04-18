import { Trash } from "@phosphor-icons/react";

interface TaskProps{
    content: string;
    onDeleteTasks: (task: string) => void;
  }


export function Tasks({ content, onDeleteTasks }:TaskProps){

    function handleDeleteTasks(){
        onDeleteTasks(content)
    }
    return(
        <div className="w-[736px] h-[72px] bg-gray500 rounded-lg flex justify-between items-start p-4 mb-3">
            <input type="checkbox" className="  w-[18px] h-[18px] bg-blue border-2 border-blue rounded-full "/>

            <p className="text-white px-3">{content}</p>

            <button onClick={handleDeleteTasks} className="text-[#808080] rounded-[5px] hover:bg-gray400 hover:text-danger">
                <Trash size={24} />
            </button>
        </div>
    )
}