import { useState } from 'react'
import { useTasks } from '../hooks/useTasks'
import { AiOutlinePlusCircle } from 'react-icons/ai'

import styles from './Form.module.css'

export function Form() {
	const { addTask } = useTasks()

	const [title, setTitle] = useState('')

	function onChangeTitle(event) {
		setTitle(event.target.value)
	}

	function onSubmitTask(event) {
		event.preventDefault()
		addTask(title)
		setTitle('')
	}
	return (
		<form
			onSubmit={onSubmitTask}
			className={styles.search}>
			<input
				value={title}
				onChange={onChangeTitle}
				placeholder="Adicione uma nova tarefa"
			/>
			<button>
				Criar
				<AiOutlinePlusCircle size={20} />
			</button>
		</form>
	)
}
