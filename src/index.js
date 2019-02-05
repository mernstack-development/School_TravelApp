import React from 'react';
import ReactDOM from 'react-dom';
//import MatkaApp from './MatkaApp';
//import Sananlasku from './components/Sananlasku';
//import Saa from './components/Saa';
import Astroidit from './components/Asteroidi';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Astroidit/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
