import React from "react";
import ReactDOM from "react-dom";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
  componentDidMount() {
    this.el = $(ReactDOM.findDOMNode(this));
    this.el.find(".side-navigation").sideNav({
      edge: "right",
      closeOnClick: true,
      draggable: true
    });
  }

  render() {
    return (
      <div className="ui-header">
        <nav className="nav-header">
          <div className="nav-wrapper">
            <NavLink to="/" className="brand-logo">
              <img src="images/logo.png"/>
            </NavLink>
            <ul className="navigation right hide-on-med-and-down">
              <li>
                <NavLink to="/" className="item" activeClassName="active">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="item" activeClassName="active">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="item" activeClassName="active">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="item" activeClassName="active">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="item" activeClassName="active">
                  Contact
                </NavLink>
              </li>
            </ul>
            <ul className="navigation right hide-on-large-only">
              <li>
                <a data-activates="side-navigation"
                  className="item side-navigation">
                  <i className="material-icons">menu</i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <ul id="side-navigation" className="side-nav">
          <li>
            <div className="user-view">
              <div className="background">
                <img src="images/side-navigation.jpg"/>
              </div>
              <a href="/">
                <img className="circle" src="images/yuna.jpg"/>
              </a>
              <a href="/">
                <span className="white-text name">John Doe</span>
              </a>
              <a href="/">
                <span className="white-text email">jdandturk@gmail.com</span>
              </a>
            </div>
          </li>
          <li><a href="/about">About</a></li>
          <li><a href="/gallery">Gallery</a></li>
          <li><a href="/faq">FAQ</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
