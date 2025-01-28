import logo from '../../logo.svg';
import './Navbar.scss';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (<nav class="navbar navbar-expand-lg navbar-light bg-light ">
    <div class="container-fluid">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a className="nav-link active" aria-current="page" href="/">关于老师</a>
          <Link className="nav-link" to="/emailjs">免费试听</Link>
          <Link className="nav-link" to="/exams">考试信息</Link>
          <Link className="nav-link" to="/gramma">词汇语法</Link>
        </div>
      </div>
    </div>
  </nav>)
}
export default Navbar;