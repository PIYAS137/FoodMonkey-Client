import { Outlet } from "react-router-dom"
import AdminMenu from "../../Components/DashboardComponents/AdminMenu/AdminMenu"


const DashboardRootPage = () => {
  return (
    <div>
        <AdminMenu/>
        <Outlet/>
    </div>
  )
}

export default DashboardRootPage