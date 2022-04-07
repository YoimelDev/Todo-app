import { useState, useEffect } from "react"
import { DeleteTask } from "./components/DeleteTask"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { Options } from "./components/Options"
import { Task } from "./components/Task"

export const App = () => {
  const [tasks, setTasks] = useState(
    localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
  )

  const [option, setOption] = useState('all')

  let tasksFilter = tasks

  if (option == 'all') {
    tasksFilter = tasks
  } else if (option == 'active') {
    tasksFilter = tasks.filter(task => task.active == true)
  } else {
    tasksFilter = tasks.filter(task => task.active == false)
  }

  const deleteTask = (id) => {
    const tasksUpdate = tasks.filter(task => task.id != id)

    setTasks(tasksUpdate)
  }

  const deleteAllTasks = () => {
    const tasksUpdate = tasks.filter(task => task.active == true)

    setTasks(tasksUpdate)
  }

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks) ?? [])
  }, [tasks])


  return (
    <>
      <Header />

      <div className='flex flex-col mx-auto w-5/6 lg:w-6/12 lg:max-w-4xl'>
        <Options
          option={option}
          setOption={setOption}
        />

        {
          option != 'completed'
          && <Form
            tasks={tasks}
            setTasks={setTasks}
          />
        }


        {/* {tasks.map(task => (
          < Task
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            option={option}
          />
        ))} */}

        {
          tasksFilter.map(task => (
            < Task
              key={task.id}
              task={task}
              tasks={tasks}
              setTasks={setTasks}
              option={option}
              deleteTask={deleteTask}
            />
          ))
        }

        {
          option == 'completed'
          && <DeleteTask
            deleteAllTasks={deleteAllTasks}
          />
        }

      </div>
    </>
  )
}
