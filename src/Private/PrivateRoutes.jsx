import React, { useContext } from 'react'
import { AuthContext } from '../Contexts/FirebaseContext'
import {Navigate,useLocation} from 'react-router-dom';


const PrivateRoutes = ({children}) => {

    const {loader, user} = useContext(AuthContext);
    const location = useLocation();

    if (loader) {
        return (
            <div className=' flex justify-center items-center w-full h-screen'>
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        )
    }
    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to={'/login'}/>
}

export default PrivateRoutes