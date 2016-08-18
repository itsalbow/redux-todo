import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './containers/TodoList/actions';

import TodoList from './containers/TodoList/';

import styles from './styles.css';

const mapStateToProps = (state) => ({
	todos: state
});

const mapDispatchToProps = (dispatch) => (
	bindActionCreators(actionCreators, dispatch)
);

const App = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default App;
