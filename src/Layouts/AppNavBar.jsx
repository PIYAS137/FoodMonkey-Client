import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './AppNavBar.css'

const AppNavBar = () => {





    const navLinks = <>
        <li className='text-white'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-white'><NavLink to={'/blogs'}>Blogs</NavLink></li>
        <li className='text-white'><NavLink to={'/foods'}>Foods</NavLink></li>
        <li className='text-white'><NavLink to={'/cart'}>Cart</NavLink></li>
    </>



    return (
        <nav className=' absolute top-0 w-full left-0 bg-[#ffffff30]'>
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'} className="max-w-16">
                        <img className=' max-w-full rounded-lg' src="https://play-lh.googleusercontent.com/nlassGkKm4bOZtWvw65e3X3K53uodpkM9WuR7951KbkoIGGiNJtrML03zq_sISzagsQ=w240-h480-rw" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </nav>
    )
}

export default AppNavBar