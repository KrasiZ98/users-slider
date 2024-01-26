import React, { useContext, useState } from 'react'
import { UserContext } from '../context/UserContext';
import { Link, useParams } from 'react-router-dom';
import updateValidation from '../validation/updateValidation';

export const UpdateUser = () => {
    const {id: userId} = useParams();
    const { updateUser, userError, users } = useContext(UserContext);

    const currentUser = users.find((user) => user._id === userId);

   
    const [formValue, setFormValue] = useState({
        email: currentUser.email,
        username: currentUser.username,
        image: currentUser.image,
        password: currentUser.password,
        reppass: currentUser.reppass,
        _id: currentUser._id,
        postPage: currentUser.postPage,
        sendPost: currentUser.sendPost,
    });

    const [formError, setFormError] = useState({});

    function handleChange(e) {
        setFormValue((oldvalue) => ({
            ...oldvalue,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const errors = updateValidation(formValue);
        
        setFormError(errors);
        setTimeout(() => {
            setFormError({});
        }, 4000)

        if (Object.values(errors).length === 0) {
            updateUser(userId, formValue);
        }
    }
    return (
        <>
            {userError && <h3 className='error'>{userError}</h3>}
            {Object.values(formError).length > 0 &&
                Object.values(formError).map((error, index) => (
                    <div className='error-form' key={index} >
                        <p>{error}</p>
                    </div>
                ))}
            <div className='form-component'>
                <div className='form' onSubmit={handleSubmit}>
                    <form >
                        <h2>Edit Profile</h2>
                        <input type="text" name='email' placeholder='Email...'
                            onChange={handleChange} value={formValue.email} />
                        <input type="text" name='username' placeholder='Username...'
                            onChange={handleChange} value={formValue.username} />
                        <input type="text" name='image' placeholder='Image...'
                            onChange={handleChange} value={formValue.image} />
                        <input type="password" name='password' placeholder='Password...'
                            onChange={handleChange} value={formValue.password} />
                        <input type="password" name='reppass' placeholder='Confirm Password...'
                            onChange={handleChange} value={formValue.reppass} />
                        <button>Edit</button>
                    </form>
                    <span>If You Want To Go Back <Link to='/profile'> Profile</Link></span>
                </div>
            </div>
        </>
    )
}
