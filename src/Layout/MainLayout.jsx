import { Outlet } from "react-router-dom";
import NavBar from "../components/Header/NavBar/NavBar";

const MainLayout = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBar></NavBar>
            <div className="py-12">
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default MainLayout;