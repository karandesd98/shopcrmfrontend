import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../authentication/authUtility";
import AdminMenu from "./privateCmp/AdminMenu";

const AdminHome = () =>{
    return (
        <>
        <AdminMenu></AdminMenu>
        {isUserLoggedIn() ? <Outlet /> : <Navigate  to={"/LoginCmp"} />}
        </>
    );
}

export default AdminHome;