import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const title = 'My Miniгггге';

ReactDOM.render(
    <App title={title} />,
    document.getElementById('app')
);
module.hot.accept();