// containers/App/actions.js
import { ADD_TODO, TOGGLE_TODO } from './constants';

/**
 * Get a random string hash for uid.
 * @return {String} hash id
 */
const uid = () => Math.random().toString(34).slice(2);

/**
 * Add new Todo action
 * @type {ADD_TODO}
 */
export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: {
		id: uid(),
		isDone: false,
		text
	}
});

/**
 * Toggle todo action
 * @type {TOGGLE_TODO}
 */
export const toggleTodo = (payload) => ({
	type: TOGGLE_TODO,
	payload
});
