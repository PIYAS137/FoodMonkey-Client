import { NavLink } from "react-router-dom"
import { FaAlignLeft } from "react-icons/fa6";

import './AdminMenu.css'

const AdminMenu = () => {
    return (
        <nav className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <label htmlFor="my-drawer" className=" p-5 cursor-pointer text-xl inline-block drawer-button">
                    <FaAlignLeft />
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full text-base-content bg-yellow-400">
                    <h1 className=" text-center mb-3 text-lg font-black uppercase">Admin Routes</h1>
                    {/* Sidebar content here */}
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/admin_dashboard'}>Admin Home</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/add_restaurants'}>Add Restaurants</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/manage_restaurants'}>All Restaurants</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/add_foods'}>Add Foods</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/manage_foods'}>Manage Foods</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/'}>Home Page</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminMenu