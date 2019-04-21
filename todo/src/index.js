import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import reducer from './reducer';
import TodoAddRemove from './component/todoAddRemove';
import RenderTodo from './component/TodoRender';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
        <div className="App">
            <h1>My Todo List</h1>
            <RenderTodo/>
            <TodoAddRemove/>
        </div>
    );
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));


