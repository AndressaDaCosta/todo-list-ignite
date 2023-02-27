import { useTasks } from '../hooks/useTasks'
import { Task } from './Task'
import { TbClipboardText } from 'react-icons/tb'

import styles from './Tasks.module.css'

export function Tasks() {
	const { tasks } = useTasks()

	const tasksAmount = tasks.length
	const completedTasksAmount = tasks.filter(
		(item) => item.isCompleted === true
	).length

	return (
		<section className={styles.tasks}>
			<header className={styles.header}>
				<div>
					<p>Tarefas criadas</p>
					<span>{tasksAmount}</span>
				</div>
				<div>
					<p className={styles.textPurple}>Concluídas</p>
					<span>
						{completedTasksAmount} de {tasksAmount}
					</span>
				</div>
			</header>
			<div className={styles.list}>
				{tasks.map((item) => {
					return (
						<Task
							task={item}
							key={item.id}
						/>
					)
				})}

				{tasksAmount <= 0 && (
					<section className={styles.empty}>
						<TbClipboardText size={50} />
						<div>
							<p>Você ainda não tem tarefas cadastradas!</p>
							<span>
								Crie tarefas e organize seus itens a fazer
							</span>
						</div>
					</section>
				)}
			</div>
		</section>
	)
}
