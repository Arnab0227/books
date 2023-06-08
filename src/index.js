import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import {Provider} from './contest/Books'



const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
<Provider>
    <App />
</Provider>)