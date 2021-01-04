import 'stop-runaway-react-effects/hijack';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// function HelloWorld() {
//   return <div>Hello World</div>;
// }

ReactDOM.render(<App />, document.querySelector("#root"));