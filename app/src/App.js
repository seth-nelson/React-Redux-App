import React from 'react';
import './App.css';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import BreweryList from './components/BreweryList';
import { reducer } from './reducers/index';


const store = createStore(reducer, applyMiddleware(thunk));


export default function App() {
  return (
    <Provider store={store}>  
      <div className="App">
        <h1>Breweries</h1>
        <h3>Finding your next stop</h3>
        <BreweryList />
      </div>
    </Provider>
  );
}
