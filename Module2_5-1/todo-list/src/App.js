import styles from './app.module.css';
import { useEffect, useState } from 'react';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		fetch('https://jsonplaceholder.typicode.com/todos')
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => setIsLoading(false));
	}, []);

	return (
		<div className={styles.app}>
			{isLoading ? (
				<div className="loader"></div>
			) : (
				todos.map(({ id, title }) => (
					<div key={id} className={styles.todos}>
						{title}
					</div>
				))
			)}
		</div>
	);
};
