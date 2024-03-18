import { Trash } from '@phosphor-icons/react';
import { ChangeEvent, useState } from 'react';
import { Checkbox } from './ui/checkbox';

interface TaskProps {
  id: string;
  content: string;
  completed: boolean;
  onDeleteTasks: (taskId: string) => void;
}

export function Tasks({
  id,
  content,
  onDeleteTasks,
  completed,
}: TaskProps) {


  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.checked){
      completed = true
    }else {
      completed = false
    }

    console.log(completed)
  }

  const [hasChecked, setHasChecked] = useState(false)

  return (
    <div className="w-[736px]  bg-[#262626] rounded-lg flex justify-between items-start px-4 py-5 mb-3">
      
      
      <Checkbox checked={hasChecked} onCheckedChange={() => setHasChecked(!hasChecked)} />

      <p
        data-checked={hasChecked}
        className={`text-white px-3 data-[checked=true]:line-through data-[checked=true]:opacity-60`}
      >
        {content}
      </p>

      <button
        data-checked={hasChecked}
        disabled={hasChecked}
        onClick={() => onDeleteTasks(id)}
        className="text-[#808080] rounded-[5px] hover:text-[#E25858] duration-150 data-[checked=true]:opacity-60 disabled:cursor-not-allowed"
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
