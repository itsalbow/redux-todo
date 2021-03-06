import { createStore } from 'redux';

import reducers from './containers/TodoList/reducers';

const store = createStore(reducers,  window.devToolsExtension && window.devToolsExtension());

export default store;
