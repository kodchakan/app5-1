import React from 'react'
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom'
import './navLink.css'
import Home from './home'
import About from './about'
import Products from './products'
import Contact from './contact'
import Error from './error'
import {userContext} from './context'



export default function Route1() {
    let activeClassName="active_menu"
    let inActiveClassName="menu"
    let user = React.useContext(userContext)
  return (
    <BrowserRouter>
        <nav className="nav">
            <NavLink to="/" className={({isActive}) => isActive ? activeClassName:inActiveClassName}> HOME </NavLink> - &nbsp;
            <NavLink to="/about" className={({isActive}) => isActive ? activeClassName:inActiveClassName}> About </NavLink> - &nbsp;
            <NavLink to="/Products" className={({isActive}) => isActive ? activeClassName:inActiveClassName}> Products </NavLink> - &nbsp;
            <NavLink to="/contact" className={({isActive}) => isActive ? activeClassName:inActiveClassName}> Contact </NavLink> - &nbsp;
            <NavLink to="/dashboard" className={({isActive}) => isActive ? activeClassName:inActiveClassName}> Dashboard </NavLink> - &nbsp;
            [{user}]
        </nav>
        <div style={{margin:'20px'}}>
            <Routes>
                <Route path="/" element = {<Home />} />
                <Route path="/about" element = {<About />} />
                <Route path="/Products" element = {<Products />} />
                <Route path="/contact" element = {<Contact />} />
                <Route path="/dashboard" element = {<Navigate to="/" />} />
                <Route path="*" element = {<Error />} />
            </Routes>
        </div>
    
    </BrowserRouter>
  )
}
