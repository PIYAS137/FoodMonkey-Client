import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaCartShopping, FaTruck } from "react-icons/fa6";
import './AppNavBar.css'

const AppNavBar = () => {



    const navLinks = <>
        <li className='text-white'><NavLink to={'/'}>Home</NavLink></li>
        <li className='text-white'><NavLink to={'/foods'}>Foods</NavLink></li>
        <li className='text-white'><NavLink to={'/foods'}>Resturants</NavLink></li>
        <li className='text-white'><NavLink to={'/blogs'}>Blogs</NavLink></li>
        <li className='text-white'><NavLink to={'/blogs'}>Dashboard</NavLink></li>
        <li className='text-white'><NavLink to={'/cart'}>Login</NavLink></li>
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
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='text-white mr-5 flex items-center space-x-3 border-r pr-4'>
                        <Link to={'/'}><FaTruck className=' text-4xl' /></Link>
                        <div className=' flex flex-col'>
                            <small className=' text-gray-300'>Delevery Record</small>
                            <small className=' text-yellow-300 text-center'>+88013210861</small>
                        </div>
                    </div>
                    <div className='text-white mr-5 relative flex items-center space-x-3 '>
                        <span className='text-xs absolute -top-2 -left-2 rounded-full aspect-square w-5 flex items-center justify-center bg-yellow-300 text-black'>3</span>
                        <Link to={'/cart'}><FaCartShopping className=' text-2xl' /></Link>
                        <div className=' flex flex-col'>
                            <small className=' text-gray-300'>Shopping Cart</small>
                            <small className=' text-yellow-300 text-center'>$400</small>
                        </div>
                    </div>
                    <button className=' btn px-8 rounded-sm hover:bg-yellow-500 bg-yellow-300 border-none'>DISCOVER FOODS</button>
                </div>
            </div>
        </nav>
    )
}

export default AppNavBar