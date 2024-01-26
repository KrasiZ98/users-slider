import React, { useContext } from 'react'
import { UserContext } from '../context/UserContext'
import { Link } from 'react-router-dom';

export const Profile = () => {
    const { user, deleteUser } = useContext(UserContext);

    return (
        <div className='profile'>

            <div className='image'>
                {user.image === '' ?
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png" alt="Profile Image" />
                    : <img src={user.image} alt="Profile Image" />}
            </div>

            <div className='profile-info'>
                <h2>{user.email}</h2>
                <h2>{user.username}</h2>
            </div>

            <div className='profile-action'>
                <Link to={`/edit/${user._id}`}>
                    <button className='edit'>Edit</button>
                </Link>
                <button onClick={() => deleteUser(user._id)} className='delete' >Delete</button>
            </div> 
        </div>
    )
}
