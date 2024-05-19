import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function MyApp(){
  return(
    <div className="">
      <h1>Custom React App</h1>
    </div>
  );

}

const anElement = (
  <a href="https://google.com">Click this phishing link to visit Google. </a>
);

const areactElement = React.createElement(
  'a',
  {href:'https://magicaJen.com', target:`_blank`},
  'click to visit my site.'
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
