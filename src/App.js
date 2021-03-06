import React,{ Component} from 'react'
import {BrowserRouter as Router,Route, Link} from "react-router-dom";
import logo from "./logo.svg";
import NavLoginBar from './components/Navbar';
import Landing from './components/Landing'
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpComp from "./components/signup.component";
import LoginComp from "./components/login.component";
import Logout from './components/logout.component';
class App extends Component {

  render() {
    return (
       <Router>
         <div className="App">
             <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                 <a className="navbar-brand" href="http://www.railway.gov.lk/web/" target="_blank" rel="noopener noreferrer">
                     <img src={logo} width="30" height="30" alt="Sri Lanka Railways"/>
                 </a>
                 <Link to="/" className="navbar-brand">Railway Management System</Link>
                 <div className="collpase navbar-collapse">
                     <ul className="navbar-nav mr-auto">
                         <li className="navbar-item">
                             <Link to="/" className="nav-link">Home</Link>
                         </li>
                         <li className="navbar-item">
                             <Link to="/register" className="nav-link">Register</Link>
                         </li>
                         <NavLoginBar isLogged={false}/>
                     </ul>
                 </div>
             </nav>
             <Route exact path="/" component={Landing}/>
             <div className="container">
                 <Route path="/register" component={SignUpComp} />
                 <Route path="/login" component={LoginComp} />
                 <Route path="/logout" component={Logout}/>

             </div>
         </div>

       </Router>
    );
  }
}
export default App;
