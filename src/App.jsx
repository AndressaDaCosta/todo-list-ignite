import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';
import { TasksContextProvider } from './contexts/TasksContext';
import styles from './styles/global.css';

export function App() {
	return (
		<TasksContextProvider>
			<Header />
			<Tasks />
			<Footer />
		</TasksContextProvider>
	);
}
