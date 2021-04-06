import React from 'react';
import ReactDOM from 'react-dom';
import {createServer} from 'miragejs';
import {App} from './App';

createServer({
  routes(){
    this.namespace = 'api'; // api do transations, informando que quer usar apartir desse endereço ou seja api
    this.get('/transactions', () => {
      return[
        {
          id: 1,
          title: 'transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
      }
    ]
    })
  }
})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

