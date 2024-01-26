import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { UserContext } from '../context/UserContext';
import registerValidation from '../validation/registerValidation';

export const UserRegister = () => {

    const { registerUser, userError } = useContext(UserContext);

    const [formValue, setFormValue] = useState({
        email: '',
        username: '',
        image: '',
        password: '',
        reppass: '',
        _id: uuidv4(),
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
        const errors = registerValidation(formValue);
        console.log(errors);
        setFormError(errors);
        setTimeout(() => {
            setFormError({});
        }, 4000)

        if (Object.values(errors).length === 0) {
            registerUser(formValue);
        }
    }
    console.log(Object.values(formError).length)
    console.log(Object.values(formError).map((error, index) => index))
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
                        <h2>Register</h2>
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
                        <button>Register</button>
                    </form>
                    <span>You Have A Account <Link to='/login'> Login</Link></span>
                </div>
            </div>
        </>
    )
}
