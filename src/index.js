import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/app/app';
import Api from "./services/api";

const api = new Api();

api.addReview(`test`);

ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById(`root`)
);
