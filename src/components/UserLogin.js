import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext';

export const UserLogin = () => {

    const { loginUser, userError } = useContext(UserContext);

    const [formValue, setFormValue] = useState({
        email: '',
        password: '',
    });

    const [formError, setFormError] = useState('');

    function handleChange(e) {
        setFormValue((oldvalue) => ({
            ...oldvalue,
            [e.target.name]: e.target.value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (Object.values(formValue).every((value) => value !== "")) {
            loginUser(formValue);
        } else {
            const error = 'Write the empty filds.';
            setFormError(error);
            setTimeout(() => {
                setFormError('');
            }, 3000)
        }
    }

    return (
        <>
         {userError && <h3 className='error'>{userError}</h3>}
            {formError && <h3  className='error'>{formError}</h3>}
            <div className='form-component'>
                <div className='form'>
                    <form onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <input type="text" name='email' placeholder='Email...'
                            onChange={handleChange} value={formValue.email} />

                        <input type="password" name='password' placeholder='Password...'
                            onChange={handleChange} value={formValue.password} />
                        <button>Register</button>
                    </form>
                    <span>You Don't Have A Account <Link to='/register'> Register</Link></span>
                </div>
            </div>
        </>
    )
}
