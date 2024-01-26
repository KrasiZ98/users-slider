
import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const AuthGards = ({ children }) => {

    const { user } = useContext(UserContext);

    if (user.email !== undefined) {
        return <Navigate to='/' ></Navigate>
    }

    return children ? children : <Outlet />
}

export default AuthGards;