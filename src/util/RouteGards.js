import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const RouteGards = ({ children }) => {
    const { user } = useContext(UserContext);

    if (user.email === undefined) {
        return <Navigate to='/login'></Navigate>
    }

    return children ? children : <Outlet />;
}

export default RouteGards;