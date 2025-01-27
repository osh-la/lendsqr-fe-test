import { Outlet } from "react-router-dom";
import NavBar from "../components/navBar";
import SideBar from "../components/sideBar";
const MainLayout:React.FC = () => {
  return (
    <>
    <NavBar />
    <div className="app-layout">
      <SideBar />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  </>
  )
}

export default MainLayout