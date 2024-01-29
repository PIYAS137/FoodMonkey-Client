import { Outlet } from "react-router-dom"
import AppNavBar from "../../Layouts/AppNavBar"


const RootPage = () => {
  return (
    <div>
        <AppNavBar/>
        <Outlet/>
    </div>
  )
}

export default RootPage