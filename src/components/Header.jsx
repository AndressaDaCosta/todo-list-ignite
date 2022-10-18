import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';
// import logoSvg from '../assets/Logo.svg';
import rocket from '../assets/rocket.svg';
import { useTasks } from '../hooks/useTasks';

import styles from './header.module.css';

export function Header() {
	const { addTask } = useTasks();

	const [title, setTitle] = useState('');

	function onChangeTitle(event) {
		setTitle(event.target.value);
	}

	function onSubmitTask(event) {
		event.preventDefault();
		addTask(title);
		setTitle('');
	}

	return (
		<header className={styles.header}>
			<img
				src={rocket}
				alt="Logo Foguete azul"
			/>
			<h1>
				<span>to</span>
				<span>do</span>
			</h1>

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
		</header>
	);
}
/*

  <header className={styles.header}>
      <img src={logo} alt="todo list logo" />
      <h1>
        <span>to</span>
        <span>do</span>
      </h1>
    </header>
    */
