import { Outlet } from "react-router-dom"
import AppNavBar from "../../Layouts/AppNavBar"
import AppFooter from "../../Layouts/AppFooter"


const RootPage = () => {
  return (
    <div>
      <AppNavBar />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default RootPage