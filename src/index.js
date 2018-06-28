import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import tasksReducer from './reducer/tasks';
import TodoApp from './components/TodoApp';



const store = createStore(tasksReducer);

function renderApp(store){
    render(
        <TodoApp store = {store} />,
        document.getElementById('root')
    );
}

store.subscribe(()=>renderApp(store));
renderApp(store);

