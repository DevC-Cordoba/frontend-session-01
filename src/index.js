import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GamePage from './containers/gamePage';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<GamePage />, document.getElementById('root'));
serviceWorker.unregister();
