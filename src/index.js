// App entry point

// React
import React from 'react';
import { render } from 'react-dom';

// redux
import { Provider } from 'react-redux';
import store from './store';

// Immutable
import { List, Map } from 'immutable';

// App
import App from './App';

render(
	<Provider store={store}>
 		<App />
	</Provider>
, document.getElementById('app'));
