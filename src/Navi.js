import React from 'react';
import './home.css';
import Navbar from 'react-bootstrap/Navbar'
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import Home from './Home.js';
import About from './About.js';
import Main from './Main.js';
import Login from './Login'
import Dash from './Dash'
import New from './New.js'
const NaviBar = () => {
    return (  
        <div>
         <Router>
        <div>
     
          <nav className="navbar navbar-expand-lg navbar-light bg-light" >
          <Navbar.Brand href="/#New" className="Navbar">Todo Tasks</Navbar.Brand>
          <ul className="navbar-nav mr-auto">
          <li><NavLink to={'/dashboard'} className="nav-link" > Dashboard </NavLink></li>
            <li><NavLink to={'/contact'} className="nav-link" > Home </NavLink></li>
            
           
          
            <li><NavLink to={'/login'} className="nav-link"> Login </NavLink></li>
            <li><NavLink to={'/about'} className="nav-link">About</NavLink></li>

          </ul>
          </nav>
          <hr />
          <Switch>
          <Route exact path='/' component={New} />
              <Route exact path='/home' component={Dash} />
              <Route exact path='/dashboard' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route path='/contact' component={Main} />
              <Route path='/about' component={About} />
          </Switch>
        </div>
      </Router>
 
        </div>
    );
}
 
export default NaviBar;