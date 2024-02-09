import { NavLink } from "react-router-dom"
import { FaAlignLeft } from "react-icons/fa6";

import './AdminMenu.css'
import { useContext } from "react";
import { AuthContext } from "../../../Contexts/FirebaseContext";
import useGetAdminStatus from "../../../Hooks/useGetAdminStatus";

const AdminMenu = () => {
    const {Firebase_Logout_User} = useContext(AuthContext);
    const [adminStatus] = useGetAdminStatus();

    const handleClickLogout=()=>{
        Firebase_Logout_User()
            .then().catch();
    }


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
                <ul className="menu p-4 w-80 min-h-full text-base-content bg-yellow-600">
                    <h1 className=" text-center mb-3 text-lg font-black uppercase">Admin Routes</h1>
                    {/* Sidebar content here */}
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/admin_dashboard'}>Admin Home</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/add_restaurants'}>Add Restaurants</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/manage_restaurants'}>All Restaurants</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/add_foods'}>Add Foods</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/dashboard/manage_foods'}>Manage Foods</NavLink></li>
                    <li className="rounded-lg text-black bg-yellow-500 mb-2"><NavLink to={'/'}>Home Page</NavLink></li>
                    <li className="rounded-lg text-white bg-red-500 hover:bg-red-600 cursor-pointer mb-2 p-2 px-3" onClick={handleClickLogout}>Logout Me</li>
                </ul>
            </div>
        </nav>
    )
}

export default AdminMenu