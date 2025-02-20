import logo from '../../logo.svg';
import './Navbar.scss';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (<nav className="navbar navbar-expand-lg navbar-light bg-light ">
    <div className="container-fluid">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">关于老师</a>
          <Link className="nav-link" to="/emailjs">免费试听</Link>
          <Link className="nav-link" to="/exams">课程介绍</Link>
          <Link className="nav-link" to="/wordsandgrammar">词汇语法</Link>
        </div>
      </div>
    </div>
  </nav>)
}
export default Navbar;