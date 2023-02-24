import { TasksContextProvider } from './contexts/TasksContext'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import { Footer } from './components/Footer'
import styles from './styles/global.css'

export function App() {
	return (
		<TasksContextProvider>
			<Header />
			<Tasks />
			<Footer />
		</TasksContextProvider>
	)
}
