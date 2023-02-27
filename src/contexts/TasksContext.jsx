import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const TasksContext = createContext({})

export function TasksContextProvider({ children }) {
	const [tasks, setTasks] = useState([])

	function storedTasks(newTasks) {
		setTasks(newTasks)
		localStorage.setItem('todo:savedtasks', JSON.stringify(newTasks))
	}

	function addTask(taskTitle) {
		if (!taskTitle.trim('')) {
			alert('Insira um texto válido para sua tarefa!')
			return
		}

		storedTasks([
			...tasks,
			{
				id: uuidv4(),
				title: taskTitle,
				isCompleted: false
			}
		])
	}

	function deleteTaskById(taskId) {
		const newTasks = tasks.filter((item) => item.id !== taskId)
		storedTasks(newTasks)
	}

	function toggleTaskCompletedById(taskId) {
		const newTasks = tasks.map((item) => {
			if (item.id === taskId) {
				return {
					...item,
					isCompleted: !item.isCompleted
				}
			}
			return item
		})
		storedTasks(newTasks)
	}

	function loadSavedTasks() {
		const taskIsSaved = localStorage.getItem('todo:savedtasks')
		if (taskIsSaved) {
			setTasks(JSON.parse(taskIsSaved))
		}
	}

	useEffect(() => {
		loadSavedTasks()
	}, [])

	return (
		<TasksContext.Provider
			value={{ addTask, tasks, deleteTaskById, toggleTaskCompletedById }}>
			{children}
		</TasksContext.Provider>
	)
}
