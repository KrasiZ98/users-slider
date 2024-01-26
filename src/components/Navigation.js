import React, { useContext } from 'react'
import { IoHomeSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

export const Navigation = () => {
    const { user, logoutUser } = useContext(UserContext);
    return (
        <div className='nav-bar'>
            <div className='home'>
                <Link to='/'>
                    <IoHomeSharp className='home-icon' />
                </Link>
            </div>

            <nav>
                <ul>
                    {user.email ?
                        <>
                            <li>
                                <Link to='/profile'>Profile</Link>
                            </li>
                            <li>
                                <Link onClick={() => logoutUser()}>Logout</Link>
                            </li>
                        </>
                        :
                        <>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Register</Link>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </div>
    )
}
