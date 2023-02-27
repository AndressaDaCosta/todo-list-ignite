import rocket from '../assets/rocket.svg'
import styles from './Header.module.css'
import { Form } from './Form'

export function Header() {
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
			<Form />
		</header>
	)
}
