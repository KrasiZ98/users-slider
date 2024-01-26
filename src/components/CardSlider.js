import React from 'react'

export const CardSlider = ({ user }) => {
    if (!user) {
        // If user is undefined, you can decide what to render in this case
        return <div>User information not available.</div>;
    }

    return (
        <div className='slider-card'>
            <div className='slider-image'>
                {user.image === '' ?
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/no-profile-picture-icon.png" alt="Profile Image" />
                    : <img src={user.image} alt="Profile Image" />}
                <div className='slider-info'>
                    <span>{user.email}</span>
                    <span>{user.username}</span>
                </div>
            </div>
        </div>
    )
}
