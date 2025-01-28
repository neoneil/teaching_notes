// import logo from './logo.svg';
import './App.scss';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home/Home'
import Emailjs from './components/Emailjs/emailjs'
import Syllabus from './components/PTEsyllabus/Pte'
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/emailjs' element={<Emailjs/>} />
        <Route path='/exams' element={<Syllabus/>} />
      </Routes>
    </div>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <button type="button" className="buttonStyle">Warning</button>
  //       <p className="pcolor">
  //         英语是一门语言.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
