import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'nouislider/distribute/nouislider.css';
import {StoreComponent} from './GlobalState/ChartState';

ReactDOM.render(
    <React.StrictMode>
        <StoreComponent>
          <App />
        </StoreComponent>
    </React.StrictMode>,
  document.getElementById('root')
);