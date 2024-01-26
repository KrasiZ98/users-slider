import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext'
import { CardSlider } from './CardSlider';

export const Home = () => {
    const { users, user } = useContext(UserContext);
    const [currentIndex, setCurrentIndex] = useState(0);
    const suggested = users.filter((storageUser) => storageUser._id !== user._id);
    const [suggestedUsers, setSuggestedUsers] = useState(suggested);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + suggestedUsers.length) % suggestedUsers.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + suggestedUsers.length) % suggestedUsers.length)
    }

    return (
        <div className='home-page'>
            <div className='info'>
                {user && user.email ? <h1>Welcome {user.email}</h1>
                    : <h1>Welcome to our site</h1>
                }
                <h2>See users who also have registration</h2>
            </div>

            <div className='slider'>
                {suggestedUsers.length > 0 ?
                    (
                        <>
                            <button onClick={handlePrev} className='slider-btn prev-btn'>
                                Previous
                            </button>

                            <CardSlider
                                key={suggestedUsers[currentIndex]?._id}
                                user={suggestedUsers[currentIndex]}
                            />

                            <button onClick={handleNext} className='slider-btn next-btn'>
                                Next
                            </button>


                        </>
                    )

                    : <h1>No users in data.</h1>}
            </div>
        </div>
    )
}
