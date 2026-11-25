import React from 'react'
import ThemeSwap from './ThemeSwap'
import { Bell, Menu, Search } from 'lucide-react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <Menu />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <NavLink to="/">Homepage</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">Aboutpage</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">SANTAI</a>
            </div>
            <div className="navbar-end">
                <button className="btn btn-ghost btn-circle">
                    <Search />
                </button>
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <Bell />
                        <span className="badge badge-xs badge-primary indicator-item"></span>
                    </div>
                </button>
                <ThemeSwap />
            </div>
        </div>
    )
}

export default Navbar