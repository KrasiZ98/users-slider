import { createContext, useState } from "react";
import useLocalStorage from "../custom-hooks/useLocalStorage";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = (props) => {

    const keyUsers = "USERS_STORAGE";
    const keyUser = "current_user";


    const [user, setUser] = useLocalStorage(keyUser, []);
    const [state, setState] = useLocalStorage(keyUsers, []);

    const [userError, setUserError] = useState('');
    const navigate = useNavigate();


    function registerUser(value) {

        const existingUser = state.find((user) =>
            user.email === value.email || user.username === value.username)
        if (existingUser === undefined) {
            setState((prevState) => [...prevState, value]);
            setUser(value);
            navigate('/profile');
        } else {
            handleUserError("Email or Username has taken.");
        }

    }

    function loginUser(value) {
        const existingUser = state.find((user) => user.email === value.email);
        if (existingUser === undefined) {
            handleUserError("Password or Email don't match.");
        } else if (existingUser.password !== value.password) {
            handleUserError("Password or Email don't match.");
        } else {
            setUser(existingUser);
            navigate('/profile')
        }
    }

    function logoutUser() {
        localStorage.removeItem(keyUser);
        setUser([]);
        navigate('/login')
    }

    function updateUser(userId, user) {
        const udpateUsersState = state.map((storageUser) =>
            storageUser._id === userId ? user : storageUser);
        setState(udpateUsersState);
        setUser(user);
        navigate('/profile')
    }

    function deleteUser(userId) {
        const choice = window.confirm('Are you sure you want to delete the account?');
        if (choice) {
            const udpateUsersState = state.filter((user) =>
                user._id !== userId);

            setState(udpateUsersState);
            localStorage.removeItem(keyUser);
            window.location.reload();
            navigate('/login');
        } else {
            return;
        }
    }

    function handleUserError(error) {
        setUserError(error);
        setTimeout(() => {
            setUserError('')
        }, 4000);
    }

    return (
        <UserContext.Provider value={{
            users: state,
            user,
            userError,
            registerUser,
            loginUser,
            logoutUser,
            updateUser,
            deleteUser,
        }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;