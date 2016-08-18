// containers/App/reducers
import { List, Map } from 'immutable';
import { ADD_TODO, TOGGLE_TODO } from './constants';

const init = List([]);


/**
 * Root Reducer for containers/App
 */
const reducers = (todos = init, action ) => {
	switch(action.type) {

		case ADD_TODO:
			return todos.push(Map(action.payload));

		case TOGGLE_TODO:
			return todos.map((t) => {
				if (t.get('id') === action.payload) {
					return t.update('isDone', isDone => !isDone);
				} else {
					return t;
				}
			});

		default:
			return todos;
	}
};

export default reducers;
