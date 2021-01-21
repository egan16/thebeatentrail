import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

//connecting to the div with the id root
ReactDOM.render(
    // highlights potential problems in an application by performing checks
    <React.StrictMode>
        {/* create an instance of App class */}
        <App />
    </React.StrictMode>,
    document.getElementById('root')
    );