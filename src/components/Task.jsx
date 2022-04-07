import React from 'react'

export const Task = ({ task, tasks, setTasks, option, deleteTask }) => {

    const { taskName, active, id } = task

    const handleTask = () => {

        const tasksUpdate = tasks.map(task => {
            if (task.id == id) {
                if (task.active == true) {
                    task.active = false
                } else {
                    task.active = true
                }
            }

            return task
        })

        setTasks(tasksUpdate)
    }

    return (
        <>
            <div className='flex justify-between my-3 gap-2'>
                <div className='flex items-center my-3 gap-2'>
                    <input
                        type="checkbox"
                        name={taskName}
                        id={taskName}
                        checked={!task.active} // no es buena practica (?)
                        onChange={() => ('')}   // no es buena practica (?)

                        onClick={() => handleTask()}
                    />
                    <label className={!active ? 'line-through ' : ''} htmlFor={taskName}>{taskName}</label>
                </div>

                {option == 'completed'
                    ?
                    <button
                        className=''
                        onClick={() => deleteTask(id)}>
                        x
                    </button>
                    :
                    ''}
            </div>


        </>

    );
};
