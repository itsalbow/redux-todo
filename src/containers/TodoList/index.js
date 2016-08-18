/**
* TodoList holding Todo list
*/
import React from 'react';
import Todo from '../../components/Todo/';

/**
 * Stateless React component: TodoList
 * Creates a todo list and passes props to <Todo />
 */
const TodoList = (props) => {
	const { todos, toggleTodo, addTodo } = props;

	const onSubmit = (e) => {
		const input = e.target;
		const text = input.value;
		const isEnterKey = e.which === 13;
		const isLongEnough = text.length > 0;
		if(isEnterKey && isLongEnough) {
			console.log('submitting');
			input.value = '';
			addTodo(text);
		}
	};

	const toggleClick = (id) => event => toggleTodo(id);

	return (
		<div className="todo">
			<input
			type="text"
			className='todo__entry'
			placeholder="Add todo"
			onKeyDown={onSubmit}/>

			<ul className="todo__list">
				{todos.map(t => (
					<li
					key={t.get('id')}
					className="todo__item"
					onClick={toggleClick(t.get('id'))}>
						<Todo todo={t.toJS()} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default TodoList;
