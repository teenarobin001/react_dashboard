import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link" activeClassName ="active">
            <li className="sidebarListItem "> 
              Home
            </li>
            </NavLink>
            <NavLink to="/analytics" className="link" activeClassName ="active">
            <li className="sidebarListItem"> 
              Analytics
            </li>
            </NavLink>
            <NavLink to='/sales' className="link" activeClassName ="active">
            <li className="sidebarListItem"> 
              Sales
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <NavLink to="/users" className="link" activeClassName ="active" >
              <li className="sidebarListItem"> 
                Users
              </li>
            </NavLink>
            <NavLink to="/products" className="link" activeClassName ="active">
              <li className="sidebarListItem"> 
                Products
              </li>
            </NavLink>
            <NavLink to="/transactions" className="link" activeClassName ="active">
            <li className="sidebarListItem"> 
              Transactions
            </li>
            </NavLink>
            <NavLink to="/reports" className="link" activeClassName ="active">
            <li className="sidebarListItem"> 
              Reports
            </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"> 
              Mail
            </li>
            <li className="sidebarListItem"> 
              Feedback
            </li>
            <li className="sidebarListItem"> 
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem"> 
              Manage
            </li>
            <li className="sidebarListItem"> 
              Analytics
            </li>
            <li className="sidebarListItem"> 
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
