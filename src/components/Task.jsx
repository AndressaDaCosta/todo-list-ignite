import { useTasks } from '../hooks/useTasks'
import { TbTrash } from 'react-icons/tb'
import { BsFillCheckCircleFill } from 'react-icons/bs'

import styles from './Task.module.css'

export function Task({ task }) {
	const { deleteTaskById, toggleTaskCompletedById } = useTasks()

	return (
		<div className={styles.task}>
			<button
				onClick={() => toggleTaskCompletedById(task.id)}
				className={styles.checkContainer}>
				{task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
			</button>
			<p className={task.isCompleted ? styles.textCompleted : ''}>
				{task.title}
			</p>
			<button
				className={styles.deleteButton}
				onClick={() => deleteTaskById(task.id)}>
				<TbTrash size={20} />
			</button>
		</div>
	)
}
