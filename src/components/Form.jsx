import { useState } from "react"

export const Form = ({ tasks, setTasks }) => {

	const generarID = () => {
		const random = Math.random().toString(36).substr(2)
		const date = Date.now().toString(36)

		return random + date
	}

	const [task, setTask] = useState({
		taskName: '',
		active: true,
		complete: false,
		id: generarID()
	})

	const handleSubmit = (e) => {
		e.preventDefault()

		setTasks([...tasks, task])

		setTask({
			taskName: '',
			active: true,
			complete: false,
			id: generarID()
		})
	}

	const handleChange = (e) => {
		setTask({
			...task,
			[e.target.name]: e.target.value
		})
	}

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className='my-5 mx-auto w-full'
			>
				<input
					className='border rounded-lg border-solid border-gray-300 p-2 mr-5 w-9/12'
					name="taskName"
					type="text"
					placeholder='add details'
					onChange={handleChange}
				/>
				<input className='w-1/5 p-2 bg-blue-700 text-white cursor-pointer hover:bg-sky-700 border rounded-lg border-solid'
					type="submit"
					value="Add"
				/>
			</form>
		</>
	)
}
