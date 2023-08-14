import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>     
    <div className="App">
        <div className='row'>
          <div className='col-12'>
            <Navbar />
          </div>
          <div className='row'>
            <div className='col-12'>
            <App />
          </div></div>
          
        </div>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
