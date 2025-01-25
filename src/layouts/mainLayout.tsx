import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
const MainLayout = () => {
  return (
    <>
        <NavBar/>
        <SideBar/>
        <Outlet />
    </>
  )
}

export default MainLayout