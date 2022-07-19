import React from "react";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import About from './About';
import Resources from './Resources';
import Contact from './Contact';
import Stories from './Stories';
import Home from './Home';

function Nav() {
  return (
    <Router>
      <header className="flex-row px-1">
        <h1>
          <Link to="/">BIWOC Health</Link>
        </h1>
        <nav>
          <ul className="flex-row nav-bar">
            <li>
              <Link to="/about" className="section-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/resources" className="section-link">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/stories" className="section-link">
                Stories
              </Link>
            </li>
            <li>
              <Link to="/contact" className="section-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
        exact path="/"
        element={<Home/>}
        >
        </Route>
        <Route 
        path="/about"
        element={<About/>}
        >
        </Route>
        <Route 
        path="/work"
        element={<Resources/>}
        >
        </Route>
        <Route 
        path="/stories"
        element={<Stories/>}
        >
        </Route>
        <Route 
        path="/contact"
        element={<Contact/>}
        >
        </Route>
      </Routes>
    </Router>
  );
}

export default Nav;
