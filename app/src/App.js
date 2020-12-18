import React from 'react';
import './App.css';
import { Header } from './components/Styles';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import BreweryList from './components/BreweryList';
import { reducer } from './reducers/index';


const store = createStore(reducer, applyMiddleware(thunk));


export default function App() {
  return (
    <Provider store={store}>  
      <Header className="App">
        <h1>Northwest Breweries</h1>
        <h3>Find your next stop</h3>
        <BreweryList />
      </Header>
    </Provider>
  );
}